import { GetStaticProps, NextPage } from 'next'
import { SingleLayout } from '../components_v2/SingleLayout'
import { BackgroundPhoto } from '../components/BackgroundPhoto'
import React from 'react'
import { getAirtable } from '../services/airtable'
import Link from 'next/link'
import Image from 'next/legacy/image'
import ara from 'assets/images/logo_ARA.png'

type Props = {
  text: string
}

const ElectronicEmotions: NextPage<Props> = ({ text }) => {
  return (
    <SingleLayout
      activePage={'ee'}
      title={'Electronic Emotions'}
      showBackground={false}
    >
      <div
        className='flex flex-col lg:flex-row items-center
      justify-items-center px-8'
      >
        <div className='order-first flex-1'>
          <BackgroundPhoto page='ee' />
        </div>
        <div className='text-sm lg:text-xl flex-1 leading-relaxed text-left whitespace-pre-line gap-4 flex flex-col'>
          <div>{text}</div>
          <div>
            <div
              className={
                'bg-[#007ec3] max-w-fit rounded-xl pt-2 px-1 opacity-50 hover:opacity-100'
              }
            >
              <Link
                href={'https://www.radioara.org/shows/electronic-emotions'}
                target={'_blank'}
              >
                <Image
                  src={ara}
                  layout='intrinsic'
                  alt='radioara.org'
                  placeholder='blur'
                  width={100}
                  height={70}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SingleLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const airtable = getAirtable()
  const result = await airtable('profile').select({}).firstPage()
  const profile = result.find((r) => r.fields.key === 'ee')?.fields || {
    bio: '',
  }
  return {
    props: {
      text: profile?.bio || '',
    },
  }
}

export default ElectronicEmotions
