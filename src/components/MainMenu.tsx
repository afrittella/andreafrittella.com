import Link from 'next/link'

type ItemProps = {
  label?: string
  url?: string
  active?: boolean
  target?: string
}

const MainMenuItem = ({
  label = '',
  url = '#',
  active = false,
  target,
}: ItemProps) => (
  <div className='flex flex-col items-center'>
    <div className='w-full'>
      <Link
        href={url}
        passHref={true}
        className={`transition-color ease-in-out duration-300 ${
          active ? 'text-white' : ''
        } hover:text-white`}
        target={target}
      >
        {label}
      </Link>
    </div>
    <div
      className={`${
        !active ? 'invisible' : ''
      } bg-white block text-center w-[10px] h-[10px] rounded-full mx-30`}
    />
  </div>
)

type Props = {
  activePage: string
}

const MainMenu = ({ activePage = 'home' }: Props) => {
  return (
    <ul className='text-gray-500 list-none flex w-full items-center justify-between text-lg lg:text-xl'>
      <li>
        <MainMenuItem
          label={'about'}
          url='/about'
          active={activePage === 'about'}
        />
      </li>
      <li>
        <MainMenuItem
          label={'music'}
          url='/music'
          active={activePage === 'music'}
        />
      </li>
      <li>
        <MainMenuItem
          label={'social'}
          url='/social'
          active={activePage === 'social'}
        />
      </li>
      <li>
        <MainMenuItem
          label={'irregular disco workers'}
          url='https://soundcloud.com/IrregularDiscoWorkers'
          active={activePage === 'blog'}
          target={'_blank'}
        />
      </li>
    </ul>
  )
}

export { MainMenu }
