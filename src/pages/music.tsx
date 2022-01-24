import type { NextPage } from 'next'
import { BackgroundPhoto } from 'components/BackgroundPhoto'
import { Layout } from 'components/Layout'
import React from 'react'
import { ProgressBar } from 'components/ProgressBar'

const Music: NextPage = () => {
  return (
    <Layout activePage='music' title='Music'>
      <div className='m-auto w-10/12 lg:max-w-lg'>
        <ProgressBar percentage={100} />
      </div>
      <div className='pt-2 max-w-max m-auto'>
        in progress... stay tuned...
      </div>
    </Layout>
  )
}

export default Music
