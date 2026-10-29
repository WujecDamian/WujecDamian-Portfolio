import type { ReactNode } from 'react'
import styles from './Section.module.css'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export const Section = ({ id, eyebrow, title, children }: SectionProps) => {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <p className={styles.section__eyebrow} data-reveal>{eyebrow}</p>
      <h2 id={`${id}-title`} className={styles.section__title} data-reveal>
        {title}
      </h2>
      {children}
    </section>
  )
}
