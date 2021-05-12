import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "./Logo";

const NavBar: React.FC = () => (
  <nav className="z-10 sticky w-full p-2 bg-indigo-900 text-white shadow-md">
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
    <NavMenu />
  </nav>
);

const NavMenu: React.FC = () => {
  // The nav menu is initially not shown
  const [shown, setShown] = useState(false);
  const navMenuClass = shown ? "" : "hidden";

  // We want to hide the menu after the user navigates to a new page
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => setShown(false);

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className="float-right">
      <button className="md:hidden" onClick={() => setShown(!shown)}>
        <img src="/hamburger-menu-icon.svg" alt="Meniu" />
      </button>
      <ul
        className={`absolute right-0 flex flex-col bg-indigo-900 shadow-md md:shadow-none ${navMenuClass} md:block`}
      >
        <NavLink href="/about" label="Despre" />
        <NavLink href="/calendar" label="Calendar" />
      </ul>
    </div>
  );
};

const NavLink: React.FC<{
  href: string;
  label: string;
}> = ({ href, label }) => (
  <Link href={href}>
    <a className="text-center px-4 py-2 md:mr-3">{label}</a>
  </Link>
);

export default NavBar;
