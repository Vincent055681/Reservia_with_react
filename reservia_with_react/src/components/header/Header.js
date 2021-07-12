import "../../styles/header/Links.css";
import "../../styles/header/Logo.css";
import Logo from  "./Logo.js";
import Links from "./Links";


function Header() {
  return (
  <header>
      <nav className="navbar">
          <Logo />
          <Links />
      </nav>
  </header>
  );
}

export default Header;
