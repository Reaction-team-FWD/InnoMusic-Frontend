import React from 'react';
import style from './Song.module.css'
import Image from 'next/image';
import songCover from '../../img/albumCover.jpg'
import playIcon from '../../img/play.png'

interface SongCardProps {
  title: string;
  artist: string;
  duration: string;
}

const Song: React.FC<SongCardProps> = ({ title, artist, duration }) => {
  return (
    <div className={style.song}>
      <div id={style.songDetails}>
        <Image id={style.songCover} src={songCover} alt=''/>
        <Image id={style.playIcon} src={playIcon} alt=''/>
        <div id={style.songTitleArtist}>
          <div id={style.songTitle}>{title}</div>
          <div id={style.songArtist}>{artist}</div>
        </div>
      </div>
      <div id={style.songDuration}>{duration}</div>
    </div>
  );
};

export default Song;
