import styles from './nav.module.scss'
import Link from 'next/link'

const Nav = (props) => {
  return (
    <div className={styles.navBar}>
      <Link href="/">
        <div className={styles.rWrapper}>
          <span>R</span>
        </div>
      </Link>

      <div className={styles.navLinkWrapper}>
        <div className={styles.linkWrapper}>
          <a href="/">Work</a>
        </div>

        <div className={styles.linkWrapper}>
          <a href="/">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Nav
