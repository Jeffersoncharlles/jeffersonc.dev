export const groupByCategory = <T extends { category?: string | null }>(
  items: T[],
): Record<string, T[]> => {
  const groups: Record<string, T[]> = {}

  for (const item of items) {
    const key = item.category ?? 'uncategorized'

    if (!groups[key]) {
      groups[key] = []
    }

    groups[key].push(item)
  }

  return groups
}
