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

const links = [
  {
    id: "HERO",
    label: "HOME",
  },
  {
    id: "ABOUT",
    label: "ABOUT",
  },
  {
    id: "COURSES",
    label: "COURSES",
  },
  {
    id: "FAQ",
    label: "FAQ",
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
  return (
    <nav className="flex items-center justify-between mx-auto w-full px-5 lg:px-24">
      <a href="#">
        <img
          src={LOGO}
          className="w-18 h-18 object-center object-cover"
          alt="jimmy's cook"
        />
      </a>

      <ul className="flex items-center gap-8 font-telegraf-regular text-white font-bold">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={() => setActiveSection(link.id)} // ✅ Force active section on click
              className={`${
                activeSection === link.id
                  ? "opacity-50 cursor-pointer hover:opacity-50 tracking-wider"
                  : "text-white cursor-pointer hover:opacity-50 tracking-wider"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
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
  return (
    <nav className="flex items-center justify-between py-4 container">
      <a href="#">
        <img
          src={LOGO}
          className="w-18 h-18 object-center object-cover"
          alt="jimmy's cook"
        />
      </a>

      <Sheet>
        <SheetTrigger asChild>
          <Menu
            size={"30px"}
            className="text-white cursor-pointer hover:opacity-50"
          />
        </SheetTrigger>
        <SheetContent className="bg-secondary-foreground border-accent-foreground">
          <SheetHeader className="h-full">
            <div className="flex items-center justify-between">
              <SheetTitle>
                <h1 className="font-telegraf-bold text-2xl text-primary">
                  LOGO
                </h1>
              </SheetTitle>
              <SheetClose className="cursor-pointer">
                <X size={"30px"} className="text-white hover:opacity-50" />
              </SheetClose>
            </div>
            <SheetDescription className="h-full grid place-content-center">
              <ul className="flex flex-col items-center gap-4 font-telegraf-regular text-white font-bold">
                {links.map((link) => (
                  <li key={link.id}>
                    <SheetClose asChild>
                      <a
                        href={`#${link.id}`}
                        // The click sets the state immediately for visual feedback
                        onClick={() => setActiveSection(link.id)}
                        className={`${
                          activeSection === link.id
                            ? "opacity-50 cursor-pointer hover:opacity-50 tracking-wider"
                            : "text-white cursor-pointer hover:opacity-50 tracking-wider"
                        }`}
                      >
                        {link.label}
                      </a>
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
      // 1. --- SCROLLTRIGGER FOR NAVIGATION (Existing Logic) ---
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
    <header className="bg-secondary-foreground py-1 sticky top-0 z-20 shadow-lg">
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
