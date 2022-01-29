import { SocialLink } from 'components/SocialButton/types'
import { SocialIcon } from 'components/SocialIcon'
import Link from 'next/link'

const SocialButton = ({
  service,
  url,
  label,
}: Pick<SocialLink, 'url' | 'label' | 'service'>) => {
  return (
    <Link href={url} passHref={true}>
      <a
        target='_blank'
        rel="noopener"
        className='m-auto main-gradient max-w-[430px] min-w-[340px] lg:min-w-[422px] w-full h-[100px] p-[1px] rounded-xl hover:-translate-y-1 transition-all ease-in-out duration-200'
      >
        <span className='block bg-black w-full h-full rounded-xl -z-10 flex items-stretch justify-items-start'>
          <span className='block flex-0 w-3/12 flex items-center justify-center'>
            <SocialIcon service={service} />
          </span>
          <span className='block flex-auto text-left text-s lg:text-lg self-center'>
            <span className={`block ${service}`}>{service}</span>
            <span className='text-gray-500 text-xl lg:text-2xl'>{label}</span>
          </span>
        </span>
      </a>
    </Link>
  )
}

export { SocialButton }
