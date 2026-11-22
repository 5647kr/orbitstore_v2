import { Telescope } from "lucide-react";
import Wrap from "../common/Wrap";
import NavigatePath from "../common/NavigatePath";
import { Link } from "react-router";

export default function CompareSkeleton() {
  const pathname = "/compare";

  return (
    <Wrap>
      <NavigatePath path={pathname} />

      {/* hero */}
      <section className="py-10">
        <div>
          <span className="text-(--accent) font-bold">COMPARE</span>
          <h2 className="text-5xl my-5">
            한눈에 비교하고
            <br />더 정확하게 선택하세요
          </h2>
          <p className="text-sm text-(--mute)">
            최대 3개 제품의 핵심 스펙과 특징을 비교할 수 있습니다.
          </p>
        </div>
      </section>

      <div className="p-20 flex flex-col justify-center items-center gap-10">
        <Telescope size={100} className="text-(--accent)" />
        <h2 className="text-xl font-bold">
          아직 비교함에 담긴 제품이 없습니다.
        </h2>
        <Link to="/product" className="py-2 px-4 bg-(--main) text-(--bg)">
          제품 둘러보러 가기
        </Link>
      </div>
    </Wrap>
  );
}
