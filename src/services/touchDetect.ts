export const isTouchDevice = () => {
  if (typeof window === 'undefined') {
    return false
  }
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')

  function mq(query: string) {
    return typeof window !== 'undefined' && window.matchMedia(query).matches
  }

  if (
    'ontouchstart' in window ||
    (window?.Touch && document instanceof Touch)
  ) {
    return true
  }
  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('') // include the 'heartz' - https://git.io/vznFH

  return mq(query)
}
