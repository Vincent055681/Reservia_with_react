import '../../styles/header/Logo.css'
import logo from '../../assets/logo.png'

function Logo() {
return (
      <a href="index.html" id="logo"><img src={logo} alt="logo" className="logo" /></a>
);
}

export default Logo;