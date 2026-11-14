import FaqAside from "../../../../components/support/FaqAside";
import { useFaqsQuery } from "../../../../hook/support/useSupportQuery";
import { useMemo, useState } from "react";
import { FaqItem, FaqSkeleton } from "../../../../components/support/FaqItem";
import { Link, useLocation } from "react-router";
import Wrap from "../../../../components/common/Wrap";
import { Search } from "lucide-react";
import NavigatePath from "../../../../components/common/NavigatePath";

export default function Faq() {
  const { pathname } = useLocation();
  const { data: faqs = [], isLoading } = useFaqsQuery();
  const [filterFaq, setFilterFaq] = useState("전체");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleFilterFaq = (value: string) => {
    setFilterFaq(value);
  };

  const handleSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchCategory = filterFaq === "전체" || faq.category === filterFaq;

      const trimmedKeyword = searchKeyword.trim();
      const matchKeyword =
        trimmedKeyword === "" || faq.title.includes(trimmedKeyword);

      return matchCategory && matchKeyword;
    });
  }, [faqs, filterFaq, searchKeyword]);

  return (
    <Wrap>
      {/* 최상단 네비게이션 */}
      <NavigatePath path={pathname} />

      {/* hero & 검색 */}
      <section className="py-10 text-center">
        <span className="text-(--accent) font-bold">FAQ</span>
        <h2 className="text-5xl my-5">자주 묻는 질문</h2>
        <p className="text-sm text-(--mute)">
          궁금한 내용을 빠르게 확인하세요.
        </p>

        <div className="w-full flex items-center md:w-1/2 rounded-md overflow-hidden mt-4 border border-(--border) mx-auto">
          <div className="p-4 bg-(--bg-sub) flex justify-center items-center">
            <Search stroke="var(--text)" />
          </div>

          <input
            type="text"
            placeholder="궁금한 내용을 검색해 보세요."
            className="bg-(--bg) p-4 w-full placeholder:text-(--mute)"
            value={searchKeyword}
            onChange={handleSearchKeyword}
          />
        </div>
      </section>

      {/* 본문 */}
      <div className="flex flex-col-reverse gap-10 py-5">
        {/* faq 목록 */}
        <section className="flex-1">
          {/* 1. 로딩 중일때 */}
          {isLoading && (
            <div>
              {Array.from({ length: 20 }).map((_, index) => (
                <FaqSkeleton key={index} />
              ))}
            </div>
          )}

          {/* 2. 데이터는 불러왔는데 데이터의 길이가 0인 경우 */}
          {!isLoading && filteredFaqs.length === 0 && (
            <div className="py-20 text-(--mute) flex flex-col items-center justify-center gap-5">
              <strong>검색 결과가 없습니다.</strong>
              <Link
                to="/support/inquiry"
                className="bg-(--main) py-2.5 px-5 text-(--bg) text-base">
                1:1 문의하기
              </Link>
            </div>
          )}

          {/* 3. 데이터도 불러왔고 데이터가 있을 때 */}
          <ul>
            {filteredFaqs.map((faq: Faq) => (
              <li key={faq.id} className="mb-2.5">
                <FaqItem item={faq} />
              </li>
            ))}
          </ul>
        </section>

        {/* 필터링 */}
        <FaqAside filterFaq={filterFaq} handleFilterFaq={handleFilterFaq} />
      </div>

      {/* 1:1 문의 */}
      <div className="bg-(--bg-sub) py-10 px-5 rounded-md flex justify-between items-center">
        <p>찾으시는 답변이 없으신가요?</p>
        <Link
          to="/support/inquiry"
          className="bg-(--main) py-2 px-4 rounded-md text-(--bg)">
          1:1 문의하기
        </Link>
      </div>
    </Wrap>
  );
}
