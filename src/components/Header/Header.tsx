import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../i18n'
import { CloseIcon, MenuIcon } from '../BrandIcon'
import { LanguageSwitcher } from '../LanguageSwitcher'
import styles from './Header.module.css'
import { useActiveSection } from './useActiveSection'

const sections = ['skills', 'projects', 'education', 'experience'] as const

export const Header = () => {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(pathname === '/')

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link to="/" className={styles.header__home}>
          Damian Wujec
        </Link>
        <nav
          id="primary-nav"
          className={`${styles.header__nav} ${
            menuOpen ? styles['header__nav--open'] : ''
          }`}
          aria-label="Primary"
        >
          {sections.map((id) => (
            <Link
              key={id}
              to={`/#${id}`}
              className={`${styles.header__link} ${
                active === id ? styles['header__link--active'] : ''
              }`}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {t.nav[id]}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher />
        <button
          type="button"
          className={styles.header__menuBtn}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <CloseIcon className={styles.header__menuIcon} />
          ) : (
            <MenuIcon className={styles.header__menuIcon} />
          )}
        </button>
      </div>
    </header>
  )
}
