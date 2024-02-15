import { CATEGORY, SocialLink } from 'components/SocialButton/types'

export const getSocialLinks = (
  category: CATEGORY,
  links: SocialLink[],
): SocialLink[] => {
  return links.filter((link) => link.category === category)
}
