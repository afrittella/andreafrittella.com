import React from 'react'
import { Layout } from 'components/Layout'
import { VideoThumbnail } from 'components_v2/VideoThumbnail'
import { VideoPlayer } from 'components/VideoPlayer'
import { youtube_v3 } from '@googleapis/youtube'
import useSWR from 'swr'
import { FaSpinner } from 'react-icons/fa6'
import { SingleLayout } from '../components_v2/SingleLayout'

import { isTouchDevice } from '../services/touchDetect'
import { youtubeTabs } from '../config/menu'
import { TabSelector } from '../components_v2/TabSelector/TabSelector'

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

  const isTouch = isTouchDevice()

  return (
    <SingleLayout activePage='music' title='Music'>
      <div className='flex gap-2 justify-between mb-4'>
        {youtubeTabs.map((t) => (
          <TabSelector
            key={t.tabKey}
            activeTab={tab}
            tabKey={t.tabKey}
            label={t.label}
            onSelectorClick={handleChangeTab}
          />
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-stretch justify-around'>
        {videos.slice(0, 4).map((video) => (
          <VideoThumbnail
            key={video.contentDetails?.videoId}
            title={video.snippet?.title || ''}
            image={video.snippet?.thumbnails?.standard?.url || ''}
            videoId={video.contentDetails?.videoId || ''}
            onThumbClick={handleThumbClick}
            isBig={true}
            isTouchDevice={isTouch}
          />
        ))}
      </div>
      <div className='pt-4 gap-1 grid grid-cols-2 lg:grid-cols-4 items-stretch justify-around'>
        {videos.slice(4).map((video) => (
          <VideoThumbnail
            key={video.contentDetails?.videoId}
            title={video.snippet?.title || ''}
            image={video.snippet?.thumbnails?.standard?.url || ''}
            videoId={video.contentDetails?.videoId || ''}
            onThumbClick={handleThumbClick}
            isTouchDevice={isTouch}
          />
        ))}
      </div>
      <VideoPlayer
        videoId={videoId}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </SingleLayout>
  )
}

export default Music
