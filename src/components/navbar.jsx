import { Link } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect } from "react";
import sun from "../assets/images/sun.jpg";
import moon from "../assets/images/moon.jpg";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closemobileMenu = () => setClick(false);
  const [isDark, setDark] = useState(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => showButton(), []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-right">
        <i
            className={isDark ? "fa fa-toggle-on" : "fa fa-toggle-off"}
            id="icon"
            onClick={() => {
              setDark(!isDark);
              document.body.classList.toggle("dark-mode");
            }}
          >
            {" "}
          </i>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closemobileMenu}>
                خانه
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closemobileMenu}
              >
                سفر ها
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closemobileMenu}
              >
                تور ها
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closemobileMenu}
              >
                درباره ما
              </Link>
            </li>
            {button && (
            <button className="btn--outline btn--medium">ثبت نام</button>
          )}
            {/* <li  className='nav-item'>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closemobileMenu}
            >
              درباره ما
            </Link>
          </li> */}
          </ul>
         
         
         
        </div>
        <div className="nav-left">
        <Link to='/' className='navbar-logo' onClick={closemobileMenu}>
          TRVL
          <i class='fab fa-typo3' />
        </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
