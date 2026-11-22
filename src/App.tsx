import { createBrowserRouter, RouterProvider } from "react-router";
import Default from "./routes/layout/Default";
import Home from "./routes/pages/Home/Home";
import Product from "./routes/pages/product/Product";
import ProductDetail from "./routes/pages/product/ProductDetail";
import Login from "./routes/pages/auth/Login";
import Register from "./routes/pages/auth/Register";
import Support from "./routes/pages/support/Support";
import Faq from "./routes/pages/support/Faq/Faq";
import Inquiry from "./routes/pages/support/inquiry/Inquiry";
import InquirySuccess from "./routes/pages/support/inquiry/InquirySuccess";
import Guide from "./routes/pages/support/guide/Guide";
import Event from "./routes/pages/event/Event";
import EventDetail from "./routes/pages/event/EventDetail";
import Compare from "./routes/pages/compare/Compare";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Default,
    children: [
      { path: "", Component: Home },

      // 망원경 페이지
      { path: "product", Component: Product },
      { path: "product/:id", Component: ProductDetail },

      // 비교 페이지
      { path: "compare", Component: Compare },

      // auth 페이지
      { path: "auth/login", Component: Login },
      { path: "auth/register", Component: Register },

      // 이벤트 페이지
      { path: "event", Component: Event },
      { path: "event/:id", Component: EventDetail },

      // 고객센터 페이지
      {
        path: "support",
        Component: Support,
      },
      { path: "support/faq", Component: Faq },
      { path: "support/inquiry", Component: Inquiry },
      { path: "support/inquiry/success", Component: InquirySuccess },
      { path: "support/guide/:id", Component: Guide },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
