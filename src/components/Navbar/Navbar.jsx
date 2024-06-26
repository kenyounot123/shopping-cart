import navStyle from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext, useMemo } from "react";
import Icon from "@mdi/react";
import { mdiCartOutline, mdiAccountCircleOutline } from "@mdi/js";
import { CartContext } from "../../helpers/CartContext";
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
  const { cart } = useContext(CartContext);
  const currPath = useLocation();
  function isActive(path) {
    return path === currPath.pathname;
  }
  // const totalCartItems = useMemo(() => {
  //   return cart.reduce((acc, item) => acc + item.qty, 0)
  // }, [cart])
  function totalCartItems() {
    return cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
  }
  return (
    <header className={navStyle.header}>
      <nav>
        <ul className={navStyle["display-change"]}>
          <HamburgerMenu />
          <div className={navStyle["left-nav"]}>
            <li className={isActive("/") ? navStyle.active : ""}>
              <Link className={navStyle["nav-items"]} to="/">
                Home
              </Link>
            </li>
            <li className={isActive("/shop") ? navStyle.active : ""}>
              <Link className={navStyle["nav-items"]} to="/shop">
                Shop Now
              </Link>
            </li>
          </div>
          <li className={navStyle.title}>ShopFast</li>
          <div className={navStyle["right-nav"]}>
            <li>
              <Link className={navStyle["nav-items"]} to={"/cart"}>
                <Icon path={mdiCartOutline} size={1.5} />
                <span>{totalCartItems()}</span>
              </Link>
            </li>
            <li>
              <Icon path={mdiAccountCircleOutline} size={1.5} />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
