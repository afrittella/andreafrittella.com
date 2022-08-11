import { LazyLoading } from 'components/LazyLoading'
import { ClientOnly } from 'components/ClientOnly'
import { IoLogoYoutube } from 'react-icons/io'

type Props = {
  title: string
  image: string
  videoId: string
  onThumbClick: (videoId: string) => void
}

const VideoThumbnail = ({ title, image, videoId, onThumbClick }: Props) => {
  const handleThumbClick = () => {
    onThumbClick(videoId)
  }

  return (
    <ClientOnly>
      <LazyLoading className='h-[250px]'>
        <div
          className='cursor-pointer p-[1px] md:main-gradient rounded-xl hover:-translate-y-1 transition-all ease-in-out duration-200 h-[250px]'
          onClick={handleThumbClick}
        >
          <div
            className={`group relative bg-black block w-full h-full rounded-xl flex flex-col items-center justify-items-center`}
          >
            <div
              className='absolute w-full h-full transition-all ease-in-out duration-300 rounded-xl w-full h-full bg-clip-border bg-origin-border bg-center opacity-20 group-hover:opacity-100 bg-no-repeat'
              style={{ backgroundImage: `url(${image})` }}
            >
              <></>
            </div>
            <div className='flex-auto flex items-center justify-items-center'>
              <div className='p-2 text-center z-10 relative'>
                <IoLogoYoutube className='text-gray-600 group-hover:text-youtube text-5xl z-10' />
              </div>
            </div>

            <div
              className='absolute bottom-0 flex-grow-0 w-full break-words
          bg-black/30 p-2 text-center z-10 group-hover:bg-black/70 transition-opacity ease-in-out duration-300'
            >
              {title}
            </div>
          </div>
        </div>
      </LazyLoading>
    </ClientOnly>
  )
}

export { VideoThumbnail }
