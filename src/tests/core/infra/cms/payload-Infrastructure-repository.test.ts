import { getPayload } from 'payload'
import { PayloadInfrastructuresRepository } from '@/core/infra/cms/repositories/payload-Infrastructure-repository'

import { mockInfrastructureDocs } from '@/tests/mocks/mockInfrastructureData'

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
  const sut = new PayloadInfrastructuresRepository()
  return { sut }
}

describe('PayloadInfrastructuresRepository', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return mapped infrastructures successfully', async () => {
    const { sut } = makeSut()

    const mockPayload = {
      find: jest.fn().mockResolvedValue({ docs: mockInfrastructureDocs }),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    const result = await sut.findAllInfra()

    expect(getPayload).toHaveBeenCalledTimes(1)
    expect(mockPayload.find).toHaveBeenCalledWith({
      collection: 'infrastructure',
      limit: 100,
      pagination: false,
    })
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual(mockInfrastructureDocs[0])
  })

  it('should throw an error if infrastructure validation fails', async () => {
    const { sut } = makeSut()
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    const invalidMockDocs = [
      {
        id: 'invalid-uuid',
        name: '',
        description: 'Missing name and invalid uuid',
      },
    ]

    const mockPayload = {
      find: jest.fn().mockResolvedValue({ docs: invalidMockDocs }),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    await expect(sut.findAllInfra()).rejects.toThrow(
      'Infrastructure inválida detectada',
    )

    expect(consoleErrorSpy).toHaveBeenCalled()
    consoleErrorSpy.mockRestore()
  })
})
