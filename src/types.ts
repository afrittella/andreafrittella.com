import React from 'react'
import { SERVICE } from './components/SocialIcon/types'

export type MenuItem = {
  key: string
  label?: string
  url?: string
  active?: boolean
  target?: string
}

export type Menu = {
  activePage: string
}

export type LayoutProps = React.PropsWithChildren<{
  activePage?: string
  title?: string
  showBackground?: boolean
  centered?: boolean
}>

export type VideoThumbnailProps = {
  title: string
  image: string
  videoId: string
  isBig?: boolean
  isTouchDevice?: boolean
  onThumbClick: (videoId: string) => void
}

export type TabSelectorProps = {
  activeTab: string
  tabKey: string
  label: string
  onSelectorClick?: (tab: string) => void
}

export enum CATEGORY {
  AF = 'af',
  IDW = 'idw',
}

export type SocialLinkProps = {
  category: CATEGORY
  service: SERVICE
  url: string
  label: string
}
