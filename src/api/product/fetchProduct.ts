import supabase from "../../../supabase/supabase";

interface FetchProductsProps {
  page: number;
  pageNum: number;
  filterState: FilterState;
}
// 무한 스크롤용
export async function fetchProducts({
  page,
  pageNum,
  filterState,
}: FetchProductsProps) {
  let url = supabase.from("products").select("*", { count: "exact" });

  // 정렬
  if (filterState.sort === "recent") {
    url = url.order("created_at", { ascending: false });
  } else if (filterState.sort === "highPrice") {
    url = url.order("price", { ascending: false });
  } else if (filterState.sort === "lowPrice") {
    url = url.order("price", { ascending: true });
  } else if (filterState.sort === "popular") {
    url = url.order("popular", { ascending: false });
  }

  // 카테고리
  if (filterState.category.굴절망원경) {
    url = url.eq("category", "굴절망원경");
  } else if (filterState.category.반사망원경) {
    url = url.eq("category", "반사망원경");
  } else if (filterState.category.돕소니안) {
    url = url.eq("category", "돕소니안");
  }

  // 브랜드
  if (filterState.brand.celestron) {
    url = url.eq("brand", "celestron");
  } else if (filterState.brand.orion) {
    url = url.eq("brand", "orion");
  } else if (filterState.brand["sky-watcher"]) {
    url = url.eq("brand", "sky-watcher");
  } else if (filterState.brand.omegon) {
    url = url.eq("brand", "omegon");
  }

  // 가격
  if (filterState.price !== "") {
    const min = filterState.price.split("~")[0];
    const max = filterState.price.split("~")[1];
    if (min !== "" && max === "") {
      url = url.gt("price", min);
    } else if (min !== "" && max !== "") {
      url = url.gt("price", min).lt("price", max);
    } else if (min === "" && max !== "") {
      url = url.lt("price", max);
    }
  }

  // 구경
  if (filterState.aperture !== "") {
    const min = filterState.aperture.split("~")[0];
    const max = filterState.aperture.split("~")[1];
    if (min !== "" && max === "") {
      url = url.gt("aperture", min);
    } else if (min !== "" && max !== "") {
      url = url.gt("aperture", min).lt("aperture", max);
    } else if (min === "" && max !== "") {
      url = url.lt("aperture", max);
    }
  }

  // 옵션
  if (filterState.option.support) {
    url = url.neq("goto", "지원 안함");
  } else if (filterState.option.haveStuck) {
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
}) {
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
