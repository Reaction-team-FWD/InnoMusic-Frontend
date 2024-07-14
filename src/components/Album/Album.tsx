import React from 'react'
import style from './Album.module.css'
import Image from 'next/image';
import albumCover from '../../img/albumCover.jpg'

interface AlbumProps {
    title: string;
    artist: string;
    year: number;
  }

  const Album: React.FC<AlbumProps> = ({ title, artist, year }) => {
    return (
        <div className={style.album}>
            <Image className={style.albumCover} src={albumCover} alt='Album cover'/>
            <div className={style.cardInfo}>
                <div className={style.albumTitle}>{title}</div>
                <div className={style.artist}>{artist} <span className={style.albumYear}>{year}</span></div>
            </div>
        </div>
    )
}

export default Album