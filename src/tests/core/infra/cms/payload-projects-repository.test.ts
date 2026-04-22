import { getPayload } from 'payload'
import { PayloadProjectsRepository } from '@/core/infra/cms/repositories/payload-projects-repository'
import { mockProjectsData } from '@/tests/mocks/mockProjectData'

jest.mock('payload', () => ({
  getPayload: jest.fn(),
  findByID: jest.fn(),
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

  it('should return is populated technologies as strings', async () => {
    const { sut } = makeSut()

    const mockDocsWithPopulatedTech = [
      {
        ...mockProjectsData[0],
        technologies: [{ name: 'TypeScript' }, { name: 'React' }, 'Node.js'],
      },
    ]

    const mockPayload = {
      find: jest.fn().mockResolvedValue({ docs: mockDocsWithPopulatedTech }),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    const result = await sut.findAllProjects()

    expect(result).toHaveLength(1)
    expect(result[0].technologies).toEqual(['TypeScript', 'React', 'Node.js'])
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

  it('should find a project by ID', async () => {
    const { sut } = makeSut()

    const mockPayload = {
      findByID: jest.fn().mockResolvedValue(mockProjectsData[0]),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    const result = await sut.findProjectById('1')

    expect(getPayload).toHaveBeenCalledTimes(1)
    expect(mockPayload.findByID).toHaveBeenCalledWith({
      collection: 'projects',
      id: '1',
    })
    expect(result).toEqual(mockProjectsData[0])
  })
  it('should find a project by ID an  throw an error if project validation fails', async () => {
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
      findByID: jest.fn().mockResolvedValue(invalidMockDocs[0]),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    await expect(sut.findProjectById('1')).rejects.toThrow(
      'Project inválido detectado, veja o log para detalhes',
    )

    expect(consoleErrorSpy).toHaveBeenCalled()
    consoleErrorSpy.mockRestore()
  })

  it('should return null if project not found by ID', async () => {
    const { sut } = makeSut()

    const mockPayload = {
      findByID: jest.fn().mockResolvedValue(null),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    const result = await sut.findProjectById('non-existent-id')

    expect(getPayload).toHaveBeenCalledTimes(1)
    expect(mockPayload.findByID).toHaveBeenCalledWith({
      collection: 'projects',
      id: 'non-existent-id',
    })
    expect(result).toBeNull()
  })
  it('should return is populated technologies as strings when finding by ID', async () => {
    const { sut } = makeSut()

    const mockDocWithPopulatedTech = {
      ...mockProjectsData[0],
      technologies: [{ name: 'TypeScript' }, { name: 'React' }, 'Node.js'],
    }

    const mockPayload = {
      findByID: jest.fn().mockResolvedValue(mockDocWithPopulatedTech),
    }
    ;(getPayload as jest.Mock).mockResolvedValue(mockPayload)

    const result = await sut.findProjectById('1')

    expect(result).not.toBeNull()
    expect(result?.technologies).toEqual(['TypeScript', 'React', 'Node.js'])
  })
})
