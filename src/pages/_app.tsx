import React from 'react';
import { AppProps } from 'next/app';
import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header/Header';
import '../App.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
