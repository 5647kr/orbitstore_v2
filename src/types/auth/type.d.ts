interface RegisterForm {
  email: string;
  password: string;
  name: string;
  phone: string;
}

interface LoginForm {
  email: string;
  password: string;
}

interface User {
  email: string;
  email_verified: boolean;
  name: string;
  phone: string;
  phone_verified: boolean;
  sub: string;
}
