import navStyle from "./Navbar.module.css";
import { useState } from "react";
function HamburgerMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={navStyle["hamburger-btn"]}
      >
        <div className={navStyle["hamburger-line"]}></div>
        <div className={navStyle["hamburger-line"]}></div>
        <div className={navStyle["hamburger-line"]}></div>
      </button>
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
