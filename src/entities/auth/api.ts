import { LoginData, LoginResult, RegisterData } from '@/entities/auth/models';
import api from '@/api/Api';

class AuthService {
  async register(data: RegisterData) {
    await api.fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async login(data: LoginData): Promise<LoginResult> {
    return await api.fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: new URLSearchParams({ username: data.username, password: data.password }).toString(),
    });
  }
}

const authService = new AuthService();

export default authService;
