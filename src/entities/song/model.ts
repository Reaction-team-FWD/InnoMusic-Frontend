export interface SongModel {
  id: number;
  name: string;
  authors: string[];
  cover: string;
  file: string;
}

export interface CreateSongModel {
  name: string;
  extra_authors?: number[];
  cover: string;
  file: string;
}
