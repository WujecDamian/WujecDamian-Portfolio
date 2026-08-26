import { site } from '../../data/site'
import { useLanguage } from '../../i18n'
import styles from './Footer.module.css'

export const Footer = () => {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <p>
          <span className={styles.footer__name}>{t.footer.rights}</span>
          {` · ${year}`}
        </p>
        <div className={styles.footer__links}>
          <a className={styles.footer__link} href={`mailto:${site.email}`}>
            {t.contact.email}
          </a>
          <a
            className={styles.footer__link}
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            {t.contact.github}
          </a>
          <a
            className={styles.footer__link}
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {t.contact.linkedin}
          </a>
        </div>
      </div>
    </footer>
  )
}
