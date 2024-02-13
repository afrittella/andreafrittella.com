import Head from 'next/head'
import { Logo } from 'components/Logo'
import { MainMenu } from 'components/MainMenu'
import React from 'react'

type Props = {
  title?: string
  activePage?: string
  children: React.ReactNode
}

const Layout = ({ activePage = 'home', title = '', children }: Props) => {
  return (
    <div className='w-full h-full'>
      <Head>
        <title>{`${title ? title + ' | ' : ''} Andrea Frittella`}</title>
        <meta name='description' content='AndreaFrittella.com' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta
          name='url'
          property='og:url'
          content='https://www.andreafrittella.com'
        />
        <meta name='type' property='og:type' content='website' />
        <meta name='title' property='og:title' content='AndreaFrittella.com' />
        <meta
          name='image'
          property='og:image'
          content='https://www.andreafrittella.com/social.png'
        />

        <link rel='icon' type='image/x-icon' href='/icons/favicon.ico' />
        <link rel='icon' href='/icons/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
      </Head>

      <main className='typo-default w-full h-full flex flex-col justify-center items-center '>
        <div>
          <Logo />
          <div className='w-full pt-2'>
            <MainMenu activePage={activePage} />
          </div>
        </div>
        <div className='pt-8 mt-2 w-full sm:px-0 sm:w-10/12'>{children}</div>
      </main>
    </div>
  )
}

export { Layout }
