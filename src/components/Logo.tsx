import Link from 'next/link'

const Logo = () => (
  <Link href='/'>
    <a className='typo-title text-gradient uppercase max-w-min whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl '>
      Andrea Frittella
    </a>
  </Link>
)

export { Logo }
