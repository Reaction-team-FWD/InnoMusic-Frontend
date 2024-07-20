export function validateUrl(url: string) {
  return url.match(/http(s?):\/\/[a-zA-Z0-9][/.a-zA-Z0-9\-]*\.(?:jpg|gif|png|jpeg|mp3|webp)/);
}

export function validateEmail(email: string) {
  return email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}
