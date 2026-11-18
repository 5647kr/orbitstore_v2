import supabase from "../../../supabase/supabase";

interface FetchProductsProps {
  page: number;
  pageNum: number;
  filterProducts: FilterProducts;
}
// 무한 스크롤용
export async function fetchProducts({
  page,
  pageNum,
  filterProducts,
}: FetchProductsProps) {
  let url = supabase
    .from("products")
    .select(
      "id, img, title, brand, category, aperture, focalLength, price, amount",
      { count: "exact" },
    );

  // 정렬
  if (filterProducts.sort === "recent") {
    url = url.order("created_at", { ascending: false });
  } else if (filterProducts.sort === "highPrice") {
    url = url.order("price", { ascending: false });
  } else if (filterProducts.sort === "lowPrice") {
    url = url.order("price", { ascending: true });
  } else if (filterProducts.sort === "popular") {
    url = url.order("popular", { ascending: false });
  }

  // 카테고리
  if (filterProducts.category.굴절망원경) {
    url = url.eq("category", "굴절망원경");
  } else if (filterProducts.category.반사망원경) {
    url = url.eq("category", "반사망원경");
  } else if (filterProducts.category.돕소니안) {
    url = url.eq("category", "돕소니안");
  }

  // 브랜드
  if (filterProducts.brand.celestron) {
    url = url.eq("brand", "celestron");
  } else if (filterProducts.brand.orion) {
    url = url.eq("brand", "orion");
  } else if (filterProducts.brand["sky-watcher"]) {
    url = url.eq("brand", "sky-watcher");
  } else if (filterProducts.brand.omegon) {
    url = url.eq("brand", "omegon");
  }

  // 가격
  if (filterProducts.price) {
    const price = parseInt(filterProducts.price) * 10000;
    url = url.lt("price", price);
  }

  // 구경
  if (filterProducts.aperture) {
    const aperture = parseInt(filterProducts.aperture);
    url = url.lt("aperture", aperture);
  }

  // 옵션
  if (filterProducts.option.support) {
    url = url.neq("goto", "지원 안함");
  } else if (filterProducts.option.haveStuck) {
    url = url.gt("amount", 0);
  }

  const from = page * pageNum;
  const to = from + pageNum - 1;
  url = url.range(from, to);

  const { data, error, count } = await url;

  if (error) throw error;

  const hasNextPage = count ? from + (data.length || 0) < count : false;
  const nextPage = hasNextPage ? page + 1 : undefined;

  return { data, nextPage };
}

// 단일 데이터 조회
export async function fetchProduct({
  id,
  search,
}: {
  id?: string;
  search?: string;
}): Promise<Product> {
  let url = supabase.from("products").select("*");

  if (id) {
    url = url.eq("id", id);
  }

  if (search) {
    url = url.ilike("title", search);
  }

  const { data, error } = await url.single();

  if (error) throw error;

  return data;
}

// 수량 업데이트

// 제품 faq
export async function fetchProductFaq() {
  const { data, error } = await supabase
    .from("faqs")
    .select("*")
    .eq("category", "제품문의");

  if (error) throw error;

  return data;
}
