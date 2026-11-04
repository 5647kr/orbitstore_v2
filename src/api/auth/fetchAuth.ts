import supabase from "../../../supabase/supabase";

// 회원가입
export async function registerAuth(registerForm: RegisterForm) {
  const { data, error } = await supabase.auth.signUp({
    email: registerForm.email,
    password: registerForm.password,
    options: {
      data: {
        name: registerForm.name,
        phone: registerForm.phone,
      },
    },
  });

  if (error) throw error;

  return data;
}

// 로그인
export async function loginAuth(loginForm: LoginForm) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: loginForm.email,
    password: loginForm.password,
  });

  if (error) throw error;

  return data;
}

// 로그아웃
export async function logoutAuth() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
}

// 로그인한 유저 정보 조회
export async function getUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) throw error;

  return data.user;
}