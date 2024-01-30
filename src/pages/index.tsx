import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { SingleLayout } from '../components_v2/SingleLayout'
import { getAirtable } from '../services/airtable'
import { CATEGORY, SocialLinkProps } from '../types'
import { getSocialLinks } from '../config/social'
import { SocialLink } from '../components_v2/SocialLink'

type Props = {
  socialLinks: SocialLinkProps[]
}

const Home: NextPage<Props> = ({ socialLinks }) => {
  return (
    <SingleLayout activePage='home' title='Home' centered={true}>
      <div className={'flex gap-3'}>
        {getSocialLinks(CATEGORY.AF, socialLinks).map((l, index) => (
          <SocialLink
            key={`AF_${index}`}
            service={l.service}
            label={l.label}
            url={l.url}
          />
        ))}
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
