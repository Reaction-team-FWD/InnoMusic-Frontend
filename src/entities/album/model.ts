import { SongModel } from '@/entities/song/model';

export default interface AlbumModel {
  id: number;
  name: string;
  authors: string[];
  songs: SongModel[];
}
