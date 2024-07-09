import React, { useState } from 'react';

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='input'>
      <div className='inputField'>
        <input
          type="text"
          placeholder="Enter title of the song or author..."
          id='metadataField'
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Input;
