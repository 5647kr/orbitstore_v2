import { Outlet, ScrollRestoration } from "react-router";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { Toaster } from "sonner";

export default function Default() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRestoration />
      <Toaster position="top-center" />

      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
