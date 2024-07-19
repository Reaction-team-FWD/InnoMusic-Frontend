'use client';

import React, { useState } from 'react';
import axios from 'axios';
import styles from './signup.module.scss';
import '../../globals.scss';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    if (password !== repeatPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        'http://84.235.249.242:8000/auth/register',
        {
          name: username,
          login: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setError('Registration successful!');
    } catch (error) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sign_up_container}>
          <h1 className={styles.title}>Sign Up</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <label htmlFor="username" className={styles.label}>
                Username
              </label>
              <input
                type="text"
                id="username"
                className={styles.input}
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="email" className={styles.label}>
                Email address
              </label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div className={styles.form_group}>
              <label htmlFor="repeatPassword" className={styles.label}>
                Repeat Password
              </label>
              <input
                type="password"
                id="repeatPassword"
                className={styles.input}
                placeholder="Repeat your password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? 'SIGNING UP...' : 'SIGN UP'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
