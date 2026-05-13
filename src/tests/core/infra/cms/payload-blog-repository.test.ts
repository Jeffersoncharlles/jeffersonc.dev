import { getPayload } from 'payload'
import { PayloadBlogRepository } from '@/core/infra/cms/repositories/payload-blog-repository'
import { articleMock } from '@/tests/mocks/mock-blog'

jest.mock('payload', () => ({
  getPayload: jest.fn(),
  buildConfig: jest.fn((config) => config),
}))

jest.mock('@payloadcms/db-postgres', () => ({
  postgresAdapter: jest.fn(() => ({})),
}))

jest.mock('@payloadcms/richtext-lexical', () => ({
  lexicalEditor: jest.fn(() => ({})),
}))

jest.mock('@payloadcms/storage-s3', () => ({
  s3Storage: jest.fn(() => ({})),
}))

const makeSut = () => {
  const sut = new PayloadBlogRepository()
  return { sut }
}

describe('PayloadBlogRepository', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return mapped blog items successfully', async () => {
    const { sut } = makeSut()

    const mockPayload = {
      find: jest.fn().mockResolvedValue({ docs: [articleMock] }),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    const result = await sut.findAllPosts()

    expect(getPayload).toHaveBeenCalledTimes(1)
    expect(mockPayload.find).toHaveBeenCalledWith({
      collection: 'blog',
      limit: 50,
      sort: '-publishedAt',
      depth: 2,
    })
    expect(result).toHaveLength(1)
  })

  it('should throw an error if blog validation fails', async () => {
    const { sut } = makeSut()
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    const invalidMockDocs = [
      {
        id: 'invalid-uuid',
        title: '',
        institution: '',
        category: '',
        description: 'Missing name, institution, and invalid uuid',
      },
    ]

    const mockPayload = {
      find: jest.fn().mockResolvedValue({ docs: invalidMockDocs }),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    await expect(sut.findAllPosts()).rejects.toThrow('article is invalid')

    expect(consoleErrorSpy).toHaveBeenCalled()
    consoleErrorSpy.mockRestore()
  })
})
