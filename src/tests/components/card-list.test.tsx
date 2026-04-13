import { CardList } from '@/app/(app)/(vscode)/_components/card-list'
import type { HomeCardEntity } from '@/core/domain/entities/home-card'
import { makeGetHomeCards } from '@/core/infra/services/home-service'
import { render, screen } from '@/shared/utils/test-utils'

const mockMakeGetHomeCards = jest.mocked(makeGetHomeCards)

jest.mock('@/core/infra/services/home-service', () => ({
  makeGetHomeCards: jest.fn(() => ({
    execute: jest.fn(),
  })),
}))

const mockCards: HomeCardEntity[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    title: 'Card 1',
    badge: 'React',
    description: 'Test card description 1',
    icon: 'code',
    color: 'blue',
    tags: ['tag1', 'tag2', 'tag3'],
    order: 1,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    title: 'Card 2',
    badge: 'Next.js',
    description: 'Test card description 2',
    icon: 'code',
    color: 'purple',
    tags: ['tag4', 'tag5'],
    order: 2,
  },
]

interface MakeSutOptions {
  cards?: HomeCardEntity[] | null
}

const makeSut = async ({ cards = mockCards }: MakeSutOptions = {}) => {
  mockMakeGetHomeCards.mockReturnValue({
    execute: jest.fn().mockResolvedValue(cards),
  } as unknown as ReturnType<typeof makeGetHomeCards>)

  const ui = await CardList()
  return render(ui)
}

describe('CardList', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the list of cards correctly', async () => {
    await makeSut()

    const card1Title = await screen.findByText('Card 1')
    const card2Title = await screen.findByText('Card 2')
    const card1Description = await screen.findByText('Test card description 1')
    const card2Description = await screen.findByText('Test card description 2')

    expect(card1Title).toBeInTheDocument()
    expect(card2Title).toBeInTheDocument()
    expect(card1Description).toBeInTheDocument()
    expect(card2Description).toBeInTheDocument()
  })

  it('should render the badges correctly', async () => {
    await makeSut()

    const badge1 = await screen.findByText('React')
    const badge2 = await screen.findByText('Next.js')

    expect(badge1).toBeInTheDocument()
    expect(badge2).toBeInTheDocument()
  })

  it('should render tags correctly (showing only first 2)', async () => {
    await makeSut()

    const tag1 = await screen.findByText('tag1')
    const tag2 = await screen.findByText('tag2')
    const tag4 = await screen.findByText('tag4')

    expect(tag1).toBeInTheDocument()
    expect(tag2).toBeInTheDocument()
    expect(tag4).toBeInTheDocument()

    expect(screen.queryByText('tag3')).not.toBeInTheDocument()
  })

  it('should display "No cards available" message when no cards exist', async () => {
    await makeSut({ cards: null })

    const noCardsMessage = await screen.findByText('No cards available')
    expect(noCardsMessage).toBeInTheDocument()
  })

  it('should not display "No cards available" message when cards array is empty', async () => {
    await makeSut({ cards: [] })

    expect(screen.queryByText('No cards available')).not.toBeInTheDocument()
  })
})
