import { FC } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.icon}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 10V13"
              stroke="#ffffff"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <path
              d="M16 10V13"
              stroke="#ffffff"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <path
              d="M7 7L7 16"
              stroke="#ffffff"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <path
              d="M13 7L13 16"
              stroke="#ffffff"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <path
              d="M19 7L19 16"
              stroke="#ffffff"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <path
              d="M10 4L10 19"
              stroke="#ffffff"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <Link href="./" className={styles.redirectionLink}>
          <div className={styles.logo}>InnoMusic</div>
        </Link>
      </div>
      <div className={styles.buttons}>
        <Link href={'./about'} className={styles.redirectionLink}>
          <button className={styles.button}>About us</button>
        </Link>
        <Link href={'./plans'} className={styles.redirectionLink}>
          <button className={styles.button}>Plans</button>
        </Link>
        <Link href={'./'} className={styles.redirectionLink}>
          <button className={styles.button}>Download</button>
        </Link>
        <Link href={'./'} className={styles.stick}>
          |
        </Link>
        <Link href={'./signup'} className={styles.redirectionLink}>
          <button className={styles.button}>Sign up</button>
        </Link>
        <Link href={'./login'} className={styles.redirectionLink}>
          <button className={styles.button}>Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
