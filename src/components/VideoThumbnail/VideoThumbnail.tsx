import Image from 'next/image'

type Props = {
  title: string
  image: string
  blurImage: string
}

const VideoThumbnail = ({ title, image, blurImage }: Props) => {
  return (
    <div className='md:main-gradient p-[1px] rounded-xl hover:-translate-y-1 transition-all ease-in-out duration-200 h-[220px]'>
      <div className='block bg-black w-full h-full rounded-xl -z-10 flex flex-col items-stretch justify-items-start p-1'>
        <div className='p-0 text-center w-full h-full relative'>
          <div className='relative w-full h-full'>
            <Image src={image} alt={title} layout='fill' placeholder='blur' blurDataURL={blurImage}/>
          </div>
          <div
            className='w-full break-words z-10 absolute
          bottom-0 bg-opacity-60 bg-black pt-2 text-center'
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}

export { VideoThumbnail }
