import React from 'react'
import { TabSelectorProps } from '../../types'

const TabSelector = ({
  activeTab,
  tabKey,
  label,
  onSelectorClick = () => null,
}: TabSelectorProps) => {
  return (
    <div
      className={`flex items-center justify-center main-gradient cursor-pointer text-center p-[1px] rounded-xl m-auto main-gradient w-full h-[50px] hover:opacity-90 ${activeTab === tabKey ? 'opacity-100' : 'opacity-40'} transition-opacity ease-in-out duration-200`}
      onClick={() => activeTab !== tabKey && onSelectorClick(tabKey)}
    >
      <span
        className={
          'flex items-center justify-center bg-black w-full h-full rounded-xl '
        }
      >
        {label}
      </span>
    </div>
  )
}

export { TabSelector }
