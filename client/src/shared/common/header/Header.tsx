import { Link } from "react-router";
import useResponsive from "@/shared/hooks/useResponsive";
import { Menu, X } from "lucide-react";
// import LOGO from "/img/skilltech.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const HeaderMobile = () => {
  return (
    <nav className="flex items-center justify-between py-4 container">
      <Link to="/">
        <h1 className="font-telegraf-bold text-2xl text-primary">LOGO</h1>
      </Link>
      <Sheet>
        <SheetTrigger>
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
                <li>
                  <a
                    href="#courses"
                    className="cursor-pointer hover:opacity-50 tracking-wider"
                  >
                    COURSES
                  </a>
                </li>
                <li>
                  <a
                    href="#FAQ"
                    className="cursor-pointer hover:opacity-50 tracking-wider"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#ABOUT"
                    className="cursor-pointer hover:opacity-50 tracking-wider"
                  >
                    ABOUT
                  </a>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

const HeaderDesktop = () => {
  return (
    <nav className="flex items-center justify-between py-4 container">
      <Link to="/">
        <h1 className="font-telegraf-bold text-2xl text-primary">LOGO</h1>
      </Link>

      <ul className="flex items-center gap-8 font-telegraf-regular text-white font-bold">
        <li>
          <a
            href="#courses"
            className="cursor-pointer hover:opacity-50 tracking-wider"
          >
            COURSES
          </a>
        </li>
        <li>
          <a
            href="#FAQ"
            className="cursor-pointer hover:opacity-50 tracking-wider"
          >
            FAQ
          </a>
        </li>
        <li>
          <a href="#ABOUT" className="cursor-pointer hover:opacity-50">
            ABOUT
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  const { desktopResponsive, mobileResponsive, tabletResponsive } =
    useResponsive();

  return (
    <header className="bg-secondary-foreground py-4">
      {desktopResponsive && <HeaderDesktop />}
      {(mobileResponsive || tabletResponsive) && <HeaderMobile />}
    </header>
  );
};

export default Header;
