import { site } from '../../data/site'
import { useLanguage } from '../../i18n'
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '../BrandIcon'
import { Section } from '../Section'
import styles from './Contact.module.css'

export const Contact = () => {
  const { t } = useLanguage()

  return (
    <Section id="contact" title={t.contact.heading}>
      <p className={styles.invite}>{t.contact.invite}</p>
      <div className={styles.links}>
        <a
          className={`${styles.link} ${styles['link--email']}`}
          href={`mailto:${site.email}`}
        >
          <MailIcon className={styles.icon} />
          {t.contact.email}
        </a>
        <a
          className={`${styles.link} ${styles['link--linkedin']}`}
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className={styles.icon} />
          {t.contact.linkedin}
        </a>
        <a
          className={`${styles.link} ${styles['link--github']}`}
          href={site.github}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className={styles.icon} />
          {t.contact.github}
        </a>
        <a
          className={`${styles.link} ${styles['link--cv']}`}
          href={site.cvPath}
          download
        >
          <DownloadIcon className={styles.icon} />
          {t.contact.downloadCv}
        </a>
      </div>
    </Section>
  )
}
