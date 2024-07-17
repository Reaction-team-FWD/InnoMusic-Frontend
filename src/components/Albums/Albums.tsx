import React from "react";
import { Album } from "@/components/Album";
import { Songs } from "@/components/Songs";
import styles from "./Albums.module.scss";

const albums = [
  { id: "1", title: "After Hours", artist: "The Weeknd", year: 2020 },
  { id: "2", title: "Fine Line", artist: "Harry Styles", year: 2019 },
  { id: "3", title: "Future Nostalgia", artist: "Dua Lipa", year: 2020 },
  { id: "4", title: "Blame It on Baby", artist: "DaBaby", year: 2020 },
  { id: "5", title: "Hollywood's Bleeding", artist: "Post Malone", year: 2019 },
  { id: "6", title: "Savage Love", artist: "Jawsh 685 & Jason Derulo", year: 2020 },
  { id: "7", title: "While the World Was Burning", artist: "SAINt JHN", year: 2020 },
  { id: "8", title: "Hot Pink", artist: "Doja Cat", year: 2019 },
  { id: "9", title: "High Off Life", artist: "Future", year: 2020 },
];

const Albums = () => {
  return (
    <div className={styles.albums}>
      <div className={styles.cards}>
        {albums.map((album) => (
          <Album
            key={album.id}
            id={album.id}
            title={album.title}
            artist={album.artist}
            year={album.year}
          />
        ))}
      </div>
      <Songs />
    </div>
  );
};

export default Albums;
