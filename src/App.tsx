import { createBrowserRouter, RouterProvider } from "react-router";
import Default from "./routes/layout/Default";
import Home from "./routes/pages/Home/Home";

const router = createBrowserRouter([
  { path: "/", Component: Default, children: [{ path: "", Component: Home }] },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
