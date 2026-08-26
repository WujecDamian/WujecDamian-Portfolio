import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const HashScroll = () => {
  const { hash, pathname } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      document.getElementById(id)?.scrollIntoView()
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [hash, pathname])

  return null
}
