import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { Layout } from 'components/Layout'
import { VideoThumbnail } from 'components/VideoThumbnail'
import { youtube, youtube_v3 } from '@googleapis/youtube'
import { VideoPlayer } from 'components/VideoPlayer'

type Props = {
  videos: (youtube_v3.Schema$PlaylistItem & { player: string })[]
}

const Music: NextPage<Props> = ({ videos }) => {
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [videoId, setVideoId] = React.useState('')

  if (!videos) {
    return <></>
  }

  const handleThumbClick = (videoId: string) => {
    setVideoId(videoId)
    setModalOpen(true)
  }

  return (
    <Layout activePage='music' title='Music'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-around gap-6'>
        {videos.map((video) => (
          <VideoThumbnail
            key={video.contentDetails?.videoId}
            title={video.snippet?.title || ''}
            image={video.snippet?.thumbnails?.standard?.url || ''}
            videoId={video.contentDetails?.videoId || ''}
            onThumbClick={handleThumbClick}
          />
        ))}
      </div>
      <VideoPlayer
        videoId={videoId}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
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

  return {
    props: { videos: playlistContent.data.items },
    revalidate: 600,
  }
}

export default Music
