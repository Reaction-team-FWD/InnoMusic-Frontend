import UserModel from '@/entities/user/model';

export interface SongModel {
  id: number;
  name: string;
  authors: UserModel[];
  cover: string;
  file: string;
}

export interface CreateSongModel {
  name: string;
  extra_authors?: number[];
  cover: string;
  file: string;
}
