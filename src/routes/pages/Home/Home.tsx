import supabase from "../../../../supabase/supabase";

export default function Home() {
  const checkSession = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error(error.message);
    }

    console.log(data.session);
  };

  return (
    <>
      <h1>Home Component</h1>
      <button type="button" onClick={checkSession}>
        세션 확인
      </button>
    </>
  );
}
