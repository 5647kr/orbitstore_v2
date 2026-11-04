import { useMutation } from "@tanstack/react-query";
import { loginAuth, registerAuth } from "../../api/auth/fetchAuth";

export function useRegisterMutate() {
  return useMutation({
    mutationFn: (registerForm: RegisterForm) => registerAuth(registerForm),
  });
}

export function useLoginMutate() {
  return useMutation({
    mutationFn: (loginForm: LoginForm) => loginAuth(loginForm),
  });
}
