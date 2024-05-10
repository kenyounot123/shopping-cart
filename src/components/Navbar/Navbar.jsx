import navStyle from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function HamburgerMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    function handleCloseDropdown(e) {
      if (
        e.target.className === navStyle["dropdown-menu-overlay"] &&
        dropdownOpen === true
      ) {
        setDropdownOpen(!dropdownOpen);
      }
    }
    window.addEventListener("click", handleCloseDropdown);
    return () => {
      window.removeEventListener("click", handleCloseDropdown);
    };
  }, [dropdownOpen]);
  return (
    <>
      {dropdownOpen ? (
        <>
          <div className={navStyle["dropdown-menu-overlay"]}></div>
          <div className={navStyle["dropdown-menu"]}>
            <ul className={navStyle["menu-items"]}>
              <li>
                <Link
                  onClick={() => setDropdownOpen(false)}
                  className={navStyle["list-items"]}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className={navStyle["list-items"]} to="shop">
                  Shop Now
                </Link>
              </li>
              <li>
                <Link className={navStyle["list-items"]} to="cart">
                  View Cart
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={navStyle["hamburger-btn"]}
        >
          <div className={navStyle["hamburger-line"]}></div>
          <div className={navStyle["hamburger-line"]}></div>
          <div className={navStyle["hamburger-line"]}></div>
        </button>
      )}
    </>
  );
}
export default function Navbar() {
  return (
    <header className={navStyle.header}>
      <nav>
        <ul className={navStyle["d-grid"]}>
          <HamburgerMenu />
          <li className={navStyle.title}>ShopFast</li>
        </ul>
      </nav>
    </header>
  );
}
