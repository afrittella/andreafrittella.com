import React from 'react'

export const ClientOnly = ({ children }: React.PropsWithChildren) => {
  const [hasMounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}
