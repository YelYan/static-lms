import { Button } from "@/components/ui/button";
import { useLogout } from "@/services/auth/auth-api-client";

const DashboardSidebar = () => {
  const logoutMutation = useLogout();

  function handleLogout() {
    logoutMutation.mutate();
  }
  return (
    <aside className="flex flex-col justify-between items-start h-screen shadow-sm min-w-2 py-2 px-4">
      <h1 className="text-xl font-bold">ADMIN LOGO</h1>
      <Button className="cursor-pointer" onClick={handleLogout}>
        Log Out
      </Button>
    </aside>
  );
};

export default DashboardSidebar;
