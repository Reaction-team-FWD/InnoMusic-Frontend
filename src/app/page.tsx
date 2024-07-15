import Header from "../components/Header/Header";
import styles from "./main.module.scss";
import Link from "next/link";
import "./globals.scss";

export default function MainPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.introduction}>
          <div className={styles.title}>Neque porro quisquam est qui</div>
          <div className={styles.description}>
            It is a long established fact that a reader will be distracted by
            the readable content.
          </div>
          <div className={styles.buttons}>
            <Link href={"./home"}>
              <button className={styles.first_button}>GET STARTED</button>
            </Link>
            <button className={styles.second_button}>SEE OTHER PLANS</button>
          </div>
          <div className={styles.extra_description}>
            <u>Contrary to popular belief</u>, Lorem Ipsum is not simply random
            text.
          </div>
        </div>
        <div className={styles.benefits}>
          <div className={styles.title}>Contrary to popular belief</div>
        </div>
        <div className={styles.subscriptions}>
          <div className={styles.title}>The first line of Lorem Ipsum</div>
        </div>
      </div>
    </>
  );
}
