import type { HomeCardsRepository } from '@/core/application/repositories/home-repository'
import { GetHomeCardsUseCase } from '@/core/application/use-cases/get-home-cards-use-case'
import type { HomeCardEntity } from '@/core/domain/entities/home-card'

const mockCards: HomeCardEntity[] = [
  {
    id: '123e4567-e89b-12d3-a456-426614174000',
    title: 'Test Card',
    badge: 'New',
    description: 'Test Description',
    icon: 'code',
    color: 'blue',
    tags: ['react'],
    order: 1,
  },
]

const makeSut = () => {
  const mockRepository: jest.Mocked<HomeCardsRepository> = {
    findAllCardsHome: jest.fn(),
  }
  const sut = new GetHomeCardsUseCase(mockRepository)

  return {
    sut,
    mockRepository,
  }
}

describe('GetHomeCardsUseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return cards successfully', async () => {
    const { sut, mockRepository } = makeSut()
    mockRepository.findAllCardsHome.mockResolvedValueOnce(mockCards)

    const result = await sut.execute()

    expect(mockRepository.findAllCardsHome).toHaveBeenCalledTimes(1)
    expect(result).toEqual(mockCards)
  })

  it('should throw an error when repository fails', async () => {
    const { sut, mockRepository } = makeSut()
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    const repositoryError = new Error('Database connection failed')

    mockRepository.findAllCardsHome.mockRejectedValueOnce(repositoryError)

    await expect(sut.execute()).rejects.toThrow(
      'Não conseguimos carregar os cards agora. ',
    )

    expect(mockRepository.findAllCardsHome).toHaveBeenCalledTimes(1)
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'HomeCardsUseCase Error:',
      repositoryError,
    )

    consoleErrorSpy.mockRestore()
  })
})
