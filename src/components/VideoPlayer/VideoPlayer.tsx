import React from 'react'
import { Dialog } from '@headlessui/react'
import { FaTimes } from 'react-icons/fa'

type Props = {
  isOpen: boolean
  onClose: () => void
  videoId: string
}

export const VideoPlayer = ({ videoId, isOpen, onClose }: Props) => {
  const [isLoaded, setLoaded] = React.useState(false)

  const handleDeactivate = () => {
    setLoaded(false)
    if (onClose) {
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onClose={handleDeactivate} className='relative z-50'>
      <div className='fixed inset-0 bg-black/50' aria-hidden='true' />

      <div className='fixed inset-0 flex items-center justify-center p-0 lg:p-4'>
        <Dialog.Panel className='w-full h-full flex flex-col items-center justify-center lg:mx-auto lg:w-6/12 lg:h-2/4 rounded bg-black relative'>
          {/*<Dialog.Title className='w-full p-1 text-center text-gray-400'>{title}</Dialog.Title>*/}
          {!isLoaded && (
            <div className='absolute flex items-center justify-items-center bg-black w-full h-full'>
              <div className='w-full text-center'>loading...</div>
            </div>
          )}
          <iframe
            className='responsive w-full h-full lg:w-full'
            src={`//www.youtube.com/embed/${videoId}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            onLoad={() => setLoaded(true)}
          ></iframe>
          <div className='absolute bg-black top-2 right-2 p-1'>
            <button onClick={handleDeactivate} className='outline-none'>
              <FaTimes className='outline-none transition-colors ease-in-out duration-300 text-gray-600 hover:text-white text-xl' />
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
