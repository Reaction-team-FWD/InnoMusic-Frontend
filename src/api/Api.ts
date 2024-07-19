const API_URL = 'http://localhost:8000';

class Api {
  public async fetch(path: string, params?: RequestInit) {
    return fetch(API_URL + path, params).then((r) => r.json());
  }

  public async authorizedFetch(path: string, token: string, params?: RequestInit) {
    if (params === undefined) params = {};
    if (params?.headers === undefined) params.headers = {};
    params.headers = new Headers(params.headers);
    params.headers.append('Authorization', token);
    return await fetch(path, params).then((r) => r.json());
  }
}

const api = new Api();

export default api;
