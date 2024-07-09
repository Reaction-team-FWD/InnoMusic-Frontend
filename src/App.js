import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Albums from './components/Albums/Albums.tsx';
import Songs from './components/Songs/Songs.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import Header from './components/Header/Header.tsx';

const App = () => {
    return (
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Albums />} />
          <Route path='/songs' element={<Songs />} />
        </Routes>
      </Router>
    );
  };

export default App;
