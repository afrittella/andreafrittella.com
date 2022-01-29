import { SERVICE } from 'components/SocialIcon/types'

export enum CATEGORY {
  AF = 'af',
  IDW = 'idw',
}

export type SocialLink = {
  category: CATEGORY
  service: SERVICE
  url: string
  label: string
}
