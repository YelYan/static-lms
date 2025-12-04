import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useResponsive from "@/shared/hooks/useResponsive";
import { Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LOGO from "/img/balance.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/shared/hooks/useAuth";

interface NavLink {
  id: string;
  label: string;
  authRequired?: boolean;
  hideWhenAuth?: boolean;
}

const links: NavLink[] = [
  {
    id: "/",
    label: "HOME",
  },
  {
    id: "COURSES",
    label: "COURSES",
  },
  {
    id: "LOGIN",
    label: "LOGIN",
    hideWhenAuth: true, // Hide when user is logged in
  },
  {
    id: "SIGNUP",
    label: "SIGNUP",
    hideWhenAuth: true, // Hide when user is logged in
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Helper function to get user initials
const getUserInitials = (name: string | null | undefined): string => {
  if (!name) return "U";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

// User Menu Component (Desktop)
const UserMenu = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={currentUser?.photoURL || ""}
              alt={currentUser?.displayName || "User"}
            />
            <AvatarFallback className="bg-primary text-white">
              {getUserInitials(currentUser?.displayName)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal font-telegraf-regular">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {currentUser?.displayName || "User"}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {currentUser?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/profile" className="cursor-pointer font-telegraf-regular">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          disabled={isLoading}
          className="cursor-pointer text-red-600 focus:text-red-600 font-telegraf-regular"
        >
          <LogOut className="mr-2 h-4 w-4" />
          {isLoading ? "Logging out..." : "Log out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const HeaderDesktop = ({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (id: string) => void;
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { isAuthenticated } = useAuth();

  // Filter links based on authentication state
  const filteredLinks = links.filter((link) => {
    if (link.hideWhenAuth && isAuthenticated) return false;
    return true;
  });

  return (
    <nav className="flex items-center justify-between mx-auto w-full px-5 lg:px-24">
      <Link to={"/"}>
        <img
          src={LOGO}
          className="w-18 h-18 object-center object-cover"
          alt="jimmy's cook"
        />
      </Link>

      <ul className="flex items-center gap-8 font-telegraf-regular text-white font-bold">
        {filteredLinks.map((link) => {
          if (link.id === "LOGIN" || link.id === "SIGNUP") {
            return (
              <li key={link.id}>
                <Link
                  onClick={() => setActiveSection(link.id)}
                  className={`${
                    activeSection === link.id
                      ? "text-primary cursor-pointer hover:opacity-50 tracking-wider"
                      : "text-black cursor-pointer hover:opacity-50 tracking-wider"
                  }`}
                  to={`/${link.id.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          } else {
            // HOME or COURSES link
            return (
              <li key={link.id}>
                {isHomePage ? (
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActiveSection(link.id)}
                    className={`${
                      activeSection === link.id
                        ? "text-primary cursor-pointer hover:opacity-50 tracking-wider"
                        : "text-black cursor-pointer hover:opacity-50 tracking-wider"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to="/"
                    onClick={() => {
                      setActiveSection(link.id);
                      setTimeout(() => {
                        const coursesSection = document.getElementById(link.id);
                        if (coursesSection) {
                          coursesSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 100);
                    }}
                    className={`${
                      activeSection === link.id
                        ? "text-primary cursor-pointer hover:opacity-50 tracking-wider"
                        : "text-black cursor-pointer hover:opacity-50 tracking-wider"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          }
        })}

        {/* User Menu when authenticated */}
        {isAuthenticated && (
          <li>
            <UserMenu />
          </li>
        )}
      </ul>
    </nav>
  );
};

const HeaderMobile = ({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (id: string) => void;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const { currentUser, isAuthenticated, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleCoursesClick = (linkId: string) => {
    setActiveSection(linkId);

    if (!isHomePage) {
      window.location.href = `/#${linkId}`;
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter links based on authentication state
  const filteredLinks = links.filter((link) => {
    if (link.hideWhenAuth && isAuthenticated) return false;
    return true;
  });

  return (
    <nav className="flex items-center justify-between py-4 container px-5">
      <Link to="/">
        <img
          src={LOGO}
          className="w-18 h-18 object-center object-cover"
          alt="jimmy's cook"
        />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Menu
            size={"30px"}
            className="text-black cursor-pointer hover:opacity-50"
          />
        </SheetTrigger>
        <SheetContent className="bg-secondary-foreground border-accent-foreground">
          <SheetHeader className="h-full">
            <div className="flex items-center justify-between">
              <SheetTitle>
                <Link
                  to="/"
                  onClick={() =>
                    (
                      document.querySelector(
                        '[data-state="open"]'
                      ) as HTMLButtonElement
                    )?.click()
                  }
                >
                  <img
                    src={LOGO}
                    className="w-16 h-16 object-center object-cover"
                    alt="jimmy's cook"
                  />
                </Link>
              </SheetTitle>
              <SheetClose className="cursor-pointer">
                <X size={"30px"} className="text-white hover:opacity-50" />
              </SheetClose>
            </div>
            <SheetDescription className="h-full grid place-content-center">
              <div className="flex flex-col items-center gap-8">
                {/* User Info when authenticated */}
                {isAuthenticated && currentUser && (
                  <div className="flex flex-col items-center gap-3 pb-4 border-b border-gray-600">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={currentUser?.photoURL || ""}
                        alt={currentUser?.displayName || "User"}
                      />
                      <AvatarFallback className="bg-primary text-white text-xl">
                        {getUserInitials(currentUser?.displayName)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <p className="text-white font-medium">
                        {currentUser?.displayName || "User"}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {currentUser?.email}
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation Links */}
                <ul className="flex flex-col items-center gap-8 font-telegraf-regular text-white font-bold text-lg">
                  {filteredLinks.map((link) => (
                    <li key={link.id}>
                      <SheetClose asChild>
                        {link.id === "LOGIN" || link.id === "SIGNUP" ? (
                          <Link
                            to={`/${link.id.toLowerCase()}`}
                            onClick={() => setActiveSection(link.id)}
                            className={`${
                              activeSection === link.id
                                ? "text-primary cursor-pointer hover:opacity-70 tracking-wider"
                                : "text-white cursor-pointer hover:opacity-70 tracking-wider"
                            }`}
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={isHomePage ? `#${link.id}` : `/#${link.id}`}
                            onClick={() => handleCoursesClick(link.id)}
                            className={`${
                              activeSection === link.id
                                ? "opacity-50 cursor-pointer hover:opacity-70 tracking-wider"
                                : "text-white cursor-pointer hover:opacity-70 tracking-wider"
                            }`}
                          >
                            {link.label}
                          </a>
                        )}
                      </SheetClose>
                    </li>
                  ))}

                  {/* Dashboard & Settings Links when authenticated */}
                  {isAuthenticated && (
                    <>
                      <li>
                        <SheetClose asChild>
                          <Link
                            to="/dashboard"
                            className="text-white cursor-pointer hover:opacity-70 tracking-wider"
                          >
                            DASHBOARD
                          </Link>
                        </SheetClose>
                      </li>
                      <li>
                        <SheetClose asChild>
                          <Link
                            to="/settings"
                            className="text-white cursor-pointer hover:opacity-70 tracking-wider"
                          >
                            SETTINGS
                          </Link>
                        </SheetClose>
                      </li>
                    </>
                  )}
                </ul>

                {/* Logout Button when authenticated */}
                {isAuthenticated && (
                  <SheetClose asChild>
                    <Button
                      variant="destructive"
                      className="w-full max-w-[200px] mt-4"
                      onClick={handleLogout}
                      disabled={isLoading}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      {isLoading ? "Logging out..." : "Log out"}
                    </Button>
                  </SheetClose>
                )}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

const Header = () => {
  const { desktopResponsive, mobileResponsive, tabletResponsive } =
    useResponsive();
  const [activeSection, setActiveSection] = useState("HERO");

  useGSAP(() => {
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(section.id),
        onEnterBack: () => setActiveSection(section.id),
      });
    });
  }, []);

  return (
    <header className="bg-white py-1 sticky top-0 z-20">
      {desktopResponsive && (
        <HeaderDesktop
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      )}
      {(mobileResponsive || tabletResponsive) && (
        <HeaderMobile
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      )}
    </header>
  );
};

export default Header;
