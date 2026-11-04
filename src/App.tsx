import { createBrowserRouter, RouterProvider } from "react-router";
import Default from "./routes/layout/Default";
import Home from "./routes/pages/Home/Home";
import Product from "./routes/pages/product/Product";
import ProductDetail from "./routes/pages/product/ProductDetail";
import Login from "./routes/pages/auth/Login";
import Register from "./routes/pages/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Default,
    children: [
      { path: "", Component: Home },
      { path: "product", Component: Product },
      { path: "product/:id", Component: ProductDetail },

      { path: "auth/login", Component: Login },
      { path: "auth/register", Component: Register },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
