import { SongModel } from '@/entities/song/model';
import UserModel from '@/entities/user/model';

export interface SearchResult {
  top: {
    type: 'user' | 'song';
    value: SongModel | UserModel;
  };
  songs: SongModel[];
}
