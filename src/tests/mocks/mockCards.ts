import type { HomeCardEntity } from '@/core/domain/entities/home-card'

export const mockCards: HomeCardEntity[] = [
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

export const mockDocs = [
  {
    id: '123e4567-e89b-12d3-a456-426614174000',
    title: 'Test Card',
    badgeLabel: 'New',
    description: 'Test Description',
    iconName: 'code',
    colorsCards: 'blue',
    footerTags: [{ tag: 'react' }, { tag: 'next' }],
    order: 1,
  },
]
