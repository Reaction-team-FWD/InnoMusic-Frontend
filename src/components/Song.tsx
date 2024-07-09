import React from 'react';

interface SongCardProps {
  title: string;
  artist: string;
  duration: string;
}

const Song: React.FC<SongCardProps> = ({ title, artist, duration }) => {
  return (
    <div className='song'>
      <div id='songDetails'>
        <img id='songCover' src='/img/albumCover.png'></img>
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
