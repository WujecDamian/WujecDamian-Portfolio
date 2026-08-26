import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const HashScroll = () => {
  const { hash, pathname } = useLocation()
  const prevPathname = useRef(pathname)

  useLayoutEffect(() => {
    const pathChanged = prevPathname.current !== pathname
    prevPathname.current = pathname

    if (hash) {
      const id = hash.slice(1)
      document.getElementById(id)?.scrollIntoView({
        behavior: pathChanged ? 'instant' : 'smooth',
      })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [hash, pathname])

  return null
}
