import Link from 'next/link'
import { SocialIcon } from '../SocialIcon'
import { SocialLinkProps } from '../../types'

export const SocialLink = ({
  service,
  url,
  label,
}: Pick<SocialLinkProps, 'url' | 'label' | 'service'>) => (
  <Link
    href={url}
    passHref={true}
    target={'_blank'}
    rel={'noopener'}
    title={`${service}: ${label}`}
  >
    <SocialIcon service={service} />
  </Link>
)
