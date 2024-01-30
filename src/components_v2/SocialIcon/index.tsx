import React from 'react'
import { SERVICE } from './types'
import Image from 'next/legacy/image'

import beatport from 'assets/images/icons/beatport.svg'
import facebook from 'assets/images/icons/facebook.svg'
import instagram from 'assets/images/icons/instagram.svg'
import mixcloud from 'assets/images/icons/mixcloud.svg'
import soundcloud from 'assets/images/icons/soundcloud.svg'
import twitter from 'assets/images/icons/twitter.svg'
import youtube from 'assets/images/icons/youtube.svg'
import linkedin from 'assets/images/icons/linkedin.svg'
import github from 'assets/images/icons/github.svg'
import web from 'assets/images/icons/web.svg'
import spotify from 'assets/images/icons/spotify.svg'

type Props = {
  service: SERVICE
}

export const getIcon = (service: SERVICE): string => {
  switch (service) {
    case SERVICE.BEATPORT:
      return beatport
    case SERVICE.FACEBOOK:
      return facebook
    case SERVICE.INSTAGRAM:
      return instagram
    case SERVICE.MIXCLOUD:
      return mixcloud
    case SERVICE.SOUNDCLOUD:
      return soundcloud
    case SERVICE.TWITTER:
      return twitter
    case SERVICE.YOUTUBE:
      return youtube
    case SERVICE.LINKEDIN:
      return linkedin
    case SERVICE.GITHUB:
      return github
    case SERVICE.WEB:
      return web
    case SERVICE.SPOTIFY:
      return spotify

  }
}

const SocialIcon = ({ service }: Props) => {
  return (
    <div className='max-w-[30px] lg:max-w-[40px]'>
      <Image
        src={getIcon(service)}
        alt={service}
        className={
          'opacity-60 hover:opacity-100 transition-opacity ease-in-out duration-200'
        }
      />
    </div>
  )
}

export { SocialIcon }
