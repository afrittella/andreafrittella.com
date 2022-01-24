import React from 'react'
import home from 'assets/images/home.png'
import about from 'assets/images/about.png'
import Image from 'next/image'

type Props = {
  page?: 'home' | 'about'
}

const getImage = (page: Props['page']) => {
  switch (page) {
    case 'about':
      return about
    default:
      return home
  }
}

const BackgroundPhoto = ({ page = 'home' }: Props) => (
  <Image
    src={getImage(page)}
    layout='intrinsic'
    alt='AndreaFrittella.com'
    placeholder='blur'
  />
)

export { BackgroundPhoto }
