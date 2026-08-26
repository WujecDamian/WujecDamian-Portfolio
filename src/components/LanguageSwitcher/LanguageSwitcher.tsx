import { useLanguage } from '../../i18n'
import styles from './LanguageSwitcher.module.css'

export const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div className={styles.switcher} role="group" aria-label={t.nav.langAria}>
      <button
        type="button"
        className={`${styles.switcher__btn} ${
          locale === 'en' ? styles['switcher__btn--active'] : ''
        }`}
        aria-pressed={locale === 'en'}
        onClick={() => setLocale('en')}
      >
        {t.nav.langEn}
      </button>
      <button
        type="button"
        className={`${styles.switcher__btn} ${
          locale === 'pl' ? styles['switcher__btn--active'] : ''
        }`}
        aria-pressed={locale === 'pl'}
        onClick={() => setLocale('pl')}
      >
        {t.nav.langPl}
      </button>
    </div>
  )
}
