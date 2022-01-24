import { SERVICE } from 'components/SocialIcon/types'

export enum CATEGORY {
  AF = 'af',
  IDW = 'idw',
}

export type Icon = {
  category: CATEGORY
  service: SERVICE
  url: string
  label: string
}
