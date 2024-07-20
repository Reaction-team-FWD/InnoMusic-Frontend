'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './MusicPlayer.module.css';
import { SongModel } from '@/entities/song/model';

const MusicPlayer = ({ song }: { song: SongModel }) => {
  const title = song.name;
  const author = song.authors.map((a) => a.name).join(', ');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sliderProgress, setSliderProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      if (audio && !isNaN(audio.duration)) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setSliderProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleLoadedMetadata = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };

    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setSliderProgress(value);
  };

  const handleProgressCommit = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      audioRef.current.currentTime = (audioRef.current.duration / 100) * sliderProgress;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(e.target.value) / 100;
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.playerWrapper}>
      <audio ref={audioRef} src={song.file}></audio>
      <div className={styles.trackInfo}>
        <div className={styles.trackDetails}>
          <span className={styles.songTitle}>{title}</span>
          <span className={styles.songAuthor}>{author}</span>
        </div>
        <div className={styles.icon} onClick={toggleFavorite}>
          {isFavorite ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
              <path d="M 244 129.5 L 232 115.5 L 244 129.5 L 232 115.5 L 228 110.5 L 228 110.5 Q 208 88.5 181 79.5 Q 153 70.5 124 75.5 Q 83 83.5 58 113.5 Q 33 143.5 32 185.5 L 32 188.5 L 32 188.5 Q 33 239.5 69 274.5 L 253 445.5 L 253 445.5 Q 254 446.5 256 446.5 Q 258 446.5 259 445.5 L 443 274.5 L 443 274.5 Q 479 239.5 480 188.5 L 480 185.5 L 480 185.5 Q 479 143.5 454 113.5 Q 429 83.5 388 75.5 Q 359 70.5 331 79.5 Q 304 88.5 284 110.5 L 280 115.5 L 280 115.5 L 268 129.5 L 268 129.5 Q 263 134.5 256 134.5 Q 249 134.5 244 129.5 L 244 129.5 Z M 279 72.5 Q 330 33.5 394 43.5 Q 446 54.5 479 93.5 Q 511 132.5 512 185.5 L 512 188.5 L 512 188.5 Q 511 244.5 475 286.5 Q 470 292.5 465 297.5 L 281 468.5 L 281 468.5 Q 279 469.5 278 470.5 Q 278 470.5 278 470.5 Q 268 478.5 256 478.5 Q 242 478.5 231 468.5 L 47 297.5 L 47 297.5 Q 42 292.5 37 286.5 Q 1 244.5 0 188.5 L 0 185.5 L 0 185.5 Q 1 132.5 33 93.5 Q 66 54.5 118 43.5 Q 182 33.5 233 72.5 Q 243 79.5 252 89.5 L 256 94.5 L 256 94.5 L 260 89.5 L 260 89.5 Q 266 82.5 273 76.5 Q 275 75.5 276 74.5 Q 277 73.5 279 72.5 L 279 72.5 Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
              <path d="M 48 296.5 L 228 465.5 L 48 296.5 L 228 465.5 Q 240 476.5 256 476.5 Q 272 476.5 284 465.5 L 464 296.5 L 464 296.5 Q 511 252.5 512 187.5 L 512 181.5 L 512 181.5 Q 511 127.5 478 89.5 Q 445 50.5 393 40.5 Q 358 35.5 325 45.5 Q 293 55.5 268 80.5 L 256 92.5 L 256 92.5 L 244 80.5 L 244 80.5 Q 219 55.5 187 45.5 Q 154 35.5 119 40.5 Q 67 50.5 34 89.5 Q 1 127.5 0 181.5 L 0 187.5 L 0 187.5 Q 1 252.5 48 296.5 L 48 296.5 Z" />
            </svg>
          )}
        </div>
        <div className={styles.playerControls}>
          <div className={styles.controlButtons}>
            <div className={styles.icon}>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_0_1738)">
                  <path
                    d="M13.151 1.12512C13.0823 1.05144 12.9995 0.992333 12.9075 0.951341C12.8155 0.910349 12.7162 0.888307 12.6155 0.88653C12.5148 0.884754 12.4148 0.903278 12.3214 0.940999C12.228 0.97872 12.1432 1.03486 12.072 1.10608C12.0007 1.1773 11.9446 1.26214 11.9069 1.35552C11.8692 1.44891 11.8506 1.54894 11.8524 1.64964C11.8542 1.75035 11.8762 1.84966 11.9172 1.94166C11.9582 2.03366 12.0173 2.11646 12.091 2.18512L13.109 3.20312H11.16C10.6123 3.20313 10.0713 3.3231 9.57494 3.5546C9.07859 3.78611 8.63898 4.12352 8.287 4.54312L2.114 11.8991C1.90279 12.1509 1.63899 12.3534 1.34115 12.4923C1.0433 12.6312 0.718642 12.7031 0.39 12.7031H0V14.2031H0.391C0.938681 14.2031 1.47971 14.0831 1.97606 13.8516C2.47241 13.6201 2.91202 13.2827 3.264 12.8631L9.437 5.50712C9.64821 5.25533 9.91201 5.05287 10.2099 4.91397C10.5077 4.77507 10.8324 4.7031 11.161 4.70312H13.108L12.091 5.72112C11.9585 5.8633 11.8864 6.05134 11.8898 6.24564C11.8933 6.43995 11.972 6.62533 12.1094 6.76274C12.2468 6.90016 12.4322 6.97887 12.6265 6.9823C12.8208 6.98572 13.0088 6.9136 13.151 6.78112L15.98 3.95312L13.15 1.12512H13.151ZM0.391 3.70312H0V2.20312H0.391C1.5 2.20312 2.551 2.69312 3.264 3.54312L4.89 5.48012L3.911 6.64712L2.115 4.50712C1.90368 4.2552 1.63972 4.05266 1.34169 3.91376C1.04366 3.77485 0.718811 3.70295 0.39 3.70312H0.391Z"
                    fill="white"
                    fillOpacity="0.698"
                  />
                  <path
                    d="M7.5 10.9261L8.48 9.75912L9.437 10.8991C9.64821 11.1509 9.91201 11.3534 10.2099 11.4923C10.5077 11.6312 10.8324 11.7031 11.161 11.7031H13.108L12.091 10.6851C12.0173 10.6165 11.9582 10.5337 11.9172 10.4417C11.8762 10.3497 11.8542 10.2503 11.8524 10.1496C11.8506 10.0489 11.8692 9.94891 11.9069 9.85552C11.9446 9.76214 12.0007 9.6773 12.072 9.60608C12.1432 9.53486 12.228 9.47872 12.3214 9.441C12.4148 9.40328 12.5148 9.38475 12.6155 9.38653C12.7162 9.38831 12.8155 9.41035 12.9075 9.45134C12.9995 9.49233 13.0823 9.55143 13.151 9.62512L15.98 12.4531L13.151 15.2811C13.0823 15.3548 12.9995 15.4139 12.9075 15.4549C12.8155 15.4959 12.7162 15.5179 12.6155 15.5197C12.5148 15.5215 12.4148 15.503 12.3214 15.4652C12.228 15.4275 12.1432 15.3714 12.072 15.3002C12.0007 15.2289 11.9446 15.1441 11.9069 15.0507C11.8692 14.9573 11.8506 14.8573 11.8524 14.7566C11.8542 14.6559 11.8762 14.5566 11.9172 14.4646C11.9582 14.3726 12.0173 14.2898 12.091 14.2211L13.109 13.2031H11.16C10.6123 13.2031 10.0713 13.0831 9.57494 12.8516C9.07859 12.6201 8.63898 12.2827 8.287 11.8631L7.5 10.9261Z"
                    fill="white"
                    fillOpacity="0.698"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1738">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.203125)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.icon}>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_0_1742)">
                  <path
                    d="M3.3 1.20312C3.48565 1.20312 3.6637 1.27687 3.79497 1.40815C3.92625 1.53943 4 1.71747 4 1.90313V7.05312L13.95 1.30912C14.0564 1.2477 14.1771 1.21535 14.2999 1.21534C14.4228 1.21533 14.5435 1.24766 14.6499 1.30907C14.7563 1.37048 14.8447 1.45882 14.9061 1.5652C14.9676 1.67158 15 1.79227 15 1.91513V14.4901C15.0001 14.6131 14.9679 14.7339 14.9065 14.8404C14.8451 14.9469 14.7568 15.0354 14.6503 15.0969C14.5439 15.1585 14.4231 15.1909 14.3002 15.1909C14.1773 15.1909 14.0565 15.1586 13.95 15.0971L4 9.35213V14.5031C4 14.6888 3.92625 14.8668 3.79497 14.9981C3.6637 15.1294 3.48565 15.2031 3.3 15.2031H1.7C1.51435 15.2031 1.3363 15.1294 1.20503 14.9981C1.07375 14.8668 1 14.6888 1 14.5031V1.90313C1 1.71747 1.07375 1.53943 1.20503 1.40815C1.3363 1.27687 1.51435 1.20313 1.7 1.20312H3.3Z"
                    fill="white"
                    fillOpacity="0.698"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1742">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.203125)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.icon} onClick={togglePlayPause}>
              {isPlaying ? (
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1.20312H14V15.2031H12V1.20312ZM2 1.20312H4V15.2031H2V1.20312Z" fill="white" />
                </svg>
              ) : (
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 1.20312L14 8.20312L2 15.2031V1.20312Z" fill="white" />
                </svg>
              )}
            </div>
            <div className={styles.icon}>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.7 1.20312C12.5143 1.20312 12.3363 1.27687 12.205 1.40815C12.0738 1.53943 12 1.71747 12 1.90313V7.05312L2.05 1.31012C1.94368 1.24874 1.82308 1.2164 1.7003 1.21634C1.57753 1.21629 1.4569 1.24853 1.35053 1.30982C1.24415 1.37111 1.15576 1.45931 1.09424 1.56555C1.03271 1.6718 1.00021 1.79235 1 1.91513V14.4901C0.999863 14.6131 1.03211 14.7339 1.09349 14.8404C1.15487 14.9469 1.24322 15.0354 1.34966 15.0969C1.4561 15.1585 1.57686 15.1909 1.6998 15.1909C1.82275 15.1909 1.94353 15.1586 2.05 15.0971L12 9.35213V14.5031C12 14.6888 12.0738 14.8668 12.205 14.9981C12.3363 15.1294 12.5143 15.2031 12.7 15.2031H14.3C14.4857 15.2031 14.6637 15.1294 14.795 14.9981C14.9262 14.8668 15 14.6888 15 14.5031V1.90313C15 1.71747 14.9262 1.53943 14.795 1.40815C14.6637 1.27687 14.4857 1.20313 14.3 1.20312H12.7Z"
                  fill="white"
                  fillOpacity="0.698"
                />
              </svg>
            </div>
            <div className={styles.icon}>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_0_1753)">
                  <path
                    d="M0 4.95312C0 3.95856 0.395088 3.00474 1.09835 2.30147C1.80161 1.59821 2.75544 1.20313 3.75 1.20312H12.25C13.2446 1.20313 14.1984 1.59821 14.9017 2.30147C15.6049 3.00474 16 3.95856 16 4.95312V9.95312C16 10.9477 15.6049 11.9015 14.9017 12.6048C14.1984 13.308 13.2446 13.7031 12.25 13.7031H9.81L10.828 14.7211C10.9017 14.7898 10.9608 14.8726 11.0018 14.9646C11.0428 15.0566 11.0648 15.1559 11.0666 15.2566C11.0684 15.3573 11.0498 15.4573 11.0121 15.5507C10.9744 15.6441 10.9183 15.7289 10.847 15.8002C10.7758 15.8714 10.691 15.9275 10.5976 15.9652C10.5042 16.003 10.4042 16.0215 10.3035 16.0197C10.2028 16.0179 10.1035 15.9959 10.0115 15.9549C9.91946 15.9139 9.83666 15.8548 9.768 15.7811L6.939 12.9531L9.768 10.1251C9.83666 10.0514 9.91946 9.99234 10.0115 9.95134C10.1035 9.91035 10.2028 9.88831 10.3035 9.88653C10.4042 9.88476 10.5042 9.90328 10.5976 9.941C10.691 9.97872 10.7758 10.0349 10.847 10.1061C10.9183 10.1773 10.9744 10.2621 11.0121 10.3555C11.0498 10.4489 11.0684 10.5489 11.0666 10.6496C11.0648 10.7504 11.0428 10.8497 11.0018 10.9417C10.9608 11.0337 10.9017 11.1165 10.828 11.1851L9.811 12.2031H12.25C12.8467 12.2031 13.419 11.9661 13.841 11.5441C14.2629 11.1222 14.5 10.5499 14.5 9.95312V4.95312C14.5 4.35639 14.2629 3.78409 13.841 3.36213C13.419 2.94018 12.8467 2.70312 12.25 2.70312H3.75C3.15326 2.70312 2.58097 2.94018 2.15901 3.36213C1.73705 3.78409 1.5 4.35639 1.5 4.95312V9.95312C1.5 10.5499 1.73705 11.1222 2.15901 11.5441C2.58097 11.9661 3.15326 12.2031 3.75 12.2031H5V13.7031H3.75C2.75544 13.7031 1.80161 13.308 1.09835 12.6048C0.395088 11.9015 0 10.9477 0 9.95312L0 4.95312Z"
                    fill="white"
                    fillOpacity="0.698"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1753">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.203125)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderProgress}
            className={styles.progressBar}
            onChange={handleProgressChange}
            onMouseUp={handleProgressCommit}
            onTouchEnd={handleProgressCommit}
          />
        </div>
        <div className={styles.volumeControls}>
          <div className={styles.icon}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_0_1774)">
                <path
                  d="M9.7412 0.85003C9.85529 0.915897 9.95001 1.01065 10.0158 1.12476C10.0817 1.23886 10.1163 1.3683 10.1162 1.50003V14.5C10.1163 14.6317 10.0817 14.7611 10.0159 14.8752C9.95011 14.9893 9.85544 15.084 9.74141 15.1499C9.62738 15.2158 9.49802 15.2505 9.36632 15.2505C9.23463 15.2505 9.10525 15.2159 8.9912 15.15L2.0662 11.15C1.2324 10.6666 0.62422 9.87235 0.374924 8.94133C0.125628 8.01032 0.255542 7.01844 0.736202 6.18303C1.05504 5.63007 1.51372 5.1707 2.0662 4.85103L8.9912 0.85103C9.10522 0.785204 9.23455 0.750549 9.3662 0.750549C9.49786 0.750549 9.62719 0.784204 9.7412 0.85003ZM2.8172 6.15003C2.49317 6.33809 2.22422 6.60796 2.03726 6.93263C1.8503 7.2573 1.7519 7.62538 1.7519 8.00003C1.7519 8.37468 1.8503 8.74276 2.03726 9.06743C2.22422 9.3921 2.49317 9.66197 2.8172 9.85003L8.6172 13.2V2.80003L2.8172 6.15003ZM11.5002 10.44V5.56003C11.9468 5.7922 12.3211 6.14249 12.5824 6.57274C12.8436 7.00298 12.9818 7.49668 12.9818 8.00003C12.9818 8.50338 12.8436 8.99708 12.5824 9.42732C12.3211 9.85757 11.9468 10.2079 11.5002 10.44Z"
                  fill="white"
                  fillOpacity="0.698"
                />
                <path
                  d="M11.5 13.614C12.7765 13.3292 13.9179 12.6179 14.7359 11.5973C15.5539 10.5768 15.9996 9.3079 15.9996 7.99999C15.9996 6.69207 15.5539 5.42321 14.7359 4.40265C13.9179 3.38208 12.7765 2.67076 11.5 2.38599V3.93599C12.3687 4.20365 13.1288 4.74269 13.6688 5.47401C14.2087 6.20533 14.5 7.09045 14.5 7.99949C14.5 8.90853 14.2087 9.79364 13.6688 10.525C13.1288 11.2563 12.3687 11.7953 11.5 12.063V13.613V13.614Z"
                  fill="white"
                  fillOpacity="0.698"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_1774">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <input type="range" min="0" max="100" className={styles.volumeControl} onChange={handleVolumeChange} />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
