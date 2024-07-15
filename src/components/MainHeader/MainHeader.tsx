import React from "react";
import { SearchInput } from "@/components/SearchInput";
import styles from "./MainHeader.module.scss";
import Link from "next/link";
import "@/app/globals.scss";

const Header = () => {
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
          <Link href="/" className={styles.header_link}>
            Home
          </Link>
          <Link href="/search" className={styles.header_link}>
            Search
          </Link>
          <Link href="/" className={styles.header_link}>
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
          <Link href={"/signup"}>
            <button className={styles.signup}>Sign up</button>
          </Link>
          <Link href={"/login"}>
            <button className={styles.login}>Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
