import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useResponsive from "@/shared/hooks/useResponsive";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LOGO from "/img/balance.png";
import { Link, useLocation } from "react-router";

const links = [
  {
    id: "COURSES",
    label: "COURSES",
  },
  {
    id: "LOGIN",
    label: "LOGIN",
  },
  {
    id: "SIGNUP",
    label: "SIGNUP",
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeaderDesktop = ({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (id: string) => void;
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
        {links.map((link) => {
          if (link.id === "LOGIN" || link.id === "SIGNUP") {
            return (
              <li key={link.id}>
                <Link
                  onClick={() => setActiveSection(link.id)}
                  className={`${
                    activeSection === link.id
                      ? "text-blue-700 cursor-pointer hover:opacity-50 tracking-wider"
                      : "text-black cursor-pointer hover:opacity-50 tracking-wider"
                  }`}
                  to={`/${link.id.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          } else {
            // COURSES link
            return (
              <li key={link.id}>
                {isHomePage ? (
                  // On homepage, scroll to section
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActiveSection(link.id)}
                    className={`${
                      activeSection === link.id
                        ? "text-blue-700 cursor-pointer hover:opacity-50 tracking-wider"
                        : "text-black cursor-pointer hover:opacity-50 tracking-wider"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  // On other pages, navigate to homepage first
                  <Link
                    to="/"
                    onClick={() => {
                      setActiveSection(link.id);
                      // Small delay to ensure navigation happens before scrolling
                      setTimeout(() => {
                        const coursesSection = document.getElementById(link.id);
                        if (coursesSection) {
                          coursesSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 100);
                    }}
                    className={`${
                      activeSection === link.id
                        ? "text-blue-700 cursor-pointer hover:opacity-50 tracking-wider"
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
  const isHomePage = location.pathname === "/";

  const handleCoursesClick = (linkId: string) => {
    setActiveSection(linkId);

    if (!isHomePage) {
      // Navigate to homepage first, then scroll to courses
      window.location.href = `/#${linkId}`;
    }
    // If already on homepage, the regular anchor link will handle the scroll
  };

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
              <ul className="flex flex-col items-center gap-8 font-telegraf-regular text-white font-bold text-lg">
                {links.map((link) => (
                  <li key={link.id}>
                    <SheetClose asChild>
                      {link.id === "LOGIN" || link.id === "SIGNUP" ? (
                        <Link
                          to={`/${link.id.toLowerCase()}`}
                          onClick={() => setActiveSection(link.id)}
                          className={`${
                            activeSection === link.id
                              ? "text-blue-700 cursor-pointer hover:opacity-70 tracking-wider"
                              : "text-white cursor-pointer hover:opacity-70 tracking-wider"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        // COURSES link
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
              </ul>
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
