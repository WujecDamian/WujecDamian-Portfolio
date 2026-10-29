import { useEffect, useState } from 'react'

// Tracks which <section id> sits in the upper band of the viewport.
export const useActiveSection = (enabled: boolean) => {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) return

    const visible = new Set<string>()
    const sections = document.querySelectorAll<HTMLElement>('main section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        const current = [...sections].find((section) => visible.has(section.id))
        setActive(current?.id ?? null)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [enabled])

  return enabled ? active : null
}
