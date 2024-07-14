import React from 'react'
import Albums from '../components/Albums/Albums'
import Head from 'next/head';

const AlbumsPage: React.FC = () => {
  return (
    <>
      <Head>
          <title>My music</title>
          <meta name="description" content="" />
      </Head>
      <Albums />
    </>
  )
}

export default AlbumsPage;
