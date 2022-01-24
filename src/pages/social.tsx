import type { NextPage } from 'next'
import { Layout } from 'components/Layout'
import React from 'react'
import { getSocialLinks } from 'config/social'
import { CATEGORY } from 'components/SocialButton/types'
import { SocialButton } from 'components/SocialButton'

const Social: NextPage = () => {
  return (
    <Layout activePage='social' title='Social'>
      <div
        className='grid grid-flow-row lg:grid-flow-row grid-cols-1 lg:grid-cols-[repeat(2,_422px)] gap-4 items-center
      justify-items-center px-4 sm:px-8 w-fit m-auto'
      >
        {getSocialLinks(CATEGORY.AF).map((link, index) => (
          <SocialButton key={`AF_${index}`} {...link} />
        ))}
        {getSocialLinks(CATEGORY.IDW).map((link, index) => (
          <SocialButton key={`IDW_${index}`} {...link} />
        ))}
      </div>
    </Layout>
  )
}

export default Social
