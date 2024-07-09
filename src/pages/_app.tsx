import React from 'react';
import { AppProps } from 'next/app';
import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import '/styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
