import { site } from '../../data/site'
import { useLanguage } from '../../i18n'
import { DownloadIcon, GitHubIcon, LinkedInIcon } from '../BrandIcon'
import styles from './Hero.module.css'

export const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className={styles.hero} aria-labelledby="hero-name">
      <div>
        <h1 id="hero-name" className={styles.hero__name}>
          {t.hero.name}
        </h1>
        <p className={styles.hero__title}>{t.hero.title}</p>
        <p className={styles.hero__pitch}>{t.hero.pitch}</p>
        <div className={styles.hero__actions}>
          <a
            className={`${styles.hero__btn} ${styles['hero__btn--github']}`}
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className={styles.hero__icon} />
            {t.hero.github}
          </a>
          <a
            className={`${styles.hero__btn} ${styles['hero__btn--linkedin']}`}
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className={styles.hero__icon} />
            {t.hero.linkedin}
          </a>
          <a
            className={`${styles.hero__btn} ${styles['hero__btn--secondary']}`}
            href={site.cvPath}
            download
          >
            <DownloadIcon className={styles.hero__icon} />
            {t.hero.downloadCv}
          </a>
        </div>
      </div>
      <div
        className={styles.hero__portrait}
        role="img"
        aria-label={t.hero.portraitAlt}
      >
        DW
      </div>
    </section>
  )
}
