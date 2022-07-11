import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { Layout } from 'components/Layout'
import { VideoThumbnail } from 'components/VideoThumbnail'
import { youtube, youtube_v3 } from '@googleapis/youtube'
import { getPlaiceholder } from 'plaiceholder'

type Props = {
  videos: (youtube_v3.Schema$PlaylistItem & { blurImage?: string })[]
}

const Music: NextPage<Props> = ({ videos }) => {
  console.log(videos.map((video) => video.snippet))
  if (!videos) {
    return <></>
  }

  return (
    <Layout activePage='music' title='Music'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch justify-around gap-4'>
        {videos.map((video) => (
          <VideoThumbnail
            key={video.contentDetails?.videoId}
            title={video.snippet?.title || ''}
            image={video.snippet?.thumbnails?.standard?.url || ''}
            blurImage={video.blurImage || ''}
          />
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  console.log(process.env.YOUTUBE_KEY)
  const yt = youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_KEY as string,
  })

  const playlistContent = await yt.playlistItems.list({
    part: ['snippet', 'contentDetails'],
    playlistId: 'PLKqfdNXrLRbYWMkG_idJRNBMDkmB3nDQN',
    maxResults: 50,
  })

  if (!playlistContent.data.items) {
    return {
      props: {
        videos: [],
      },
    }
  }

  const result = []

  for (const item of playlistContent.data.items) {
    result.push({
      ...item,
      blurImage: (await getPlaiceholder(
        item.snippet?.thumbnails?.standard?.url as string
      )).base64,
    })
  }

  return {
    props: { videos: result },
  }
}

export default Music
