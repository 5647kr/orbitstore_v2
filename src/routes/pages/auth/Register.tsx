import { useState } from "react";
import { Check, Lock, Mail, Smartphone, User, X } from "lucide-react";
import { toast } from "sonner";
import Wrap from "../../../components/common/Wrap";
import { validateEmail } from "../../../lib/validateForm";
import { useRegisterMutate } from "../../../hook/auth/useAuthMutation";
import { Link, useNavigate } from "react-router";

interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
}

interface RegisterState {
  email: { state: string; message: string };
  password: { id: string; state: string; message: string }[];
  confirmPassword: { state: string; message: string };
  name: { state: string; message: string };
  phone: { state: string; message: string };
}

export default function Register() {
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
  });
  const [registerState, setRegisterState] = useState<RegisterState>({
    email: { state: "", message: "" },
    password: [
      {
        id: "state1",
        state: "",
        message: "영문/숫자/특수문자 2가지 이상 조합(8~20자)",
      },
      {
        id: "state2",
        state: "",
        message: "3개 이상 동일한 문자/숫자 제외",
      },
      { id: "state3", state: "", message: "이메일 제외" },
    ],
    confirmPassword: {
      state: "",
      message: "확인을 위해 새 비밀번호를 다시 입력해주세요.",
    },
    name: { state: "", message: "" },
    phone: { state: "", message: "" },
  });
  const [inputFocus, setInputFocus] = useState({
    password: false,
    confirmPassword: false,
  });
  const { mutate, isPending } = useRegisterMutate();
  const navigate = useNavigate();

  // 입력폼 조작
  const handleRegisterForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 비밀번호 실시간 검사
    if (name === "password") {
      const password = value;
      // 1. 영문/숫자/특수문자 2개 이상 조합(8~20자)
      const state1Reg =
        /^(?=(.*[a-zA-Z]){1})(?=(.*[0-9]){1}).{8,16}$|^(?=(.*[a-zA-Z]){1})(?=(.*[!@#$%^&*?_]){1}).{8,16}$|^(?=(.*[0-9]){1})(?=(.*[!@#$%^&*?_]){1}).{8,20}$/;
      const isState1validate = state1Reg.test(password);

      setRegisterState((prev) => ({
        ...prev,
        password: prev.password.map((item) =>
          item.id === "state1"
            ? { ...item, state: isState1validate ? "success" : "error" }
            : item,
        ),
      }));

      // 2. 3개 이상 연속되거나 동일한 문자/숫자 제외
      const state2Reg = /(.)\1\1/;
      const isState2validate = state2Reg.test(password);

      setRegisterState((prev) => ({
        ...prev,
        password: prev.password.map((item) =>
          item.id === "state2"
            ? { ...item, state: isState2validate ? "error" : "success" }
            : item,
        ),
      }));

      // 3. 이메일 제외
      const email = registerForm.email.split("@")[0];

      const isEmailIncluded =
        email !== "" && password.toLowerCase().includes(email.toLowerCase());

      setRegisterState((prev) => ({
        ...prev,
        password: prev.password.map((item) =>
          item.id === "state3"
            ? { ...item, state: isEmailIncluded ? "error" : "success" }
            : item,
        ),
      }));
    }

    // 비밀번호 재입력 일치 검사
    if (name === "confirmPassword") {
      const confirmPassword = value;

      if (registerForm.password !== confirmPassword) {
        setRegisterState((prev) => ({
          ...prev,
          confirmPassword: {
            state: "error",
            message: "새 비밀번호가 일치하지 않습니다.",
          },
        }));
      } else if (registerForm.password === confirmPassword) {
        setRegisterState((prev) => ({
          ...prev,
          confirmPassword: {
            state: "success",
            message: "새 비밀번호가 일치합니다.",
          },
        }));
      }
    }
  };

  // 이메일, 이름, 휴대폰 번호 검사
  const checkRegisterForm = (name: string) => {
    // 이메일 검사
    if (name === "email") {
      if (registerForm.email.trim() === "") {
        setRegisterState((prev) => ({
          ...prev,
          email: {
            state: "error",
            message: "이메일을 입력해주세요.",
          },
        }));
      } else if (registerForm.email.trim() !== "") {
        if (!validateEmail(registerForm.email)) {
          setRegisterState((prev) => ({
            ...prev,
            email: {
              state: "error",
              message: "이메일 형식이 올바르지 않습니다.",
            },
          }));
        } else {
          setRegisterState((prev) => ({
            ...prev,
            email: {
              state: "success",
              message: "",
            },
          }));
        }
      }
    }

    // 이름 검사
    if (name === "name") {
      if (registerForm.name.trim() === "") {
        setRegisterState((prev) => ({
          ...prev,
          name: {
            state: "error",
            message: "이름을 입력해주세요.",
          },
        }));
      } else if (!/^[가-힣]+$/.test(registerForm.name.trim())) {
        setRegisterState((prev) => ({
          ...prev,
          name: {
            state: "error",
            message: "이름을 정확히 입력해주세요.",
          },
        }));
      } else {
        setRegisterState((prev) => ({
          ...prev,
          name: {
            state: "success",
            message: "",
          },
        }));
      }
    }

    // 휴대폰번호 검사
    if (name === "phone") {
      if (registerForm.phone.trim() === "") {
        setRegisterState((prev) => ({
          ...prev,
          phone: {
            state: "error",
            message: "휴대폰번호를 입력해주세요.",
          },
        }));
      } else if (!/^010[0-9]{8}$/.test(registerForm.phone.trim())) {
        setRegisterState((prev) => ({
          ...prev,
          phone: {
            state: "error",
            message: "휴대폰번호를 정확히 입력해주세요.",
          },
        }));
      } else {
        setRegisterState((prev) => ({
          ...prev,
          phone: {
            state: "success",
            message: "",
          },
        }));
      }
    }
  };

  // 회원가입 제출 함수
  const submitRegisterForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isAllValidate =
      registerState.email.state === "success" &&
      registerState.password.every((item) => item.state === "success") &&
      registerState.confirmPassword.state === "success" &&
      registerState.name.state === "success" &&
      registerState.phone.state === "success";

    if (!isAllValidate) return;

    mutate(
      {
        email: registerForm.email,
        password: registerForm.password,
        name: registerForm.name,
        phone: registerForm.phone,
      },
      {
        onSuccess: () => {
          toast.success("회원가입이 완료되었습니다.");
          setTimeout(() => navigate("/auth/login"), 1000);
        },
        onError: (error) => {
          switch (error.message) {
            case "User already registered":
              toast.error("이미 가입된 이메일입니다.");
              break;

            default:
              toast.error("회원가입 중 오류가 발생했습니다.");
          }
        },
      },
    );
  };

  return (
    <Wrap>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <h2 className="text-2xl font-black text-center">
            <Link to="/">ORBITSTORE</Link>
          </h2>
        </div>

        <div className="w-full md:max-w-1/2 mt-10">
          <p className="text-base font-semibold text-start">
            회원정보를 입력해주세요.
          </p>
          <form onSubmit={submitRegisterForm}>
            {/* 이메일 */}
            <div
              className={`flex items-center border mt-5 ${registerState.email.state === "error" ? "border-(--error)" : "border-(--border)"}`}>
              <label htmlFor="email" className="p-5 bg-(--bg-sub)">
                <Mail
                  className={`${registerState.email.state === "error" ? "text-(--error)" : "text-(--mute)"}`}
                />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일"
                autoComplete="off"
                className="p-5 pb-4 w-full"
                value={registerForm.email}
                onChange={handleRegisterForm}
                onBlur={() => checkRegisterForm("email")}
              />
              {registerState.email.state === "success" && (
                <div className="p-5 text-(--success)">
                  <Check />
                </div>
              )}
            </div>
            {/* 안내 문구 */}
            {registerState.email.state === "error" && (
              <div className="flex items-center gap-1 ml-5 mt-1 text-(--error)">
                <X className="text-(--error)" />
                <p className="text-sm text-(--error)">
                  {registerState.email.message}
                </p>
              </div>
            )}

            {/* 비밀번호 */}
            <div
              className={`flex items-center border mt-5 ${registerState.password.some((pw) => pw.state === "error") ? "border-(--error)" : "border-(--border)"}`}>
              <label htmlFor="password" className="p-5 bg-(--bg-sub)">
                <Lock
                  className={`${registerState.password.some((pw) => pw.state === "error") ? "text-(--error)" : "text-(--mute)"}`}
                />
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                autoComplete="off"
                className="p-5 pb-4 w-full"
                value={registerForm.password}
                onChange={handleRegisterForm}
                onFocus={() =>
                  setInputFocus((prev) => ({ ...prev, password: true }))
                }
              />
              {registerState.password.every((pw) => pw.state === "success") && (
                <div className="p-5 text-(--success)">
                  <Check />
                </div>
              )}
            </div>
            {/* 안내 문구 */}
            {inputFocus.password && (
              <ul className="ml-5 mt-1">
                {registerState.password.map((pw) => (
                  <li
                    key={pw.id}
                    className={`flex items-center gap-1 ${pw.state === "" ? "text-(--mute)" : pw.state === "error" ? "text-(--error)" : "text-(--success)"}`}>
                    {pw.state === "success" ? <Check /> : <X />}
                    <p className="text-sm">{pw.message}</p>
                  </li>
                ))}
              </ul>
            )}

            {/* 비밀번호 확인 */}
            <div
              className={`flex items-center border mt-5 ${registerState.confirmPassword.state === "error" ? "border-(--error)" : "border-(--border)"}`}>
              <label htmlFor="confirmPassword" className="p-5 bg-(--bg-sub)">
                <Lock
                  className={`${registerState.confirmPassword.state === "error" ? "text-(--error)" : "text-(--mute)"}`}
                />
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="비밀번호 확인"
                autoComplete="off"
                className="p-5 pb-4 w-full"
                value={registerForm.confirmPassword}
                onChange={handleRegisterForm}
                onFocus={() =>
                  setInputFocus((prev) => ({ ...prev, confirmPassword: true }))
                }
              />
              {registerState.confirmPassword.state === "success" && (
                <div className="p-5 text-(--success)">
                  <Check />
                </div>
              )}
            </div>
            {/* 안내 문구 */}
            {inputFocus.confirmPassword && (
              <div
                className={`flex items-center gap-1 ml-5 mt-1 ${registerState.confirmPassword.state === "" ? "text-(--mute)" : registerState.confirmPassword.state === "error" ? "text-(--error)" : "text-(--success)"}`}>
                {registerState.confirmPassword.state === "success" ? (
                  <Check />
                ) : (
                  <X />
                )}
                <p className="text-sm">
                  {registerState.confirmPassword.message}
                </p>
              </div>
            )}

            {/* 이름 */}
            <div
              className={`flex items-center border mt-5 ${registerState.name.state === "error" ? "border-(--error)" : "border-(--border)"}`}>
              <label htmlFor="name" className="p-5 bg-(--bg-sub)">
                <User
                  className={`${registerState.name.state === "error" ? "text-(--error)" : "text-(--mute)"}`}
                />
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="이름"
                autoComplete="off"
                className="p-5 pb-4 w-full"
                value={registerForm.name}
                onChange={handleRegisterForm}
                onBlur={() => checkRegisterForm("name")}
              />
              {registerState.name.state === "success" && (
                <div className="p-5 text-(--success)">
                  <Check />
                </div>
              )}
            </div>
            {/* 안내 문구 */}
            {registerState.name.state === "error" && (
              <div className="flex items-center gap-1 ml-5 mt-1 text-(--error)">
                <X className="text-(--error)" />
                <p className="text-sm text-(--error)">
                  {registerState.name.message}
                </p>
              </div>
            )}

            {/* 휴대폰번호 */}
            <div
              className={`flex items-center border mt-5 ${registerState.phone.state === "error" ? "border-(--error)" : "border-(--border)"}`}>
              <label htmlFor="phone" className="p-5 bg-(--bg-sub)">
                <Smartphone
                  className={`${registerState.phone.state === "error" ? "text-(--error)" : "text-(--mute)"}`}
                />
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="휴대폰번호"
                autoComplete="off"
                className="p-5 pb-4 w-full"
                value={registerForm.phone}
                onChange={handleRegisterForm}
                onBlur={() => checkRegisterForm("phone")}
              />
              {registerState.phone.state === "success" && (
                <div className="p-5 text-(--success)">
                  <Check />
                </div>
              )}
            </div>
            {/* 안내 문구 */}
            {registerState.phone.state === "error" && (
              <div className="flex items-center gap-1 ml-5 mt-1 text-(--error)">
                <X className="text-(--error)" />
                <p className="text-sm text-(--error)">
                  {registerState.phone.message}
                </p>
              </div>
            )}

            {/* 회원가입 버튼 */}
            <div className="flex flex-col gap-5 mt-10">
              <button
                type="submit"
                disabled={isPending}
                className="border border-(--accent) bg-(--accent) text-(--bg) text-lg p-2">
                {isPending ? "가입 중..." : "동의하고 가입하기"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrap>
  );
}
