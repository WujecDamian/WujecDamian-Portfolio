import { useLanguage } from '../../i18n'
import { Section } from '../Section'
import styles from './About.module.css'

export const About = () => {
  const { t } = useLanguage()

  return (
    <Section id="about" title={t.about.heading}>
      <div className={styles.about}>
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
      </div>
    </Section>
  )
}
