import React from 'react';
import songCover from '../../img/albumCover.jpg';
import './Song.css'

interface SongCardProps {
  title: string;
  artist: string;
  duration: string;
}

const Song: React.FC<SongCardProps> = ({ title, artist, duration }) => {
  return (
    <div className='song'>
      <div id='songDetails'>
        <img id='songCover' src={songCover}></img>
        <div id='songTitleArtist'>
          <div id='songTitle'>{title}</div>
          <div id='songArtist'>{artist}</div>
        </div>
      </div>
      <div id='songDuration'>{duration}</div>
    </div>
  );
};

export default Song;
