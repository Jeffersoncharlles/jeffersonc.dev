import { getPayload } from 'payload'

import { PayloadEducationRepository } from '@/core/infra/cms/repositories/payload-education-repository'
import { mockEducationDocs } from '@/tests/mocks/mockAcademicData'

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
  const sut = new PayloadEducationRepository()
  return { sut }
}

describe('PayloadEducationRepository', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return mapped education items successfully', async () => {
    const { sut } = makeSut()

    const mockPayload = {
      find: jest.fn().mockResolvedValue({ docs: mockEducationDocs }),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    const result = await sut.findAllEducation()

    expect(getPayload).toHaveBeenCalledTimes(1)
    expect(mockPayload.find).toHaveBeenCalledWith({ collection: 'education' })
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual({
      id: '1',
      name: 'Bacharelado em Ciência da Computação',
      institution: 'Universidade XYZ',
      type: 'graduacao',
      description: 'Descrição do curso de graduação.',
      startDate: '2015-01-01',
      endDate: '2018-12-31',
      updatedAt: '2024-06-01T12:00:00Z',
      createdAt: '2024-01-01T12:00:00Z',
    })
  })

  it('should throw an error if education validation fails', async () => {
    const { sut } = makeSut()
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    const invalidMockDocs = [
      {
        id: 'invalid-uuid',
        name: '',
        institution: '',
        type: '',
        description: 'Missing name, institution, and invalid uuid',
      },
    ]

    const mockPayload = {
      find: jest.fn().mockResolvedValue({ docs: invalidMockDocs }),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    await expect(sut.findAllEducation()).rejects.toThrow(
      'Academic inválido detectado',
    )

    expect(consoleErrorSpy).toHaveBeenCalled()
    consoleErrorSpy.mockRestore()
  })
})
