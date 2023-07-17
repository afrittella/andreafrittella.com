import React from 'react'
import { Layout } from 'components/Layout'
import { VideoThumbnail } from 'components/VideoThumbnail'
import { VideoPlayer } from 'components/VideoPlayer'
import { youtube_v3 } from '@googleapis/youtube'
import useSWR from 'swr'
import { FaSpinner } from 'react-icons/fa6'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Music = () => {
  const { data, error } = useSWR('/api/getVideos', fetcher)

  const [videos, setVideos] = React.useState<youtube_v3.Schema$PlaylistItem[]>()
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [videoId, setVideoId] = React.useState('')

  React.useEffect(() => {
    if (data && !error) {
      setVideos(data)
    }
  }, [data, error])

  if (!videos) {
    return <Layout activePage='music' title='Music'>
      <FaSpinner className={"spin"} />
    </Layout>
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

export default Music
