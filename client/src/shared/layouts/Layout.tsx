import { Outlet } from "react-router";
import { Hero, Header, Footer, Goal } from "@/shared/common";
const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Goal />
      <div className="container mx-auto py-10 flex-1">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
