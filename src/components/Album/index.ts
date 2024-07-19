export { default as Album } from './Album';
export { default as AlbumProps } from './Album';
export interface AlbumProps {
  id: string;
  title: string;
  artist: string;
  year: number;
}
