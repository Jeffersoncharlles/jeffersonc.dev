import { ArticleListCard } from '@/app/(app)/blog/_components/article-list-card'
import { makeGetBlogArticles } from '@/core/infra/services/blog-services'
import { render, screen } from '@/shared/utils/test-utils'
import { articleMock } from '../mocks/mock-blog'

const mockMakeGetBlogArticles = jest.mocked(makeGetBlogArticles)

jest.mock('@/core/infra/services/blog-services', () => ({
  makeGetBlogArticles: jest.fn(() => ({
    execute: jest.fn(),
  })),
}))

const makeSut = async () => {
  mockMakeGetBlogArticles.mockReturnValue({
    execute: jest.fn().mockResolvedValue(articleMock),
  } as unknown as ReturnType<typeof makeGetBlogArticles>)

  const ui = ArticleListCard({ article: articleMock })
  return render(ui)
}

describe('ArticleListCard', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the list of cards correctly', async () => {
    await makeSut()
    const cardTitle = await screen.findByText(articleMock.title)
    const cardDescription = await screen.findByText(articleMock.description)
    expect(cardTitle).toBeInTheDocument()
    expect(cardDescription).toBeInTheDocument()
  })
})
