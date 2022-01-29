import type { NextPage } from 'next'
import { BackgroundPhoto } from 'components/BackgroundPhoto'
import { Layout } from 'components/Layout'
import React from 'react'
import { GetStaticProps } from 'next'
import { getAirtable } from 'services/airtable'
import { SocialLink } from 'components/SocialButton/types'

type Props = {
  bio: string
}


const About: NextPage<Props> = ({ bio}) => {
  return (
    <Layout activePage='about' title='About'>
      <div
        className='flex flex-col lg:flex-row items-center
      justify-items-center px-8'
      >
        <div className='order-last lg:order-first flex-1'>
          <BackgroundPhoto page='about' />
        </div>
        <div className='text-sm lg:text-xl flex-1 leading-relaxed text-left whitespace-pre-line'>
          {bio}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const airtable = getAirtable()
  const result = await airtable('profile').select({}).firstPage()
  const profile = result[0].fields

  console.log(profile.bio)

  return {
    props: { bio: profile?.bio },
  }
}

export default About
