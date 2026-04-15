import { ExperiencesList } from '@/app/(app)/(vscode)/(rotas)/experiencia/_components/experiences-list'
import { makeGetExperience } from '@/core/infra/services/experience-services'
import { render, screen } from '@/shared/utils/test-utils'
import { mockExperienceData } from '../mocks/mockExperienceData'

const mockMakeGetExperience = jest.mocked(makeGetExperience)

jest.mock('@/core/infra/services/experience-services', () => ({
  makeGetExperience: jest.fn(() => ({
    execute: jest.fn(),
  })),
}))

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
