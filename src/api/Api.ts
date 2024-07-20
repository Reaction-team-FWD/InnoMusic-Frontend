const API_URL = 'http://localhost:8000';

class Api {
  public async fetch(path: string, params?: RequestInit) {
    const response = await fetch(API_URL + path, params);
    if (Math.floor(response.status / 100) !== 2) {
      throw new Error(await response.text());
    }
    return await response.json();
  }

  public async authorizedFetch(path: string, token: string, params?: RequestInit) {
    if (params === undefined) params = {};
    if (params?.headers === undefined) params.headers = {};
    params.headers = new Headers(params.headers);
    params.headers.set('Authorization', token);
    return await this.fetch(path, params);
  }
}

const api = new Api();

export default api;
