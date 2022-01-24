import React from 'react'
import { SERVICE } from 'components/SocialIcon/types'
import Image from 'next/image'

import beatport from 'assets/images/icons/beatport.svg'
import facebook from 'assets/images/icons/facebook.svg'
import instagram from 'assets/images/icons/instagram.svg'
import mixcloud from 'assets/images/icons/mixcloud.svg'
import soundcloud from 'assets/images/icons/soundcloud.svg'
import twitter from 'assets/images/icons/twitter.svg'
import youtube from 'assets/images/icons/youtube.svg'

type Props = {
  service: SERVICE
}

export const getIcon = (service: SERVICE): any => {
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
  }
}

export const SocialIcon = ({ service }: Props) => {
  return (
    <div className='max-w-[48px] lg:max-w-[64px]'>
      <Image src={getIcon(service)} width={'100%'} height={'100%'} />
    </div>
  )
}

export default { SocialIcon }
