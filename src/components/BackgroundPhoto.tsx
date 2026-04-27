import home from 'assets/images/home.png'
import about from 'assets/images/about.png'
import ee from 'assets/images/logo_ee.png'
import idw from 'assets/images/idw.png'
import Image from 'next/image'

type Props = {
  page?: 'home' | 'about' | 'ee' | 'idw'
}

const getImage = (page: Props['page']) => {
  switch (page) {
    case 'about':
      return about
    case 'ee':
      return ee
    case 'idw':
      return idw
    default:
      return home
  }
}

const BackgroundPhoto = ({ page = 'home' }: Props) => (
  <Image
    src={getImage(page)}
    alt='AndreaFrittella.com'
    placeholder='blur'
    style={{
      maxWidth: '100%',
      height: 'auto',
    }}
  />
)

export { BackgroundPhoto }
