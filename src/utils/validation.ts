function validateUrl(url: string) {
  return url.match(/http(s?):\/\/[a-zA-Z][/.a-zA-Z\-]*\.(?:jpg|gif|png|jpeg|mp3)/);
}

function validateEmail(email: string) {
  return email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}
