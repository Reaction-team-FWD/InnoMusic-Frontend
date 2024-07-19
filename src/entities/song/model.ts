export interface SongModel {
  id: string;
  name: string;
  authors: string[];
  cover: string;
  file: string;
}

export interface CreateSongModel {
  name: string;
  authors: string[];
  cover: string;
  file: string;
}
