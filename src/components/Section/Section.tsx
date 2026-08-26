import type { ReactNode } from 'react'
import styles from './Section.module.css'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className={styles.section__title}>
        {title}
      </h2>
      {children}
    </section>
  )
}
