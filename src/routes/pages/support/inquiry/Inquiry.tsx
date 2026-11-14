import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { validateEmail, validateName } from "../../../../lib/validateForm";
import { X } from "lucide-react";
import { useInquiryMutation } from "../../../../hook/support/useSupportQuery";
import { toast } from "sonner";
import Wrap from "../../../../components/common/Wrap";
import NavigatePath from "../../../../components/common/NavigatePath";

const INQUIRYTYPE = [
  { type: "상품문의", title: "상품문의" },
  { type: "주문배송문의", title: "주문 배송문의" },
  { type: "AS문의", title: "A/S 문의" },
  { type: "기타", title: "기타" },
];

const INITFORM = {
  type: "",
  orderId: "",
  name: "",
  email: "",
  title: "",
  desc: "",
};

export default function Inquiry() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    type: { state: "", message: "" },
    orderId: { state: "", message: "" },
    name: { state: "", message: "" },
    email: { state: "", message: "" },
    title: { state: "", message: "" },
    desc: { state: "", message: "" },
    agree: { state: "", message: "" },
  });
  const [inquiryForm, setInquiryForm] = useState(INITFORM);
  const [agree, setAgree] = useState(false);
  const { mutate: createInquiry, isPending } = useInquiryMutation();

  const handleInquiryForm = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setInquiryForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkInquiryForm = (input: string) => {
    // 문의 유형 검사
    if (input === "type") {
      const type = inquiryForm.type.trim();
      let errorMsg = "";

      if (type === "") {
        errorMsg = "문의 유형을 선택해주세요";
      }

      if (errorMsg) {
        setFormState((prev) => ({
          ...prev,
          type: {
            state: "error",
            message: errorMsg,
          },
        }));
      } else {
        setFormState((prev) => ({
          ...prev,
          type: {
            state: "success",
            message: "",
          },
        }));
      }
    }

    // 이름 검사
    if (input === "name") {
      const name = inquiryForm.name.trim();
      let errorMsg = "";

      if (name === "") {
        errorMsg = "이름을 입력해주세요.";
      } else if (!validateName(name)) {
        errorMsg = "이름을 정확히 입력해주세요.";
      }

      if (errorMsg) {
        setFormState((prev) => ({
          ...prev,
          name: {
            state: "error",
            message: errorMsg,
          },
        }));
      } else {
        setFormState((prev) => ({
          ...prev,
          name: {
            state: "success",
            message: "",
          },
        }));
      }
    }

    // 이메일 검사
    if (input === "email") {
      const email = inquiryForm.email.trim();
      let errorMsg = "";

      if (email === "") {
        errorMsg = "이메일을 입력해주세요.";
      } else if (!validateEmail(email)) {
        errorMsg = "이메일 형식이 올바르지 않습니다.";
      }

      if (errorMsg) {
        setFormState((prev) => ({
          ...prev,
          email: {
            state: "error",
            message: errorMsg,
          },
        }));
      } else {
        setFormState((prev) => ({
          ...prev,
          email: {
            state: "success",
            message: "",
          },
        }));
      }
    }

    // 제목 검사
    if (input === "title") {
      const title = inquiryForm.title.trim();
      let errorMsg = "";

      if (title === "") {
        errorMsg = "문의 제목을 입력해주세요.";
      }

      if (errorMsg) {
        setFormState((prev) => ({
          ...prev,
          title: {
            state: "error",
            message: errorMsg,
          },
        }));
      } else {
        setFormState((prev) => ({
          ...prev,
          title: {
            state: "success",
            message: "",
          },
        }));
      }
    }

    // 문의 내용
    if (input === "desc") {
      const desc = inquiryForm.desc.trim();
      let errorMsg = "";

      if (desc === "") {
        errorMsg = "문의 내용을 입력해주세요.";
      }

      if (errorMsg) {
        setFormState((prev) => ({
          ...prev,
          desc: {
            state: "error",
            message: errorMsg,
          },
        }));
      } else {
        setFormState((prev) => ({
          ...prev,
          desc: {
            state: "success",
            message: "",
          },
        }));
      }
    }
  };

  const submitInquiryForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inquiryForm.type.trim() === "") {
      setFormState((prev) => ({
        ...prev,
        type: { state: "error", message: "문의 유형을 선택해주세요" },
      }));
    }

    if (inquiryForm.name.trim() === "") {
      setFormState((prev) => ({
        ...prev,
        name: { state: "error", message: "이름을 입력해주세요" },
      }));
    }
    if (inquiryForm.email.trim() === "") {
      setFormState((prev) => ({
        ...prev,
        email: { state: "error", message: "이메일을 입력해주세요" },
      }));
    }
    if (inquiryForm.title.trim() === "") {
      setFormState((prev) => ({
        ...prev,
        title: { state: "error", message: "문의 제목을 입력해주세요" },
      }));
    }
    if (inquiryForm.desc.trim() === "") {
      setFormState((prev) => ({
        ...prev,
        desc: { state: "error", message: "문의 내용을 입력해주세요" },
      }));
    }

    if (!agree) {
      setFormState((prev) => ({
        ...prev,
        agree: { state: "error", message: "항목에 동의해주세요" },
      }));
    }

    const isAllValidate =
      formState.type.state === "success" &&
      formState.name.state === "success" &&
      formState.email.state === "success" &&
      formState.name.state === "success" &&
      formState.desc.state === "success" &&
      agree;

    if (!isAllValidate) return;

    const uuid = crypto.randomUUID();
    const id = `INQ-${uuid}`;

    const form = { id: id, ...inquiryForm };

    createInquiry(form, {
      onSuccess: () => {
        toast.success("문의가 정상적으로 등록되었습니다.");
        setInquiryForm(INITFORM);
        setTimeout(
          () =>
            navigate("/support/inquiry/success", {
              state: {
                id: id,
                created_at: Date(),
              },
            }),
          1000,
        );
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Wrap>
      <NavigatePath path={pathname} />

      {/* Title */}
      <div className="text-center py-10 border-b-2 border-(--main-dark)">
        <strong className="text-(--accent) font-bold">CONTACT US</strong>
        <h2 className="text-5xl my-5">1:1 문의</h2>
        <p className="text-(--mute) text-sm ">
          남겨주신 문의는 영업일 기준 1 ~ 2일 내 답변드립니다.
        </p>
      </div>

      <form className="py-10" onSubmit={submitInquiryForm}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* 문의 유형 */}
          <div className="flex flex-col gap-px">
            <label htmlFor="type" className="text-sm">
              문의 유형 *
            </label>
            <select
              name="type"
              id="type"
              className={`border p-4 rounded-md ${formState.type.state === "error" ? "border-(--error)" : " border-(--border)"}`}
              onChange={handleInquiryForm}
              value={inquiryForm.type}
              onBlur={() => checkInquiryForm("type")}
              disabled={isPending}>
              <option value="">문의 유형을 선택해주세요.</option>
              {INQUIRYTYPE.map((type) => (
                <option key={type.type} value={type.type}>
                  {type.title}
                </option>
              ))}
            </select>
            {/* 안내 문구 */}
            {formState.type.state === "error" && (
              <div className="flex items-center gap-1 mt-1 text-(--error)">
                <X className="text-(--error)" size={16} />
                <p className="text-xs text-(--error)">
                  {formState.type.message}
                </p>
              </div>
            )}
          </div>

          {/* 주문번호 */}
          <div className="flex flex-col gap-px">
            <label htmlFor="orderId" className="text-sm">
              주문번호
            </label>
            <input
              type="text"
              name="orderId"
              id="orderId"
              className="border border-(--border) p-4  rounded-md"
              onChange={handleInquiryForm}
              value={inquiryForm.orderId}
              disabled={isPending}
            />
          </div>

          {/* 이름 */}
          <div className="flex flex-col gap-px">
            <label htmlFor="name" className="text-sm">
              이름 *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={`border p-4  rounded-md ${formState.name.state === "error" ? "border-(--error)" : " border-(--border)"}`}
              onChange={handleInquiryForm}
              value={inquiryForm.name}
              onBlur={() => checkInquiryForm("name")}
              disabled={isPending}
            />
            {/* 안내 문구 */}
            {formState.name.state === "error" && (
              <div className="flex items-center gap-1 mt-1 text-(--error)">
                <X className="text-(--error)" size={16} />
                <p className="text-xs text-(--error)">
                  {formState.name.message}
                </p>
              </div>
            )}
          </div>

          {/* 이메일 */}
          <div className="flex flex-col gap-px">
            <label htmlFor="email" className="text-sm">
              이메일 *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`border p-4  rounded-md ${formState.email.state === "error" ? "border-(--error)" : " border-(--border)"}`}
              onChange={handleInquiryForm}
              value={inquiryForm.email}
              onBlur={() => checkInquiryForm("email")}
              disabled={isPending}
            />
            {/* 안내 문구 */}
            {formState.email.state === "error" && (
              <div className="flex items-center gap-1 mt-1 text-(--error)">
                <X className="text-(--error)" size={16} />
                <p className="text-xs text-(--error)">
                  {formState.email.message}
                </p>
              </div>
            )}
          </div>

          {/* 제목 */}
          <div className="flex flex-col gap-px md:col-span-2">
            <label htmlFor="title" className="text-sm">
              제목 *
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className={`border p-4  rounded-md ${formState.title.state === "error" ? "border-(--error)" : " border-(--border)"}`}
              onChange={handleInquiryForm}
              value={inquiryForm.title}
              onBlur={() => checkInquiryForm("title")}
              disabled={isPending}
            />
            {/* 안내 문구 */}
            {formState.title.state === "error" && (
              <div className="flex items-center gap-1 mt-1 text-(--error)">
                <X className="text-(--error)" size={16} />
                <p className="text-xs text-(--error)">
                  {formState.title.message}
                </p>
              </div>
            )}
          </div>

          {/* 문의 내용 */}
          <div className="flex flex-col gap-px md:col-span-2">
            <label htmlFor="desc" className="text-sm">
              문의 내용 *
            </label>
            <textarea
              name="desc"
              id="desc"
              className={`border p-4 min-h-25 rounded-md ${formState.desc.state === "error" ? "border-(--error)" : " border-(--border)"}`}
              onChange={handleInquiryForm}
              value={inquiryForm.desc}
              onBlur={() => checkInquiryForm("desc")}
              disabled={isPending}
            />
            {/* 안내 문구 */}
            {formState.desc.state === "error" && (
              <div className="flex items-center gap-1 mt-1 text-(--error)">
                <X className="text-(--error)" size={16} />
                <p className="text-xs text-(--error)">
                  {formState.desc.message}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 동의 */}
        <div className="flex flex-row-reverse items-center justify-end gap-2 mt-4">
          <label
            htmlFor="agree"
            className={`text-sm ${formState.agree.state === "error" ? "text-(--error)" : " text-(--text)"}`}>
            개인정보 수집 및 이용에 동의합니다. *
          </label>
          <input
            type="checkbox"
            name="agree"
            id="agree"
            className="accent-(--accent)"
            onChange={() => setAgree(!agree)}
            checked={agree}
            disabled={isPending}
          />
        </div>
        {/* 안내 문구 */}
        {formState.agree.state === "error" && (
          <div className="flex items-center gap-1 mt-1 text-(--error)">
            <X className="text-(--error)" size={16} />
            <p className="text-xs text-(--error)">{formState.agree.message}</p>
          </div>
        )}

        <button
          type="submit"
          className="float float-right bg-(--main) text-(--bg) py-2 px-4 rounded-md">
          문의 등록하기
        </button>
      </form>
    </Wrap>
  );
}
