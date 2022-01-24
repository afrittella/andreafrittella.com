import Link from 'next/link'

const MainMenuItem = ({ label = '', url = '#', active = false }) => (
  <Link href={url}>
    <div className='flex flex-col cursor-pointer items-center'>
      <div className='w-full'>
        <a
          className={`transition-color ease-in-out duration-300 ${
            active ? 'text-white' : ''
          } hover:text-white`}
        >
          {label}
        </a>
      </div>
      <div
        className={`${
          !active ? 'invisible' : ''
        } bg-white block text-center w-[10px] h-[10px] rounded-full mx-30`}
      />
    </div>
  </Link>
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
          label={'blog'}
          url='blog'
          active={activePage === 'blog'}
        />
      </li>
      <li>
        <MainMenuItem
          label={'social'}
          url='/social'
          active={activePage === 'social'}
        />
      </li>
    </ul>
  )
}

export { MainMenu }
