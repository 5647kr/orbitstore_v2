import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true, // 로그인 세션을 브라우저 저장소에 보관할지 결정: 기본값 localstorage
    autoRefreshToken: true, // accessToken이 만려되기 전에 supaabase가 refresh token을 사용해 세션을 갱신
    detectSessionInUrl: true
  }
});

export default supabase;
