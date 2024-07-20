'use client';
import React, { useReducer } from 'react';
import { SearchInput } from '@/components/SearchInput';
import styles from './MainHeader.module.scss';
import Link from 'next/link';
import '@/app/globals.scss';
import MobileHeader from '../MobileHeader/MobileHeader';
import { isLoggedIn, logOut } from '@/utils/auth';

const Header = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header_title}>
          <Link href="/" className={styles.title_link}>
            InnoMusic
          </Link>
        </h1>
        <nav className={styles.header_nav}>
          <SearchInput />
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
        </nav>
        <div className={styles.authorization}>
          {isLoggedIn() ? (
            <button
              onClick={() => {
                logOut();
                forceUpdate();
              }}
              className={styles.login}
            >
              Log out
            </button>
          ) : (
            <>
              <Link href={'./signup'}>
                <button className={styles.signup}>Sign up</button>
              </Link>
              <Link href={'./login'}>
                <button className={styles.login}>Log in</button>
              </Link>
            </>
          )}
        </div>
      </div>
      <MobileHeader />
    </div>
  );
};

export default Header;
