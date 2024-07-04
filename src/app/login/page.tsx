import { AuthHeader } from "@/components/AuthHeader";
import styles from "./Login.module.scss";
import "../globals.css";

export default function Login() {
  return (
    <>
      <AuthHeader />
      <div className={styles.container}>
        <div className={styles.login_container}>
          <h1 className={styles.title}>Login</h1>
          <form className={styles.form}>
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
            <button type="submit" className={styles.button}>
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
