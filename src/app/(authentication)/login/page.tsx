'use client';

import { useState } from 'react';
import styles from './login.module.scss';
import '../../globals.scss';
import authService from '@/entities/auth/api';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setNotification] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setNotification('');

    try {
      const response = await authService.login({ username, password });

      const { access_token } = response;
      localStorage.setItem('token', access_token);
      setNotification('You have logged in!');
    } catch (error) {
      setNotification('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.login_container}>
          <h1 className={styles.title}>Login</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="text"
                id="email"
                className={styles.input}
                placeholder="Enter your email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? 'LOGGING IN...' : 'LOG IN'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
