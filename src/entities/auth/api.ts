import { LoginData, LoginResult, RegisterData } from '@/entities/auth/models';
import api from '@/api/Api';

class AuthService {
  async register(data: RegisterData) {
    await api.fetch('/auth/register', { method: 'POST', body: JSON.stringify(data) });
  }

  async login(data: LoginData): Promise<LoginResult> {
    return await api.fetch('/auth/login', { method: 'POST', body: JSON.stringify(data) });
  }
}
