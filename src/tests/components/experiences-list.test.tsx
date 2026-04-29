import { ExperiencesList } from '@/app/(app)/(vscode)/(rotas)/experiencia/_components/experiences-list'
import { makeGetExperience } from '@/core/infra/services/experience-services'
import { formatExperiencePeriod } from '@/shared/utils/format-experience-period'
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
  it('should render the list of experience items correctly in format date', async () => {
    await makeSut()

    const item1Role = await screen.findByText(
      'Engenheiro de Software Full-Cycle',
    )

    const formatDate = formatExperiencePeriod(
      mockExperienceData[0].startDate,
      mockExperienceData[0].endDate,
    )

    const item1Date = await screen.findByText(formatDate)

    expect(item1Role).toBeInTheDocument()
    expect(item1Date).toBeInTheDocument()
  })
  describe('formatExperiencePeriod', () => {
    it('should format the experience period correctly', () => {
      const startDate = '2022-01-01'
      const endDate = '2023-01-01'

      const result = formatExperiencePeriod(startDate, endDate)

      expect(result).toBe('jan 2022 até jan 2023')
    })

    it('should format the experience period correctly when end date is null', () => {
      const startDate = '2022-01-01'
      const endDate = null

      const result = formatExperiencePeriod(startDate, endDate)

      expect(result).toBe('jan 2022 até o momento')
    })

    it('should return "Data inválida" for invalid start date', () => {
      const startDate = 'invalid-date'
      const endDate = '2023-01-01'

      const result = formatExperiencePeriod(startDate, endDate)

      expect(result).toBe('Data inválida')
    })

    it('should return "Data inválida" for invalid end date', () => {
      const startDate = '2022-01-01'
      const endDate = 'invalid-date'

      const result = formatExperiencePeriod(startDate, endDate)
      expect(result).toBe('jan 2022 até o momento')
    })
  })
})
