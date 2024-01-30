import type { MenuItem, Menu } from '../types'
import Link from 'next/link'
import { menuItems } from '../config/menu'

const MainMenuItem = ({
  label = '',
  url = '#',
  active = false,
  target,
}: Pick<MenuItem, 'label' | 'url' | 'active' | 'target'>) => (
  <div className='flex flex-col items-center'>
    <div className='w-full text-center'>
      <Link
        href={url}
        passHref={true}
        className={`transition-color ease-in-out duration-300 ${
          active ? 'text-white' : ''
        } hover:text-white`}
        target={target ? target : ''}
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

const MainMenu = ({ activePage = 'home' }: Menu) => {
  return (
    <ul className='text-gray-500 list-none max-w-full gap-4 flex items-center justify-between text-lg lg:text-xl z-50'>
      {menuItems.map((i) => (
        <li key={`main_${i.key}`}>
          <MainMenuItem
            label={i.label}
            url={i.url}
            active={i.key === activePage}
            target={i.target}
          />
        </li>
      ))}
    </ul>
  )
}

export { MainMenu }
