import { AcademicList } from '@/app/(app)/(vscode)/(rotas)/academica/_components/academic-list'
import { makeGetAcademic } from '@/core/infra/services/academica-services'
import { render, screen } from '@/shared/utils/test-utils'

const mockMakeGetAcademic = jest.mocked(makeGetAcademic)

jest.mock('@/core/infra/services/academica-services', () => ({
  makeGetAcademic: jest.fn(() => ({
    execute: jest.fn(),
  })),
}))

const mockAcademicData = [
  {
    id: '1',
    name: 'Bacharelado em Ciência da Computação',
    institution: 'Universidade XYZ',
    type: 'graduacao',
    description: 'Descrição do curso de graduação.',
    startDate: '2015-01-01',
    endDate: '2018-12-31',
  },
  {
    id: '2',
    name: 'Mestrado em Inteligência Artificial',
    institution: 'Universidade ABC',
    type: 'pos_graduacao',
    description: 'Descrição do curso de pós-graduação.',
    startDate: '2019-01-01',
    endDate: null,
  },
]

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
})
