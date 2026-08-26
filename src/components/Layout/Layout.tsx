import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { HashScroll } from '../HashScroll'
import { Header } from '../Header'
import styles from './Layout.module.css'

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <HashScroll />
      <Header />
      <main className={styles.layout__main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
