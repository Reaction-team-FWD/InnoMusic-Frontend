import React from "react";
import styles from "./Song.module.scss";
import Link from "next/link";

interface SongCardProps {
  id: string;
  title: string;
  artist: string;
  duration: string;
}

const Song: React.FC<SongCardProps> = ({ id, title, artist, duration }) => {
  return (
    <Link href={`/home/${id}?title=${encodeURIComponent(title)}&artist=${encodeURIComponent(artist)}`}>
      <div className={styles.song}>
        <div className={styles.songDetails}>
          <img className={styles.songCover} src="/img/albumCover.png" alt={"cover"}></img>
          <div className={styles.songTitleArtist}>
            <div className={styles.songTitle}>{title}</div>
            <div className={styles.songArtist}>{artist}</div>
          </div>
        </div>
        <div className={styles.songDuration}>{duration}</div>
      </div>
    </Link>
  );
};

export default Song;
