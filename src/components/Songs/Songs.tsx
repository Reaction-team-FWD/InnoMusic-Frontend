// src/pages/songs.tsx
import {SongsView} from "@/components/Songs/SongsView";

import React from 'react';
import Song from '@/components/Song/Song';
import styles from './Songs.module.scss';
import {satisfies} from "next/dist/lib/semver-noop";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";

interface SongData {
  id: string;
  name: string;
  artist: string;
  duration: string;
}

export const getServerSideProps = (async () =>{
  let initialSongs: SongData[] = [];
  try {
    const response = await fetch("https://b7ff-188-130-155-162.ngrok-free.app/song/all");
    initialSongs = await response.json();
  } catch (error) {
    console.error('Failed to fetch songs:', error);
  }

  return initialSongs;
  
}) 

export async function Songs() {
  const initialSongs = await getServerSideProps();
  return(
      <>
        <SongsView initialSongs={initialSongs} />
      </>
  )
  
}
export default Songs;
