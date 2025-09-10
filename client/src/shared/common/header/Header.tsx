import { Button } from "@/components/ui/button";
import { useLogout } from "@/services/auth/auth-api-client";
import { useAuth } from "@/shared/hooks/useAuth";

const Header = () => {
  const { isLoggedIn } = useAuth();
  const logoutMutation = useLogout();
  return (
    <header className="py-4 shadow-xs">
      <nav className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">LOGO</h1>

        {isLoggedIn && (
          <Button
            className="btn btn-primary text-white cursor-pointer"
            onClick={() => logoutMutation.mutate()}
          >
            Log Out
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
