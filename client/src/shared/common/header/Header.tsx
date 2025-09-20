import { Link } from "react-router";

const Header = () => {
  return (
    <header className="container">
      <nav className=" border-b-2 border-red-400 flex items-center justify-between py-4 ">
        <Link to="/">
          <h1 className="font-bold text-2xl">LOGO</h1>
        </Link>

        <ul className="flex items-center gap-4">
          <li>COURSES</li>
          <li>FAQ</li>
          <li>ABOUT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
