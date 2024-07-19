import { Header } from '@/components/Header';
import styles from './main.module.scss';
import Link from 'next/link';
import './globals.scss';

export default function MainPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.introduction}>
          <div className={styles.title}>Have you already tried InnoMusic?</div>
          <div className={styles.description}>
            It is almost free music streaming service. Check out our free plan!
          </div>
          <div className={styles.buttons}>
            <Link href={'./home'} className={styles.first_button}>
              GET STARTED
            </Link>
            <Link href={'./plans'} className={styles.second_button}>
              SEE OTHER PLANS
            </Link>
          </div>
          <div className={styles.extra_description}>
            <u>Terms and conditions apply</u>, 1 month free only for Innopolis
            University students
          </div>
        </div>
        <div className={styles.benefits}>
          <div className={styles.title}>
            Sign up now and claim your free trial!
          </div>
          <div className={styles.signUpButtons}>
            <Link href={'./signup'} className={styles.signup}>
              SIGN UP
            </Link>
            <Link href={'./login'} className={styles.signupDesc}>
              If you already have the account
            </Link>
          </div>
        </div>
        <div className={styles.subscriptions}>
          <div className={styles.title}>The first line of Lorem Ipsum</div>
        </div>
      </div>
    </>
  );
}
