import UserModel from '@/entities/user/model';

export function getCurrentUser(): UserModel {
  let item = localStorage.getItem('user');
  if (item === null) {
    throw new Error('Not logged in');
  }
  return JSON.parse(item);
}
