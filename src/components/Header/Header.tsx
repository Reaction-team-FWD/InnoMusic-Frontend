import React from 'react';
import './Header.css'
import Input from '../Input/Input.tsx';

const Header = () => {
    return (
        <div id="header">
          <h1 className="header-title">InnoMus</h1>
          <nav className="header-nav">
          <Input />
            <a href="#" className="header-link">Home</a>
            <a href="#" className="header-link">Search</a>
            <a href="/" className="header-link">My music</a>
            <a href="/songs" className="header-link">Liked songs</a>
            <a href="#" className="header-link">About</a>
          </nav>
          <div id='authorization'>
            <button id='signin'>Sign in</button>
            <button id='login'>Log in</button>
          </div>
        </div>
        
    )
}

export default Header