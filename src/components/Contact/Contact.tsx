import { site } from '../../data/site'
import { useLanguage } from '../../i18n'
import { Section } from '../Section'
import styles from './Contact.module.css'

export const Contact = () => {
  const { t } = useLanguage()

  return (
    <Section id="contact" title={t.contact.heading}>
      <p className={styles.invite}>{t.contact.invite}</p>
      <div className={styles.links}>
        <a className={styles.link} href={`mailto:${site.email}`}>
          {t.contact.email}
        </a>
        <a
          className={styles.link}
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          {t.contact.linkedin}
        </a>
        <a
          className={styles.link}
          href={site.github}
          target="_blank"
          rel="noreferrer"
        >
          {t.contact.github}
        </a>
        <a className={styles.link} href={site.cvPath} download>
          {t.contact.downloadCv}
        </a>
      </div>
    </Section>
  )
}
