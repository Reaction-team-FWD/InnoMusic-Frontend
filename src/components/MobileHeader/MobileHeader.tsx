import React, { useState } from 'react';
import { SearchInput } from '@/components/SearchInput';
import styles from './MobileHeader.module.scss';
import Link from 'next/link';
import '@/app/globals.scss';
import menuIcon from '../../../public/img/menu.png';
import Image from 'next/image';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header_title}>
          <Link href="/" className={styles.title_link}>
            InnoMusic
          </Link>
        </h1>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <Image src={menuIcon} alt="menu" className={styles.menuImage} />
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.header_nav_container}>
          <SearchInput />
          <nav className={styles.header_nav}>
            <Link href="/" className={styles.header_link}>
              Home
            </Link>
            <Link href="/search" className={styles.header_link}>
              Search
            </Link>
            <Link href="/home" className={styles.header_link}>
              My music
            </Link>
            <Link href="/likedsongs" className={styles.header_link}>
              Liked songs
            </Link>
            <Link href="/" className={styles.header_link}>
              About
            </Link>
            <div className={styles.authorization}>
              <Link href={'/signup'}>
                <button className={styles.signup}>Sign up</button>
              </Link>
              <Link href={'/login'}>
                <button className={styles.login}>Log in</button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
