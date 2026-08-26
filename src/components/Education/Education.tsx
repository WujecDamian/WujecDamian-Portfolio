import { useLanguage } from '../../i18n'
import { Section } from '../Section'
import styles from './Education.module.css'

export const Education = () => {
  const { t } = useLanguage()

  return (
    <Section id="education" title={t.education.heading}>
      <div className={styles.education}>
        <p className={styles.education__school}>{t.education.school}</p>
        <p className={styles.education__title}>{t.education.title}</p>
        <p className={styles.education__dates}>{t.education.dates}</p>
      </div>
    </Section>
  )
}
