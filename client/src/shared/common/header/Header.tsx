import { Link } from "react-router";

const Header = () => {
  return (
    <header className="container">
      <nav className=" border-b-2 border-main flex items-center justify-between py-4 ">
        <Link to="/">
          <h1 className="font-telegraf-bold text-2xl text-main">LOGO</h1>
        </Link>

        <ul className="flex items-center gap-4 font-telegraf-regular text-main">
          <li>COURSES</li>
          <li>FAQ</li>
          <li>ABOUT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
