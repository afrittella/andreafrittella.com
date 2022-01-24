import type { NextPage } from 'next'
import { BackgroundPhoto } from 'components/BackgroundPhoto'
import { Layout } from 'components/Layout'
import React from 'react'

const About: NextPage = () => {
  return (
    <Layout activePage='about' title='About'>
      <div
        className='flex flex-col lg:flex-row items-center
      justify-items-center px-8'
      >
        <div className='order-last lg:order-first flex-1'>
          <BackgroundPhoto page='about' />
        </div>
        <div className='text-sm lg:text-xl flex-1 leading-relaxed text-left'>
          <p>
            {`Andrea Frittella is a DJ and producer since the late '90s, currently
            based in Luxembourg. Eclectic and a lover of all music, Andrea is
            also known for the "Irregular Disco Workers" project and the indie
            labels "Klop music" and "Disco Volante". His music touches various
            sonic nuances, with a predilection for disco and house sounds.`}
          </p>

          <p className='pt-4'>
            {`There are numerous labels and artists with whom he has collaborated
            all over the world. His tracks and remixes have been released on:
            Feedelity, Nang, Rare Wiri, Bordello a Parigi, and many others.`}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
