import { Outlet, ScrollRestoration } from "react-router";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

export default function Default() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRestoration />

      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
