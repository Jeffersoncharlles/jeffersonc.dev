import { ProjectCard } from '@/app/(app)/(vscode)/(rotas)/projects/_components/project-card'

import { makeGetProjects } from '@/core/infra/services/projects-services'
import { render, screen } from '@/shared/utils/test-utils'
import { mockProjectsData } from '../mocks/mockProjectData'

const mockMakeGetProject = jest.mocked(makeGetProjects)

jest.mock('@/core/infra/services/projects-services', () => ({
  makeGetProjects: jest.fn(() => ({
    execute: jest.fn(),
  })),
}))

jest.mock('@payloadcms/richtext-lexical/react', () => ({
  RichText: jest.fn(() => <div data-testid="rich-text" />),
}))

const makeSut = async () => {
  mockMakeGetProject.mockReturnValue({
    execute: jest.fn().mockResolvedValue(mockProjectsData),
  } as unknown as ReturnType<typeof makeGetProjects>)

  const ui = await ProjectCard({ project: mockProjectsData[0] })
  return render(ui)
}

describe('ProjectCard', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the project card with correct name and technologies', async () => {
    await makeSut()

    const item1Name = await screen.findByText('Plataforma de Portfolio')
    const item1Technologies = await screen.findByText('React, Next.js')

    expect(item1Name).toBeInTheDocument()
    expect(item1Technologies).toBeInTheDocument()
  })
})
