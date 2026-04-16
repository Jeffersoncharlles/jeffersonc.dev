import { getPayload } from 'payload'
import { PayloadHomeRepository } from '@/core/infra/cms/repositories/payload-home-repository'
import { mockDocs } from '@/tests/mocks/mockCards'

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
  const sut = new PayloadHomeRepository()
  return { sut }
}

describe('PayloadHomeRepository', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return mapped home cards successfully', async () => {
    const { sut } = makeSut()

    const mockPayload = {
      find: jest.fn().mockResolvedValue({ docs: mockDocs }),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    const result = await sut.findAllCardsHome()

    expect(getPayload).toHaveBeenCalledTimes(1)
    expect(mockPayload.find).toHaveBeenCalledWith({ collection: 'home-cards' })
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual({
      id: '123e4567-e89b-12d3-a456-426614174000',
      title: 'Test Card',
      badge: 'New',
      description: 'Test Description',
      icon: 'code',
      color: 'blue',
      tags: ['react', 'next'],
      order: 1,
    })
  })

  it('should throw an error if card validation fails', async () => {
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

    await expect(sut.findAllCardsHome()).rejects.toThrow(
      'Card inválido detectado',
    )

    expect(consoleErrorSpy).toHaveBeenCalled()
    consoleErrorSpy.mockRestore()
  })
})
