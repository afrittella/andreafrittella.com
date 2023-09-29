import React from 'react'
import { Layout } from 'components/Layout'
import { VideoThumbnail } from 'components/VideoThumbnail'
import { VideoPlayer } from 'components/VideoPlayer'
import { youtube_v3 } from '@googleapis/youtube'
import useSWR from 'swr'
import { FaSpinner } from 'react-icons/fa6'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Music = () => {
  const [videos, setVideos] = React.useState<youtube_v3.Schema$PlaylistItem[]>()
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [videoId, setVideoId] = React.useState('')
  const [tab, setTab] = React.useState('releases')

  const { data, error } = useSWR(
    `/api/getVideos?tab=${tab ?? 'releases'}`,
    fetcher,
  )

  React.useEffect(() => {
    if (data && !error) {
      setVideos(data)
    }
  }, [data, error])

  if (!videos) {
    return (
      <Layout activePage='music' title='Music'>
        <FaSpinner className={'animate-spin text-stone-400'} size={'24'} />
      </Layout>
    )
  }

  const handleThumbClick = (videoId: string) => {
    setVideoId(videoId)
    setModalOpen(true)
  }

  const handleChangeTab = (tab: string) => {
    setVideos([])
    setTab(tab)
  }

  return (
    <Layout activePage='music' title='Music'>
      <div className='flex gap-4 w-full justify-between mb-4'>
        <div
          className={`cursor-pointer text-center w-full border rounded-2xl p-2 ${
            tab === 'releases'
              ? 'border-white text-white'
              : 'border-stone-400 text-stone-400'
          }`}
          onClick={() => tab !== 'releases' && handleChangeTab('releases')}
        >
          Releases
        </div>
        <div
          className={`cursor-pointer text-center w-full border rounded-2xl p-2 ${
            tab === 'remixes'
              ? 'border-white text-white'
              : 'border-stone-400 text-stone-400'
          }`}
          onClick={() => tab !== 'remixes' && handleChangeTab('remixes')}
        >
          Remixes
        </div>
        <div
          className={`cursor-pointer text-center w-full border rounded-2xl p-2 ${
            tab === 'edits'
              ? 'border-white text-white'
              : 'border-stone-400 text-stone-400'
          }`}
          onClick={() => tab !== 'edits' && handleChangeTab('edits')}
        >
          Edits & Reworks
        </div>
        <div
          className={`cursor-pointer text-center w-full border rounded-2xl p-2 ${
            tab === 'mixtapes'
              ? 'border-white text-white'
              : 'border-stone-400 text-stone-400'
          }`}
          onClick={() => tab !== 'mixtapes' && handleChangeTab('mixtapes')}
        >
          Mixtapes
        </div>
      </div>
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
