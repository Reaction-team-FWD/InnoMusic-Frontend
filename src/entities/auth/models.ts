export interface RegisterData {
  name: string;
  login: string;
  password: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResult {
  access_token: string;
  token_type: string;
}
