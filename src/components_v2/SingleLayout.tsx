import type { LayoutProps } from '../types'
import React from 'react'
import Head from 'next/head'
import { Logo } from './Logo'
import { MainMenu } from './MainMenu'
import { BackgroundPhoto } from '../components/BackgroundPhoto'

const SingleLayout = ({
  activePage = 'home',
  title = '',
  children,
  showBackground = true,
  centered = false,
}: LayoutProps) => {
  return (
    <div className={'flex flex-col justify-center items-center'}>
      <Head>
        <title>{`${title ? title + ' | ' : ''} Andrea Frittella`}</title>
        <meta name='description' content='AndreaFrittella.com' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <link rel='icon' type='image/x-icon' href='/icons/favicon.ico' />
        <link rel='icon' href='/icons/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
      </Head>

      <main
        className={`typo-default ${centered ? 'w-screen h-screen' : 'w-full h-full pt-4'} flex flex-col justify-center items-center md:px-2 xl:px-4 px-0 `}
      >
        {showBackground ? (
          <div className={'fixed z-0 opacity-25 top-4'}>
            <div className='max-w-max m-auto'>
              <BackgroundPhoto />
            </div>
          </div>
        ) : undefined}
        <div className={'z-50 pb-6'}>
          <Logo />
        </div>
        <div className={'z-50'}>
          <MainMenu activePage={activePage} />
        </div>
        <div className={`z-50 pt-6 w-full ${centered ? 'flex items-center justify-center' : ''} xl:w-2/3`}>{children}</div>
      </main>
    </div>
  )
}

export { SingleLayout }
