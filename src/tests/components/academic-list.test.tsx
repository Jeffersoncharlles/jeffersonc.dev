import { AcademicList } from '@/app/(app)/(vscode)/(rotas)/academica/_components/academic-list'
import { makeGetAcademic } from '@/core/infra/services/academica-services'
import { render, screen } from '@/shared/utils/test-utils'
import { mockAcademicData } from '../mocks/mockAcademicData'

const mockMakeGetAcademic = jest.mocked(makeGetAcademic)

jest.mock('@/core/infra/services/academica-services', () => ({
  makeGetAcademic: jest.fn(() => ({
    execute: jest.fn(),
  })),
}))

const makeSut = async () => {
  mockMakeGetAcademic.mockReturnValue({
    execute: jest.fn().mockResolvedValue(mockAcademicData),
  } as unknown as ReturnType<typeof makeGetAcademic>)

  const ui = await AcademicList()
  return render(ui)
}

describe('AcademicList', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the list of academic items correctly', async () => {
    await makeSut()

    const item1Name = await screen.findByText(
      'Bacharelado em Ciência da Computação',
    )
    const item1Institution = await screen.findByText('Universidade XYZ')
    const item1Type = await screen.findByText('Graduação')
    const item1Description = await screen.findByText(
      'Descrição do curso de graduação.',
    )

    const item2Name = await screen.findByText(
      'Mestrado em Inteligência Artificial',
    )
    const item2Institution = await screen.findByText('Universidade ABC')
    const item2Type = await screen.findByText('Pós-graduação')
    const item2Description = await screen.findByText(
      'Descrição do curso de pós-graduação.',
    )

    expect(item1Name).toBeInTheDocument()
    expect(item1Institution).toBeInTheDocument()
    expect(item1Type).toBeInTheDocument()
    expect(item1Description).toBeInTheDocument()

    expect(item2Name).toBeInTheDocument()
    expect(item2Institution).toBeInTheDocument()
    expect(item2Type).toBeInTheDocument()
    expect(item2Description).toBeInTheDocument()
  })

  it('should render certificate grouped by institution and parsed topics', async () => {
    await makeSut()

    const jsExpertInstitution = await screen.findByText('Erick Wendel')
    const jsExpertTopics = await screen.findByText('Node.js Performance')
    const igniteReactInstitution = await screen.findByText('Rocketseat')
    const igniteReactTopics = await screen.findByText('Next.js')

    expect(jsExpertInstitution).toBeInTheDocument()
    expect(jsExpertTopics).toBeInTheDocument()
    expect(igniteReactInstitution).toBeInTheDocument()
    expect(igniteReactTopics).toBeInTheDocument()

    const jsExpertTopicsList = screen.getAllByRole('listitem')
    expect(jsExpertTopicsList.length).toBeGreaterThan(0)
  })
  it('should handle items without description gracefully', async () => {
    await makeSut()

    const certificateName = await screen.findByText(
      'Certificado Sem Instituição',
    )

    expect(certificateName).toBeInTheDocument()
  })

  it('should group multiple certifications from the same institution', async () => {
    await makeSut()
    const institutionHeader = screen.getByText('Erick Wendel')
    expect(institutionHeader).toBeInTheDocument()

    expect(await screen.findByText('JS Expert')).toBeInTheDocument()
    expect(
      await screen.findByText('Clean Code Especialista'),
    ).toBeInTheDocument()
  })
})
