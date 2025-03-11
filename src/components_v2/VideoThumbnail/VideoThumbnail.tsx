import type { VideoThumbnailProps } from '../../types'
import { LazyLoading } from 'components/LazyLoading'
import { ClientOnly } from 'components/ClientOnly'
import { IoLogoYoutube } from 'react-icons/io'

const VideoThumbnail = ({
  title,
  image,
  videoId,
  onThumbClick,
  isBig = false,
  isTouchDevice = false,
}: VideoThumbnailProps) => {
  const handleThumbClick = () => {
    onThumbClick(videoId)
  }

  return (
    <ClientOnly>
      <LazyLoading className={`${isBig ? 'h-[400px]' : 'h-[250px]'}`}>
        <div
          className={`group cursor-pointer group relative bg-black block w-full h-full flex flex-col items-center justify-items-center`}
          onClick={handleThumbClick}
        >
          <div
            className='absolute w-full h-full transition-all ease-in-out duration-300 w-full h-full bg-clip-border bg-origin-border bg-center opacity-100 group-hover:opacity-30 bg-no-repeat'
            style={{ backgroundImage: `url(${image})` }}
          >
            <></>
          </div>
          {/*<div className='flex-auto flex items-center justify-items-center'>*/}
          {/*  <div className='p-2 text-center z-10 relative'>*/}
          {/*    <IoLogoYoutube className='text-gray-600 group-hover:text-youtube text-5xl z-10' />*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div
            className='absolute top-0 grow-0 w-full break-words
          lg:bg-black/30 bg-black/70 p-2 text-left z-10 group-hover:bg-black/70 transition-opacity ease-in-out duration-300 flex gap-2 items-center'
          >
            <IoLogoYoutube
              className={`group-hover:text-youtube text-2xl z-10 ${isTouchDevice ? 'text-youtube' : 'xl:text-gray-600'} w-1/12`}
            />
            <div className={'w-11/12'}>{title}</div>
          </div>
        </div>
      </LazyLoading>
    </ClientOnly>
  )
}

export { VideoThumbnail }
