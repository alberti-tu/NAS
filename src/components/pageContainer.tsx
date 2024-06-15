'use client'

import * as React from 'react'

type IProps = {
  header?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode
}

const PageContainer = ({ header, children, footer }: IProps): JSX.Element => {
  const headerRef = React.useRef(null)
  const footerRef = React.useRef(null)

  const [headerHeight, setHeaderHeight] = React.useState<number>(0)
  const [headerWidth, setHeaderWidth] = React.useState<number>(0)

  const [footerHeight, setFooterHeight] = React.useState<number>(0)
  const [footerWidth, setFooterWidth] = React.useState<number>(0)

  React.useEffect(() => {
    if (!headerRef.current) {
      return
    }

    const resizeObserver = new ResizeObserver(() => {
      headerRef.current.offsetHeight !== headerHeight && setHeaderHeight(headerRef.current.offsetHeight)
      headerRef.current.offsetWidth !== headerWidth && setHeaderWidth(headerRef.current.offsetWidth)
    })

    resizeObserver.observe(headerRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [headerHeight, headerWidth])

  React.useEffect(() => {
    if (!footerRef.current) {
      return
    }

    const resizeObserver = new ResizeObserver(() => {
      footerRef.current.offsetHeight !== footerHeight && setFooterHeight(footerRef.current.offsetHeight)
      footerRef.current.offsetWidth !== footerWidth && setFooterWidth(footerRef.current.offsetWidth)
    })

    resizeObserver.observe(footerRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [footerHeight, footerWidth])

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div ref={headerRef}>
        {header}
      </div>
      <div style={{ height: `calc(100% - ${headerHeight}px - ${footerHeight}px)` }}>
        {children}
      </div>
      <div ref={footerRef}>
        {footer}
      </div>
    </div>
  )
}

export default PageContainer
