import { Button } from "@/components/ui/button";
import { useLogout } from "@/services/auth/auth-api-client";

const Header = () => {
  const logoutMutation = useLogout();
  return (
    <div>
      <Button
        className="bg-red-500 text-white cursor-pointer"
        onClick={() => logoutMutation.mutate()}
      >
        Log Out
      </Button>
    </div>
  );
};

export default Header;
