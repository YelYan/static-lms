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
    <nav className="flex items-center justify-between py-4">
      <Link to="/">
        <h1 className="font-telegraf-bold text-2xl text-primary">LOGO</h1>
      </Link>
      <Sheet>
        <SheetTrigger>
          <Menu
            size={"30px"}
            className="text-white cursor-pointer hover:text-accent"
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
              <SheetClose>
                <X size={"30px"} className="text-white cursor-pointer" />
              </SheetClose>
            </div>
            <SheetDescription className="h-full grid place-content-center">
              <ul className="flex flex-col items-center gap-4 font-telegraf-regular text-white">
                <li>
                  <a
                    href="#courses"
                    className="cursor-pointer hover:text-accent"
                  >
                    COURSES
                  </a>
                </li>
                <li>
                  <a href="#FAQ" className="cursor-pointer hover:text-accent">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#ABOUT" className="cursor-pointer hover:text-accent">
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
    <nav className="flex items-center justify-between py-4 ">
      <Link to="/">
        <h1 className="font-telegraf-bold text-2xl text-primary">LOGO</h1>
      </Link>

      <ul className="flex items-center gap-4 font-telegraf-regular text-white">
        <li>
          <a href="#courses" className="cursor-pointer hover:text-accent">
            COURSES
          </a>
        </li>
        <li>
          <a href="#FAQ" className="cursor-pointer hover:text-accent">
            FAQ
          </a>
        </li>
        <li>
          <a href="#ABOUT" className="cursor-pointer hover:text-accent">
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
    <header className="container bg-secondary-foreground">
      {desktopResponsive && <HeaderDesktop />}
      {(mobileResponsive || tabletResponsive) && <HeaderMobile />}
    </header>
  );
};

export default Header;
