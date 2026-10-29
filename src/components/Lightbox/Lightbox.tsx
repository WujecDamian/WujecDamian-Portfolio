import { useEffect, useRef, type KeyboardEvent, type MouseEvent } from 'react'
import { useLanguage } from '../../i18n'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '../BrandIcon'
import styles from './Lightbox.module.css'

type Shot = {
  src: string
  alt: string
  caption: string
}

type LightboxProps = {
  shots: readonly Shot[]
  index: number | null
  onIndexChange: (index: number | null) => void
}

export const Lightbox = ({ shots, index, onIndexChange }: LightboxProps) => {
  const { t } = useLanguage()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const shot = index === null ? null : shots[index]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (index !== null && !dialog.open) dialog.showModal()
    if (index === null && dialog.open) dialog.close()
  }, [index])

  const step = (delta: number) => {
    if (index === null) return
    onIndexChange((index + delta + shots.length) % shots.length)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'ArrowLeft') step(-1)
    if (event.key === 'ArrowRight') step(1)
  }

  // Clicks on the dimmed area land on the <dialog> itself, not its content.
  const onClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onIndexChange(null)
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.lightbox}
      onClose={() => onIndexChange(null)}
      onKeyDown={onKeyDown}
      onClick={onClick}
    >
      {shot && index !== null ? (
        <figure className={styles.lightbox__figure}>
          <img src={shot.src} alt={shot.alt} width={1200} height={750} />
          <figcaption>
            {shot.caption}
            <span className={styles.lightbox__count}>
              {index + 1} / {shots.length}
            </span>
          </figcaption>
        </figure>
      ) : null}
      <button
        type="button"
        className={`${styles.lightbox__btn} ${styles['lightbox__btn--close']}`}
        aria-label={t.caseStudy.closeLightbox}
        onClick={() => onIndexChange(null)}
      >
        <CloseIcon className={styles.lightbox__icon} />
      </button>
      {shots.length > 1 ? (
        <>
          <button
            type="button"
            className={`${styles.lightbox__btn} ${styles['lightbox__btn--prev']}`}
            aria-label={t.caseStudy.prevShot}
            onClick={() => step(-1)}
          >
            <ChevronLeftIcon className={styles.lightbox__icon} />
          </button>
          <button
            type="button"
            className={`${styles.lightbox__btn} ${styles['lightbox__btn--next']}`}
            aria-label={t.caseStudy.nextShot}
            onClick={() => step(1)}
          >
            <ChevronRightIcon className={styles.lightbox__icon} />
          </button>
        </>
      ) : null}
    </dialog>
  )
}
