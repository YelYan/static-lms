import { Outlet } from "react-router";
import { Header, Footer } from "@/shared/common";
const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="py-10 flex-1">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
