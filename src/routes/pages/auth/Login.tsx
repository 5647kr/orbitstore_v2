import { Eye, EyeClosed, Lock, Mail, X } from "lucide-react";
import { Link, useNavigate } from "react-router";
import Wrap from "../../../components/common/Wrap";
import { useState } from "react";
import { validateEmail } from "../../../lib/validateForm";
import { toast } from "sonner";
import { useLoginMutate } from "../../../hook/auth/useAuthMutation";

interface LoginState {
  email: { state: string; message: string };
  password: { state: string; message: string };
}

export default function Login() {
  const initForm = { email: "", password: "" };
  const [loginForm, setLoginForm] = useState<LoginForm>(initForm);
  const [loginState, setLoginState] = useState<LoginState>({
    email: { state: "", message: "" },
    password: { state: "", message: "" },
  });
  const [showPw, setShowPw] = useState(false);
  const { mutate, isPending } = useLoginMutate();
  const navigate = useNavigate();

  const handleLoginForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const removeEmailValue = () => {
    setLoginForm((prev) => ({
      ...prev,
      email: "",
    }));
  };

  const toggleShowPw = () => {
    setShowPw((showPw) => !showPw);
  };

  const checkLoginForm = (name: string) => {
    // 이메일 검사
    if (name === "email") {
      if (loginForm.email.trim() === "") {
        setLoginState((prev) => ({
          ...prev,
          email: {
            state: "error",
            message: "이메일을 입력해주세요.",
          },
        }));
      } else if (loginForm.email.trim() !== "") {
        if (!validateEmail(loginForm.email)) {
          setLoginState((prev) => ({
            ...prev,
            email: {
              state: "error",
              message: "이메일 형식이 올바르지 않습니다.",
            },
          }));
        } else {
          setLoginState((prev) => ({
            ...prev,
            email: {
              state: "success",
              message: "",
            },
          }));
        }
      }
    }

    // 비밀번호 검사
    if (name === "password") {
      if (loginForm.password.trim() === "") {
        setLoginState((prev) => ({
          ...prev,
          password: {
            state: "error",
            message: "비밀번호를 입력해주세요.",
          },
        }));
      } else {
        setLoginState((prev) => ({
          ...prev,
          password: {
            state: "success",
            message: "",
          },
        }));
      }
    }
  };

  const submitLoginForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isAllValidate =
      loginState.email.state === "success" &&
      loginState.password.state === "success";

    if (!isAllValidate) return;

    mutate(loginForm, {
      onSuccess: () => {
        toast.success("로그인 되었습니다.");
        setTimeout(() => navigate("/"), 1000);
      },
      onError: () => {
        toast.error(
          "이메일 또는 비밀번호가 올바르지 않습니다. 다시 확인해주세요.",
        );
      },
    });
  };
  return (
    <Wrap>
      <div className="flex flex-col items-center">
        <div className="border-b border-(--border) w-full">
          <h2 className="text-2xl text-center">ORBITSTORE</h2>
        </div>

        <form className="w-full mt-10 md:max-w-1/2" onSubmit={submitLoginForm}>
          {/* 이메일 */}
          <div
            className={`flex items-center border mt-5 ${loginState.email.state === "error" ? "border-(--error)" : "border-(--border)"}`}>
            <label htmlFor="email" className="p-5 bg-(--bg-sub)">
              <Mail
                className={`${loginState.email.state === "error" ? "text-(--error)" : "text-(--mute)"}`}
              />
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="이메일"
              autoComplete="off"
              className="p-5 pb-4 w-full"
              value={loginForm.email}
              onChange={handleLoginForm}
              onBlur={() => checkLoginForm("email")}
            />
            <div className="p-5 cursor-pointer" onClick={removeEmailValue}>
              <X />
            </div>
          </div>
          {/* 안내 문구 */}
          {loginState.email.state === "error" && (
            <div className="flex items-center gap-1 ml-5 mt-1 text-(--error)">
              <X className="text-(--error)" />
              <p className="text-sm text-(--error)">
                {loginState.email.message}
              </p>
            </div>
          )}

          {/* 비밀번호 */}
          <div
            className={`flex items-center border mt-5 ${loginState.password.state === "error" ? "border-(--error)" : "border-(--border)"}`}>
            <label htmlFor="password" className="p-5 bg-(--bg-sub)">
              <Lock
                className={`${loginState.password.state === "error" ? "text-(--error)" : "text-(--mute)"}`}
              />
            </label>
            <input
              type={showPw ? "text" : "password"}
              id="password"
              name="password"
              placeholder="비밀번호"
              autoComplete="off"
              className="p-5 pb-4 w-full"
              value={loginForm.password}
              onChange={handleLoginForm}
              onBlur={() => checkLoginForm("password")}
            />
            <button type="button" className="p-5" onClick={toggleShowPw}>
              {showPw ? <EyeClosed /> : <Eye />}
            </button>
          </div>
          {/* 안내 문구 */}
          {loginState.password.state === "error" && (
            <div className="flex items-center gap-1 ml-5 mt-1 text-(--error)">
              <X className="text-(--error)" />
              <p className="text-sm text-(--error)">
                {loginState.password.message}
              </p>
            </div>
          )}

          {/* 로그인 & 회원가입 버튼 */}
          <div className="flex flex-col gap-5 mt-10">
            <button
              type="submit"
              disabled={isPending}
              className="border border-(--accent) bg-(--accent) text-(--bg) text-lg p-2">
              {isPending ? "로그인 중..." : "로그인"}
            </button>
            <Link
              to="/auth/register"
              className="border border-(--border) text-center text-lg p-2">
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </Wrap>
  );
}
