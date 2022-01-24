import type { NextPage } from 'next'
import { BackgroundPhoto } from 'components/BackgroundPhoto'
import { Layout } from 'components/Layout'
import React from 'react'

const Home: NextPage = () => {
  return (
    <Layout activePage='home' title='Home'>
      <div className='max-w-max m-auto'>
        <BackgroundPhoto />
      </div>
    </Layout>
  )
}

export default Home
