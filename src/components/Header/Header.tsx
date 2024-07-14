import React from 'react';
import style from './Header.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

    return (
        <div className={style.header}>
          <div className={style.headerTitle}>InnoMusic</div>
          <nav className={style.headerNav}>
          
          <div className={style.input}>
            <div className={style.inputField}>
              <input
                type="text"
                placeholder="Enter title of the song or author..."
                className={style.metadataField}
                value={inputValue}
                onChange={handleChange}
              />
            </div>
          </div>

            <Link href="/" className={style.headerLink}>My music</Link>
            <Link href="/search" className={style.headerLink}>Search</Link>
            <Link href="/likedsongs" className={style.headerLink}>Liked songs</Link>
            <Link href="/about" className={style.headerLink}>About</Link>
          </nav>
          <div className={style.authorization}>
            <button className={style.signup} onClick={() => router.push('/signin')}>Sign up</button>
            <button className={style.login} onClick={() => router.push('/login')}>Log in</button>
          </div>
        </div>
        
    )
}

export default Header