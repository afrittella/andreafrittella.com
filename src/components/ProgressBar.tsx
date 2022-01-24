import React from 'react'

type Props = {
  percentage: number
}

const ProgressBar = ({ percentage }: Props) => {
  const getPercentageClass = React.useCallback(() => {
    if (percentage < 50) {
      return 'w-4/12'
    }

    if (percentage < 75) {
      return 'w-9/12'
    }

    return 'w-full'
  }, [percentage])
  return (
    <div className='w-full h-10 border border-gray-500 relative'>
      <div className={`main-gradient ${getPercentageClass()} h-full`}></div>
      <div className='animate-progress bg-black absolute top-0 right-0 bottom-0 w-full h-full z-10'></div>
    </div>
  )
}

export { ProgressBar }
