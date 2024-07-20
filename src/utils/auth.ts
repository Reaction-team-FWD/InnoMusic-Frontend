export function getTokenOrAlert() {
  const token = localStorage.getItem('token');
  if (token === null) {
    alert('Log in, please.');
    throw new Error('Log in, please.');
  }
  return token;
}

export function isLoggedIn() {
  return localStorage.getItem('token') !== null;
}

export function logOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
