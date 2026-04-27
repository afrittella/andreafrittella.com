import type { GetStaticProps, NextPage } from 'next'
import { SingleLayout } from '../components_v2/SingleLayout'
import { getAirtable } from '../services/airtable'
import { CATEGORY, type SocialLinkProps } from '../types'
import { getSocialLinks } from '../config/social'
import { SocialLink } from '../components_v2/SocialLink'

type Props = {
  socialLinks: SocialLinkProps[]
}

const Home: NextPage<Props> = ({ socialLinks }) => {
  return (
    <SingleLayout activePage='home' title='Home' centered={true}>
      <div className={'flex-col flex items-center justify-center w-full gap-4'}>
        <div className={'flex items-center justify-center w-3/4'}>
          <iframe
            title={'RAW by Andrea Frittella on Spotify'}
            style={{ borderRadius: '12px' }}
            src='https://open.spotify.com/embed/album/4zrWXh7VzbgSrfjaevfXT7?utm_source=generator'
            width='100%'
            height='352'
            allowFullScreen={false}
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          />
        </div>
        <div className={'flex gap-3 w-full items-center justify-center'}>
          {getSocialLinks(CATEGORY.AF, socialLinks).map((l, index) => (
            <SocialLink
              key={`AF_${
                // biome-ignore lint/suspicious/noArrayIndexKey: ok here
                index
              }`}
              service={l.service}
              label={l.label}
              url={l.url}
            />
          ))}
        </div>
      </div>
    </SingleLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const airtable = getAirtable()
  const resultSocial = await airtable('social')
    .select({ sort: [{ field: 'order' }] })
    .all()
  const socialLinks: SocialLinkProps[] = []

  resultSocial.forEach((record) => {
    if (!record.fields.hidden) {
      socialLinks.push(record.fields as SocialLinkProps)
    }
  })

  return {
    props: { socialLinks },
  }
}

export default Home
