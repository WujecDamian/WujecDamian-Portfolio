import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const HashScroll = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      document.getElementById(id)?.scrollIntoView()
      return
    }

    window.scrollTo(0, 0)
  }, [hash, pathname])

  return null
}
