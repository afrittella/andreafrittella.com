import React from 'react'

type Props = {
  threshold?: number
  rootMargin?: string
  onVisible?: () => void
} & React.HTMLAttributes<HTMLDivElement>

export const LazyLoading = ({
  children,
  threshold = 1,
  rootMargin = '0px',
  onVisible,
  ...rest
}: React.PropsWithChildren<Props>) => {
  const ref = React.useMemo(() => React.createRef<HTMLDivElement>(), [])

  const [isVisible, setVisible] = React.useState(false)

  React.useLayoutEffect(() => {
    if (!ref.current) {
      return
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()

            if (onVisible) {
              onVisible()
            }
          }
        },
        {
          threshold,
          rootMargin,
          root: null,
        },
      )
    })

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, onVisible, ref])

  return (
    <div ref={ref} {...rest}>
      {isVisible ? <>{children}</> : null}
    </div>
  )
}
