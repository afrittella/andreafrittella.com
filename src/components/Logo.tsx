import Link from 'next/link'

const Logo = () => (
  <Link
    href='/'
    className='typo-title text-gradient uppercase max-w-min whitespace-nowrap text-3xl xs:text-4xl md:text-4xl'
  >
    Andrea Frittella
  </Link>
)

export { Logo }
