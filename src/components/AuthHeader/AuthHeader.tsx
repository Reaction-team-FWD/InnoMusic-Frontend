import { FC } from "react";
import styles from "./AuthHeader.module.scss";
import Link from "next/link";

const AuthHeader: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 10V13"
            stroke="#000000"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M16 10V13"
            stroke="#000000"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M7 7L7 16"
            stroke="#000000"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M13 7L13 16"
            stroke="#000000"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M19 7L19 16"
            stroke="#000000"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M10 4L10 19"
            stroke="#000000"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <Link href="./" className={styles.linkLogo}>
      <div className={styles.logo}>InnoMusic</div></Link>
    </div>
  );
};

export default AuthHeader;
