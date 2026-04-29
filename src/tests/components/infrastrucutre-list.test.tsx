import { InfrastructureList } from '@/app/(app)/(vscode)/(rotas)/setup/_components/infrastructure-list'
import { groupByCategory } from '@/app/(app)/(vscode)/(rotas)/setup/_hooks/group-by-category'
import { makeGetInfrastructure } from '@/core/infra/services/infrastructure-services'
import { sortByDescription } from '@/shared/utils/sort-by-description'
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

  describe('sortByDescription', () => {
    it('should sort items by the default order', () => {
      const items = [
        { id: '1', description: 'Linguagens' },
        { id: '2', description: 'Front-end' },
        { id: '3', description: 'Back-end' },
        { id: '4', description: 'CSS' },
      ]

      const result = sortByDescription(items)

      expect(result[0].description).toBe('Front-end')
      expect(result[1].description).toBe('CSS')
      expect(result[2].description).toBe('Back-end')
      expect(result[3].description).toBe('Linguagens')
    })

    it('should sort items with custom order', () => {
      const items = [
        { id: '1', description: 'Database' },
        { id: '2', description: 'Cloud / Deploy' },
        { id: '3', description: 'ORM / Query Builder' },
      ]

      const customOrder = ['ORM / Query Builder', 'Database', 'Cloud / Deploy']
      const result = sortByDescription(items, customOrder)

      expect(result[0].description).toBe('ORM / Query Builder')
      expect(result[1].description).toBe('Database')
      expect(result[2].description).toBe('Cloud / Deploy')
    })

    it('should place undefined/null descriptions at the end', () => {
      const items = [
        { id: '1', description: 'Front-end' },
        { id: '2', description: null },
        { id: '3', description: 'Back-end' },
        { id: '4', description: undefined },
      ]

      const result = sortByDescription(items)

      expect(result[0].description).toBe('Front-end')
      expect(result[1].description).toBe('Back-end')
      expect(result[2].description).toBeNull()
      expect(result[3].description).toBeUndefined()
    })

    it('should not mutate the original array', () => {
      const items = [
        { id: '1', description: 'Linguagens' },
        { id: '2', description: 'Front-end' },
      ]

      const originalOrder = [...items]
      sortByDescription(items)

      expect(items).toEqual(originalOrder)
    })
  })

  describe('groupByCategory', () => {
    it('should group items by their category', () => {
      const items = [
        { id: '1', name: 'Item 1', category: 'Frontend' },
        { id: '2', name: 'Item 2', category: 'Backend' },
        { id: '3', name: 'Item 3', category: 'Frontend' },
        { id: '4', name: 'Item 4', category: 'Backend' },
      ]

      const result = groupByCategory(items)

      expect(Object.keys(result)).toContain('Frontend')
      expect(Object.keys(result)).toContain('Backend')
      expect(result['Frontend']).toHaveLength(2)
      expect(result['Backend']).toHaveLength(2)
    })

    it('should group items with null/undefined category as "uncategorized"', () => {
      const items = [
        { id: '1', name: 'Item 1', category: 'Frontend' },
        { id: '2', name: 'Item 2', category: null },
        { id: '3', name: 'Item 3', category: undefined },
      ]

      const result = groupByCategory(items)

      expect(result).toHaveProperty('Frontend')
      expect(result).toHaveProperty('uncategorized')
      expect(result['uncategorized']).toHaveLength(2)
    })

    it('should preserve item properties in grouped result', () => {
      const items = [
        { id: '1', name: 'PostgreSQL', category: 'Database' },
        { id: '2', name: 'MySQL', category: 'Database' },
      ]

      const result = groupByCategory(items)

      expect(result['Database'][0]).toHaveProperty('id', '1')
      expect(result['Database'][0]).toHaveProperty('name', 'PostgreSQL')
      expect(result['Database'][1]).toHaveProperty('id', '2')
      expect(result['Database'][1]).toHaveProperty('name', 'MySQL')
    })

    it('should handle empty array', () => {
      const items: any[] = []
      const result = groupByCategory(items)

      expect(result).toEqual({})
    })

    it('should return groups in insertion order', () => {
      const items = [
        { id: '1', name: 'Item 1', category: 'Category A' },
        { id: '2', name: 'Item 2', category: 'Category B' },
        { id: '3', name: 'Item 3', category: 'Category C' },
      ]

      const result = groupByCategory(items)

      expect(Object.keys(result)).toEqual([
        'Category A',
        'Category B',
        'Category C',
      ])
    })
  })
})
