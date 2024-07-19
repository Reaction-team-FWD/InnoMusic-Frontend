import api from '@/api/Api';
import UserModel from '@/entities/user/model';

class UserService {
  async me(token: string): Promise<UserModel> {
    return api.authorizedFetch('/user/me', token);
  }
}

const userService = new UserService();

export default userService;
