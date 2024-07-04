import { AuthHeader } from "@/components/AuthHeader";
import styles from "./SignUp.module.scss";
import "../globals.css";

export default function SignUp() {
  return (
    <>
      <AuthHeader />
      <div className={styles.container}>
        <div className={styles.sign_up_container}>
          <h1 className={styles.title}>Sign Up</h1>
          <form className={styles.form}>
            <div className={styles.form_group}>
              <label htmlFor="email" className={styles.label}>
                Email address
              </label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="username" className={styles.label}>
                Username
              </label>
              <input
                type="text"
                id="username"
                className={styles.input}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                className={styles.input}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="confirm_password" className={styles.label}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm_password"
                className={styles.input}
                placeholder="Confirm your password"
                required
              />
            </div>
            <button type="submit" className={styles.button}>
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
