import type { NextPage } from 'next'
import Head from 'next/head'
import { BackgroundPhoto } from 'components/BackgroundPhoto'
import { Logo } from 'components/Logo';

const Home: NextPage = () => {
  return (
    <div className='w-full h-full'>
      <Head>
        <title>Andrea Frittella</title>
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

      <main className='typo-default w-full h-full flex flex-col justify-center items-center'>
        <div>
          <Logo />
        </div>
        <div className='text-gray-500 text-s sm:text-xl mt-3'>
          coming soon...
        </div>
        <div className='max-w-max'>
          <BackgroundPhoto />
        </div>
      </main>
    </div>
  )
}

export default Home
