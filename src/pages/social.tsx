import type { GetStaticProps, NextPage } from 'next'
import { Layout } from 'components/Layout'
import React from 'react'
import { getSocialLinks } from 'config/social'
import { CATEGORY, SocialLink } from 'components/SocialButton/types'
import { SocialButton } from 'components/SocialButton'
import { getAirtable } from 'services/airtable'

type Props = {
  socialLinks: SocialLink[]
}

const Social: NextPage<Props> = ({ socialLinks }) => {
  return (
    <Layout activePage='social' title='Social'>
      <div
        className='grid grid-flow-row lg:grid-flow-row grid-cols-1 lg:grid-cols-[repeat(2,_422px)] gap-4 items-center
      justify-items-center px-4 sm:px-8 w-fit m-auto'
      >
        {!socialLinks ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {getSocialLinks(CATEGORY.AF, socialLinks).map((link, index) => (
              <SocialButton key={`AF_${index}`} {...link} />
            ))}
            {getSocialLinks(CATEGORY.IDW, socialLinks).map((link, index) => (
              <SocialButton key={`IDW_${index}`} {...link} />
            ))}
          </>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const airtable = getAirtable()
  const result = await airtable('social').select({}).all()
  const socialLinks: SocialLink[] = []

  result.forEach((record) => {
    socialLinks.push(record.fields as SocialLink)
  })

  return {
    props: { socialLinks },
  }
}

export default Social
