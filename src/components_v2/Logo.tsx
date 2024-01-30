import Link from 'next/link'

const Logo = () => (
  <div className={'flex flex-col items-center justify-center'}>
    <Link
      href='/'
      className='typo-title text-gradient uppercase max-w-min whitespace-nowrap text-3xl xs:text-4xl md:text-4xl'
    >
      Andrea Frittella
    </Link>
    <div className={'typo-default text-xl text-gradient opacity-60'}>dj | producer | software engineer</div>
  </div>
)

export { Logo }
