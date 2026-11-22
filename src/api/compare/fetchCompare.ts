import supabase from "../../../supabase/supabase";

export async function fetchCompare({
  compareIds,
}: {
  compareIds: string[];
}): Promise<Compare[]> {
  const { data, error } = await supabase
    .from("products")
    .select(
      "id, title, brand, category, img, price, aperture, focalLength, apertureRatio, goto, portability, recommended",
    )
    .in("id", compareIds);

  if (error) throw error;

  return data;
}
