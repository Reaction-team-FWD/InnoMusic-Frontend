import { FC } from "react";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 10V13"
            stroke="#ffffff"
            stroke-width="1.7"
            stroke-linecap="round"
          />
          <path
            d="M16 10V13"
            stroke="#ffffff"
            stroke-width="1.7"
            stroke-linecap="round"
          />
          <path
            d="M7 7L7 16"
            stroke="#ffffff"
            stroke-width="1.7"
            stroke-linecap="round"
          />
          <path
            d="M13 7L13 16"
            stroke="#ffffff"
            stroke-width="1.7"
            stroke-linecap="round"
          />
          <path
            d="M19 7L19 16"
            stroke="#ffffff"
            stroke-width="1.7"
            stroke-linecap="round"
          />
          <path
            d="M10 4L10 19"
            stroke="#ffffff"
            stroke-width="1.7"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className={styles.logo}>InnoMusic</div>
      <div className={styles.buttons}>
        <button className={styles.button}>Premium</button>
        <button className={styles.button}>Support</button>
        <button className={styles.button}>Download</button>
        <a className={styles.stick}>|</a>
        <button className={styles.button}>Sign up</button>
        <button className={styles.button}>Log in</button>
      </div>
    </div>
  );
};

export default Header;
