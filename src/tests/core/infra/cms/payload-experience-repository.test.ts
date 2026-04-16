import { getPayload } from 'payload'
import { PayloadExperienceRepository } from '@/core/infra/cms/repositories/payload-experience-repository'
import { mockExperienceDocs } from '@/tests/mocks/mockExperienceData'

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
  const sut = new PayloadExperienceRepository()
  return { sut }
}

describe('PayloadExperienceRepository', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return mapped experience items successfully', async () => {
    const { sut } = makeSut()

    const mockPayload = {
      find: jest.fn().mockResolvedValue({ docs: mockExperienceDocs }),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    const result = await sut.findAllExperiences()

    expect(getPayload).toHaveBeenCalledTimes(1)
    expect(mockPayload.find).toHaveBeenCalledWith({ collection: 'experience' })
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual({
      id: '123e4567-e89b-12d3-a456-426614174000',
      companyName: 'Example Company',
      role: 'Engenheiro de Software Full-Cycle',
      startDate: '2018-01-20',
      endDate: '2026-02-15',
      description: 'Descrição da experiência.',
      updatedAt: '2024-06-01T12:00:00Z',
      createdAt: '2024-01-01T12:00:00Z',
    })
  })

  it('should throw an error if experience validation fails', async () => {
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

    await expect(sut.findAllExperiences()).rejects.toThrow(
      'Experience inválido detectado',
    )

    expect(consoleErrorSpy).toHaveBeenCalled()
    consoleErrorSpy.mockRestore()
  })
})
