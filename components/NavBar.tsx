import Logo from "./Logo";

const NavBar: React.FC = () => (
  <nav className="z-10 fixed w-full p-2 bg-indigo-900 text-white shadow-md">
    <Logo />
    <span className="float-right">Navigație</span>
  </nav>
);

export default NavBar;
