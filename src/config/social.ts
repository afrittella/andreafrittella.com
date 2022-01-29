import { CATEGORY, SocialLink } from 'components/SocialButton/types'
import { SERVICE } from 'components/SocialIcon/types'

export const socialLinks: SocialLink[] = [
  {
    category: CATEGORY.IDW,
    service: SERVICE.BEATPORT,
    url: 'https://www.beatport.com/artist/irregular-disco-workers/154413',
    label: '@irregular-disco-workers',
  },
  {
    category: CATEGORY.AF,
    service: SERVICE.FACEBOOK,
    url: 'https://www.facebook.com/andrea.frittella',
    label: '@andrea.frittella',
  },
  {
    category: CATEGORY.IDW,
    service: SERVICE.FACEBOOK,
    url: 'https://www.facebook.com/IrregularDiscoWorkers',
    label: '@IrregularDiscoWorkers',
  },
  {
    category: CATEGORY.AF,
    service: SERVICE.INSTAGRAM,
    url: 'https://www.instagram.com/a_frittella',
    label: '@a_frittella',
  },
  {
    category: CATEGORY.AF,
    service: SERVICE.TWITTER,
    url: 'https://twitter.com/a_frittella',
    label: '@a_frittella',
  },
  {
    category: CATEGORY.IDW,
    service: SERVICE.YOUTUBE,
    url: 'https://youtube.com/user/IDWChannel',
    label: '@IDWChannel',
  },
  {
    category: CATEGORY.AF,
    service: SERVICE.SOUNDCLOUD,
    url: 'https://soundcloud.com/andreafrittella',
    label: '@andreafrittella',
  },
  {
    category: CATEGORY.IDW,
    service: SERVICE.SOUNDCLOUD,
    url: 'https://soundcloud.com/irregulardiscoworkers',
    label: '@irregulardiscoworkers',
  },
  {
    category: CATEGORY.AF,
    service: SERVICE.MIXCLOUD,
    url: 'https://www.mixcloud.com/andreafrittella',
    label: '@andreafrittella',
  },
  {
    category: CATEGORY.IDW,
    service: SERVICE.MIXCLOUD,
    url: 'https://www.mixcloud.com/irregulardiscoworkers',
    label: '@irregulardiscoworkers',
  },
]

export const getSocialLinks = (
  category: CATEGORY,
  links: SocialLink[]
): SocialLink[] => {
  return links.filter((link) => link.category === category)
}
