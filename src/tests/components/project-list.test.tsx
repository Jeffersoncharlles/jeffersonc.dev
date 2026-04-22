import { ProjectsList } from '@/app/(app)/(vscode)/(rotas)/projects/_components/projects-list'
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

  const ui = await ProjectsList()
  return render(ui)
}

describe('ProjectList', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the list of project items correctly', async () => {
    await makeSut()

    const item1Name = await screen.findByText('Plataforma de Portfolio')
    const item1Technologies = await screen.findByText('React, Next.js')

    const item2Name = await screen.findByText('Demo de Arquitetura Backend')
    const item2Technologies = await screen.findByText('Node.js, React')

    const richTextContents = screen.getAllByTestId('rich-text')

    expect(item1Name).toBeInTheDocument()
    expect(item1Technologies).toBeInTheDocument()

    expect(richTextContents[0]).toBeInTheDocument()

    expect(item2Name).toBeInTheDocument()
    expect(item2Technologies).toBeInTheDocument()

    expect(richTextContents[1]).toBeInTheDocument()
  })

  it('should render details page with project information', async () => {
    await makeSut()

    const clickableItems = screen.getAllByRole('link')

    expect(clickableItems[0]).toHaveAttribute(
      'href',
      `/projects/${mockProjectsData[0].id}?title=${encodeURIComponent(
        mockProjectsData[0].title,
      )}`,
    )

    expect(clickableItems[1]).toHaveAttribute(
      'href',
      `/projects/${mockProjectsData[1].id}?title=${encodeURIComponent(
        mockProjectsData[1].title,
      )}`,
    )
  })
})
