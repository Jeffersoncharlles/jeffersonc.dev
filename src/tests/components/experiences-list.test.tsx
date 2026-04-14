import { ExperiencesList } from '@/app/(app)/(vscode)/(rotas)/experiencia/_components/experiences-list'
import { makeGetExperience } from '@/core/infra/services/experience-services'
import { render, screen } from '@/shared/utils/test-utils'

const mockMakeGetExperience = jest.mocked(makeGetExperience)

jest.mock('@/core/infra/services/experience-services', () => ({
  makeGetExperience: jest.fn(() => ({
    execute: jest.fn(),
  })),
}))

const mockExperienceData = [
  {
    id: '1',
    companyName: 'RBS TRANSPORTES LTDA',
    role: 'Engenheiro de Software Full-Cycle',
    startDate: '2018-01-20',
    endDate: '2026-02-15',
    description: 'Descrição da experiência.',
  },
  {
    id: '2',
    companyName: 'JefferDeveloper',
    role: 'Desenvolvedor Full Stack',
    startDate: '2020-08-01',
    endDate: null,
    description: 'Descrição da experiência.',
  },
]

const makeSut = async () => {
  mockMakeGetExperience.mockReturnValue({
    execute: jest.fn().mockResolvedValue(mockExperienceData),
  } as unknown as ReturnType<typeof makeGetExperience>)

  const ui = await ExperiencesList()
  return render(ui)
}

describe('ExperienceList', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the list of experience items correctly', async () => {
    await makeSut()

    const item1CompanyName = await screen.findByText('RBS TRANSPORTES LTDA')
    const item1Role = await screen.findByText(
      'Engenheiro de Software Full-Cycle',
    )

    const descriptions = await screen.findAllByText('Descrição da experiência.')

    const item2CompanyName = await screen.findByText('JefferDeveloper')
    const item2Role = await screen.findByText('Desenvolvedor Full Stack')

    expect(item1CompanyName).toBeInTheDocument()
    expect(item1Role).toBeInTheDocument()

    expect(descriptions).toHaveLength(2)

    expect(item2CompanyName).toBeInTheDocument()
    expect(item2Role).toBeInTheDocument()
  })
})
