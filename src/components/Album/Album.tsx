import React from "react";
import styles from "./Album.module.scss";

export interface AlbumProps {
  title: string;
  artist: string;
  year: number;
}

const Album: React.FC<AlbumProps> = ({ title, artist, year }) => {
  return (
    <div className={styles.album}>
      <img className={styles.albumCover} src="/img/albumCover.png" alt="Album cover"></img>
      <div className={styles.cardInfo}>
        <div className={styles.albumTitle}>{title}</div>
        <div className={styles.artist}>
          {artist} <span className={styles.albumYear}>{year}</span>
        </div>
      </div>
    </div>
  );
};

export default Album;
