import { getPayload } from 'payload'
import { PayloadProjectsRepository } from '@/core/infra/cms/repositories/payload-projects-repository'
import { mockProjectsData } from '@/tests/mocks/mockProjectData'

jest.mock('payload', () => ({
  getPayload: jest.fn(),
  buildConfig: jest.fn((config) => config),
}))

jest.mock('@payloadcms/db-postgres', () => ({
  postgresAdapter: jest.fn(),
}))

jest.mock('@payloadcms/richtext-lexical', () => ({
  lexicalEditor: jest.fn(),
}))

const makeSut = () => {
  const sut = new PayloadProjectsRepository()
  return { sut }
}

describe('PayloadProjectsRepository', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return mapped projects successfully', async () => {
    const { sut } = makeSut()

    const mockPayload = {
      find: jest.fn().mockResolvedValue({ docs: mockProjectsData }),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    const result = await sut.findAllProjects()

    expect(getPayload).toHaveBeenCalledTimes(1)
    expect(mockPayload.find).toHaveBeenCalledWith({
      collection: 'projects',
      limit: 100,
      pagination: false,
    })
    expect(result).toHaveLength(2)
    expect(result[0]).toEqual(mockProjectsData[0])
  })

  it('should throw an error if project validation fails', async () => {
    const { sut } = makeSut()
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    const invalidMockDocs = [
      {
        id: 'invalid-uuid',
        title: '',
        description: 'Missing title and invalid uuid',
      },
    ]

    const mockPayload = {
      find: jest.fn().mockResolvedValue({ docs: invalidMockDocs }),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    await expect(sut.findAllProjects()).rejects.toThrow(
      'Project inválido detectado, veja o log para detalhes',
    )

    expect(consoleErrorSpy).toHaveBeenCalled()
    consoleErrorSpy.mockRestore()
  })
})
