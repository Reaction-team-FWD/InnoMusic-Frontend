'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SearchInput.module.scss';

const SearchInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  async function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      router.push(`/search?q=${inputValue}`);
    }
  }

  return (
    <div className={styles.headerInput}>
      <input
        type="text"
        placeholder="Enter the song or author..."
        className={styles.metadataField}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchInput;
