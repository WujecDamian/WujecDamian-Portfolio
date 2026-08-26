import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n'
import { LanguageSwitcher } from '../LanguageSwitcher'
import styles from './Header.module.css'

export const Header = () => {
  const { t } = useLanguage()

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link to="/" className={styles.header__home}>
          Damian Wujec
        </Link>
        <nav className={styles.header__nav} aria-label="Primary">
          <Link to="/#skills" className={styles.header__link}>
            {t.nav.skills}
          </Link>
          <Link to="/#projects" className={styles.header__link}>
            {t.nav.projects}
          </Link>
          <Link to="/#education" className={styles.header__link}>
            {t.nav.education}
          </Link>
          <Link to="/#experience" className={styles.header__link}>
            {t.nav.experience}
          </Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
