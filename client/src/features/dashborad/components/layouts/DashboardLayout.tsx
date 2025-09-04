import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <DashboardSidebar />
      <div className="dashboard-content">
        <DashboardNavbar />
        <div className="main-content">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
