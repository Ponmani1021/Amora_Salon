import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useCart } from "../context/CartContext";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "SERVICE", path: "/service" },
  { label: "GALLERY", path: "/gallery" },
  { label: "CONTACT", path: "/contact" },

];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { totalCount, setIsCartOpen } = useCart();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <div className={styles.navbarWrapper}>
        <nav className={styles.navbar}>
          {/* Brand */}
          <Link to="/" className={styles.brand}>
            Amora
          </Link>

          {/* Desktop Nav Links */}
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${styles.navLinkItem} ${isActive ? styles.activeLink : ''}`
                  }
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right: Cart + Book Now */}
          <div className={styles.navRight}>
            <span className={styles.cartIcon} role="button" aria-label="Cart" onClick={() => setIsCartOpen(true)}>
              <i className="fa-solid fa-cart-plus"></i>
              {totalCount > 0 && <span className={styles.cartBadge}>{totalCount}</span>}
            </span>
            <Link to="/products" className={styles.bookBtn}>Book Now</Link>
            <button
              className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
              onClick={toggleSidebar}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.visible : ""}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.sidebarLinks}>
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles.sidebarLinkItem} ${isActive ? styles.activeSidebarLink : ''}`
                }
                onClick={closeSidebar}
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.sidebarBottom}>
          <Link to="/products" className={styles.bookBtn} onClick={closeSidebar}>Book Now</Link>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
