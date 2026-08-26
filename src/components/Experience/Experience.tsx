import { useLanguage } from '../../i18n'
import { Section } from '../Section'
import styles from './Experience.module.css'

export const Experience = () => {
  const { t } = useLanguage()

  return (
    <Section id="experience" title={t.experience.heading}>
      <ol className={styles.list}>
        {t.experience.jobs.map((job) => (
          <li key={`${job.company}-${job.dates}`}>
            <div className={styles.job__header}>
              <h3 className={styles.job__role}>{job.role}</h3>
              <p className={styles.job__dates}>{job.dates}</p>
            </div>
            <p className={styles.job__company}>{job.company}</p>
            <ul className={styles.job__bullets}>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
