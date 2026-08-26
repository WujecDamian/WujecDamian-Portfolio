import { useLanguage } from '../../i18n'
import { Section } from '../Section'
import styles from './Education.module.css'

export const Education = () => {
  const { t } = useLanguage()

  return (
    <Section id="education" title={t.education.heading}>
      <ol className={styles.list}>
        {t.education.items.map((item) => (
          <li key={`${item.school}-${item.dates}`} className={styles.education}>
            <p className={styles.education__school}>{item.school}</p>
            <p className={styles.education__title}>{item.title}</p>
            <p className={styles.education__dates}>{item.dates}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
