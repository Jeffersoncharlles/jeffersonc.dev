import { InfrastructureList } from '@/app/(app)/(vscode)/(rotas)/setup/_components/infrastructure-list'
import { makeGetInfrastructure } from '@/core/infra/services/infrastructure-services'
import { render, screen } from '@/shared/utils/test-utils'
import { mockInfrastructureData } from '../mocks/mockInfrastructureData'

const mockMakeGetInfrastructure = jest.mocked(makeGetInfrastructure)

jest.mock('@/core/infra/services/infrastructure-services', () => ({
  makeGetInfrastructure: jest.fn(() => ({
    execute: jest.fn(),
  })),
}))

const makeSut = async () => {
  mockMakeGetInfrastructure.mockReturnValue({
    execute: jest.fn().mockResolvedValue(mockInfrastructureData),
  } as unknown as ReturnType<typeof makeGetInfrastructure>)

  const ui = await InfrastructureList()
  return render(ui)
}

describe('InfrastructureList', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the list of infrastructure items correctly', async () => {
    await makeSut()

    const item1Name = await screen.findByText('Next.js')
    const item2Name = await screen.findByText('Node.js')
    const item3Name = await screen.findByText('Docker')
    const item4Name = await screen.findByText('Kafka')

    expect(item1Name).toBeInTheDocument()
    expect(item2Name).toBeInTheDocument()
    expect(item3Name).toBeInTheDocument()
    expect(item4Name).toBeInTheDocument()
  })
})
