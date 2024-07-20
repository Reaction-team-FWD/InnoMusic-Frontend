import api from '@/api/Api';
import { SongModel, CreateSongModel } from '@/entities/song/model';

class SongService {
  async getAll(): Promise<SongModel[]> {
    return await api.fetch('/song/all');
  }

  async get(id: number): Promise<SongModel> {
    return await api.fetch(`/song/${id}`);
  }

  async create(song: CreateSongModel, token: string): Promise<SongModel> {
    return await api.authorizedFetch('/song/create', token, {
      method: 'POST',
      body: JSON.stringify(song),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async delete(id: number, token: string) {
    await api.authorizedFetch(`/song/${id}`, token, { method: 'DELETE' });
  }
}

const songService = new SongService();

export default songService;
