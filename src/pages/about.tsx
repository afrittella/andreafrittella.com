import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { BackgroundPhoto } from 'components/BackgroundPhoto'
import React from 'react'
import { getAirtable } from 'services/airtable'
import { SingleLayout } from '../components_v2/SingleLayout'
import { getSocialLinks } from '../config/social'
import { CATEGORY, SocialLinkProps } from '../types'
import { SocialLink } from '../components_v2/SocialLink'

type Props = {
  bio: string
  socialLinks: SocialLinkProps[]
}

const About: NextPage<Props> = ({ bio, socialLinks }) => {
  return (
    <SingleLayout activePage='about' title='About' showBackground={false}>
      <div
        className='flex flex-col lg:flex-row items-center
      justify-items-center px-8'
      >
        <div className='order-last lg:order-first flex-1'>
          <BackgroundPhoto page='about' />
        </div>
        <div className='text-sm lg:text-xl flex-1 leading-relaxed text-left whitespace-pre-line gap-4 flex flex-col'>
          <div>{bio}</div>
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
        </div>
      </div>
    </SingleLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const airtable = getAirtable()
  const result = await airtable('profile').select({}).firstPage()
  const resultSocial = await airtable('social')
    .select({ sort: [{ field: 'order' }] })
    .all()
  const profile = result.find((r) => r.fields.key === 'andreafrittella')
    ?.fields || { bio: '' }
  const socialLinks: SocialLinkProps[] = []

  resultSocial.forEach((record) => {
    if (!record.fields.hidden) {
      socialLinks.push(record.fields as SocialLinkProps)
    }
  })

  return {
    props: { bio: profile?.bio, socialLinks },
  }
}

export default About
