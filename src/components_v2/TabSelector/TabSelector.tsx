import type { TabSelectorProps } from '../../types'

const TabSelector = ({ activeTab, tabKey, label, onSelectorClick = () => null }: TabSelectorProps) => {
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Ok here
    // biome-ignore lint/a11y/useKeyWithClickEvents: ok here
    <div
      className={`flex items-center justify-center cursor-pointer text-center p-px rounded-xl m-auto main-gradient w-full h-12.5 hover:opacity-90 ${activeTab === tabKey ? 'opacity-100' : 'opacity-40'} transition-opacity ease-in-out duration-200`}
      onClick={() => activeTab !== tabKey && onSelectorClick(tabKey)}
    >
      <span className={'flex items-center justify-center bg-black w-full h-full rounded-xl '}>{label}</span>
    </div>
  )
}

export { TabSelector }
