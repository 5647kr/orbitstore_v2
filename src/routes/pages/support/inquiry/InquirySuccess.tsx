import { Link, useLocation } from "react-router";
import Wrap from "../../../../components/common/Wrap";
import NavigatePath from "../../../../components/common/NavigatePath";
import { Check } from "lucide-react";
import { formatDate } from "../../../../lib/formatDate";

export default function InquirySuccess() {
  const { pathname, state } = useLocation();

  const { id, created_at } = state;
  return (
    <Wrap>
      <NavigatePath path={pathname} />

      {/* Title */}
      <div className="text-center py-10">
        <strong className="text-(--accent)">CONTACT US</strong>
        <h2 className="text-4xl font-black my-5">1:1 문의</h2>
        <p className="text-(--mute) text-sm ">
          남겨주신 문의는 영업일 기준 1 ~ 2일 내 답변드립니다.
        </p>
      </div>

      <section className="bg-(--bg-sub) p-10 rounded-md mt-10 flex flex-col justify-center items-center">
        <div className="p-5 border border-(--success) rounded-full">
          <Check size={40} stroke="var(--success)" strokeWidth={2} />
        </div>

        <h3 className="text-3xl font-black my-5">문의가 접수되었습니다.</h3>
        <p className="text-(--mute) text-sm ">
          답변이 등록되면 이메일로 알려드립니다.
        </p>

        <ul className="w-full max-w-[50%] my-10">
          <li className="flex justify-between items-center py-2">
            <h4 className="text-sm text-(--mute)">문의 번호</h4>
            <p className="font-bold">{id}</p>
          </li>
          <li className="flex justify-between items-center py-2">
            <h4 className="text-sm text-(--mute)">접수 날짜</h4>
            <p className="font-bold">{formatDate(created_at)}</p>
          </li>
        </ul>

        <Link
          to="/support"
          className="bg-(--main) text-(--bg) py-2 px-4 rounded-md">
          고객센터로
        </Link>
      </section>
    </Wrap>
  );
}
