import supabase from "../../../supabase/supabase";

export async function fetchEvents(): Promise<Events[]> {
  const { data, error } = await supabase
    .from("events")
    .select("id, title, desc, img, startDate, endDate, category")
    .order("endDate", { ascending: false });

  if (error) throw error;

  return data;
}

export async function fetchEvent({ id }: { id: string }): Promise<Event> {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}
