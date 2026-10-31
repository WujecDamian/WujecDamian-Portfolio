import { useState } from 'react'
import { useLanguage } from '../../i18n'
import styles from './YouTubeEmbed.module.css'

type YouTubeEmbedProps = {
  id: string
  title: string
}

// Loads the player only on click, so no third-party cookies or scripts are
// requested until the visitor asks for the video.
export const YouTubeEmbed = ({ id, title }: YouTubeEmbedProps) => {
  const { t } = useLanguage()
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <iframe
        className={styles.embed}
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        title={title}
        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      className={styles.facade}
      onClick={() => setActive(true)}
      aria-label={`${t.caseStudy.playVideo}: ${title}`}
    >
      <img
        className={styles.facade__poster}
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <span className={styles.facade__play} aria-hidden="true" />
    </button>
  )
}
