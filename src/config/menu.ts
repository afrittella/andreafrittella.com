import { MenuItem, TabSelectorProps } from '../types'

export const menuItems: MenuItem[] = [
  {
    key: 'about',
    label: 'about',
    url: '/about',
  },
  {
    key: 'music',
    label: 'music+video',
    url: '/music',
  },
  /*{
    key: 'social',
    label: 'social',
    url: '/social',
  },*/
  {
    key: 'ee',
    label: 'electronic emotions',
    url: '/electronic-emotions',
  },
  {
    key: 'idw',
    label: 'irregular disco workers',
    url: '/idw',
  },
]

export const youtubeTabs: Pick<TabSelectorProps, 'label' | 'tabKey'>[] = [
  {
    tabKey: 'releases',
    label: 'Releases',
  },
  {
    tabKey: 'remixes',
    label: 'Remixes',
  },
  {
    tabKey: 'edits',
    label: 'Edits & Reworks',
  },
  {
    tabKey: 'mixtapes',
    label: 'Mixtapes',
  },
]
