import React from "react";
import styles from "./Song.module.scss";

interface SongCardProps {
  title: string;
  artist: string;
  duration: string;
}

const Song: React.FC<SongCardProps> = ({ title, artist, duration }) => {
  return (
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
  );
};

export default Song;
export { type SongCardProps };
