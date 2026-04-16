export function sortByDescription<T extends { description?: string | null }>(
  data: T[],
  order: string[] = ['Front-end', 'CSS', 'Back-end', 'Linguagens'],
) {
  return [...data].sort((a, b) => {
    const descA = a.description || 'Geral'
    const descB = b.description || 'Geral'

    const indexA = order.indexOf(descA)
    const indexB = order.indexOf(descB)

    // Se não achar no array de ordem, joga para o final (Geral)
    const posA = indexA === -1 ? 999 : indexA
    const posB = indexB === -1 ? 999 : indexB

    return posA - posB
  })
}
