export const getIconUrl = (
  slug: string,
  provider: 'skill' | 'syvixor' | 'vercel' = 'syvixor',
) => {
  const baseUrls = {
    syvixor: `https://skills.syvixor.com/api/icons?i=${slug}`,
    skill: `https://skillicons.dev/icons?i=${slug}`,
    vercel: `https://skill-icons-web.vercel.app/api/icons?i=${slug}`,
  }
  return baseUrls[provider]
}
