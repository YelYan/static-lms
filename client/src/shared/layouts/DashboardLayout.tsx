import { Outlet } from "react-router";
import { DashboardNavbar } from "@/shared/common";
import { DashboardSidebar } from "@/shared/common";

const DashboardLayout = () => {
  return (
    <main className="flex gap-2">
      <DashboardSidebar />
      <div className="dashboard-content">
        <DashboardNavbar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
