import React from "react";
import styles from "./Album.module.scss";
import Link from "next/link";

export interface AlbumProps {
  id: string;
  title: string;
  artist: string;
  year: number;
}

const Album: React.FC<AlbumProps> = ({ id, title, artist, year }) => {
  return (
    <div className={styles.album}>
      <Link href={`/home/${id}?title=${encodeURIComponent(title)}&artist=${encodeURIComponent(artist)}&year=${encodeURIComponent(year)}`}>
          <img
            className={styles.albumCover}
            src="/img/albumCover.png"
            alt="Album cover"
          />
          <div className={styles.cardInfo}>
            <div className={styles.albumTitle}>{title}</div>
            <div className={styles.artist}>
              {artist} <span className={styles.albumYear}>{year}</span>
            </div>
          </div>
      </Link>
    </div>
  );
};

export default Album;
