import supabase from "../../../supabase/supabase";

export async function fetchFaqs(): Promise<Faq[]> {
  const { data, error } = await supabase
    .from("faqs")
    .select("*")
    .neq("category", "제품문의");

  if (error) throw error;

  return data;
}

export async function fetchGuides(): Promise<Guides[]> {
  const { data, error } = await supabase
    .from("guides")
    .select("id, title")
    .order("created_at", { ascending: true });

  if (error) throw error;

  return data;
}

export async function fetchGuide({ id }: { id: string }): Promise<Guide> {
  const { data, error } = await supabase
    .from("guides")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  // const 

  return data;
}

export async function createInquiry({ form }: { form: Inquiry }) {
  const { data, error } = await supabase.from("inquiry").insert(form).select();

  if (error) throw error;

  return data;
}
