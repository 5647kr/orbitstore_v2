export function validateEmail(email: string) {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reg.test(email.trim());
}

export function validateName(name: string) {
  const reg = /^[가-힣]+$/;
  return reg.test(name.trim());
}
