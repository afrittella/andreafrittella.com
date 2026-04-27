import type { SocialLink } from 'components/SocialButton/types'
import { SocialIcon } from 'components/SocialIcon'
import Link from 'next/link'

const SocialButton = ({ service, url, label }: Pick<SocialLink, 'url' | 'label' | 'service'>) => {
  return (
    <Link
      href={url}
      passHref={true}
      target='_blank'
      rel='noopener'
      className='m-auto main-gradient max-w-107.5 min-w-85 lg:min-w-105.5 w-full h-25 p-px rounded-xl hover:-translate-y-1 transition-all ease-in-out duration-200'
    >
      <span className='bg-black w-full h-full rounded-xl -z-10 flex items-stretch justify-items-start'>
        <span className='flex-0 w-3/12 flex items-center justify-center'>
          <SocialIcon service={service} />
        </span>
        <span className='block flex-auto text-left text-s lg:text-lg self-center'>
          <span className={`block ${service}`}>{service}</span>
          <span className='text-gray-500 text-xl lg:text-2xl'>{label}</span>
        </span>
      </span>
    </Link>
  )
}

export { SocialButton }
