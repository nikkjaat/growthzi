// Navbar.jsx
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { ChevronDown, Home, Dock, Users, Settings, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const homePages = [
    {
      text: "Home Page 1",
      icon: <Home size={16} />,
      href: "/",
    },
    {
      text: "Home Page 2",
      icon: <Dock size={16} />,
      href: "/page2",
    },
  ];

  const otherPages = [
    {
      text: "Team",
      icon: <Users size={16} />,
      href: "/team",
    },
    {
      text: "Settings",
      icon: <Settings size={16} />,
      href: "/settings",
    },
  ];

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>IMPERIAL</span>
        <span>GRAND HOTEL</span>
      </div>

      <ul className={styles.navItems}>
        <li
          className={`${styles.navItem} ${styles.dropdownContainer}`}
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
        >
          <span className={styles.navLink}>
            Home
            <ChevronDown
              size={16}
              className={`${styles.chevron} ${
                activeDropdown === "home" ? styles.rotated : ""
              }`}
            />
          </span>
          <div
            className={`${styles.dropdownMenu} ${
              activeDropdown === "home" ? styles.visible : ""
            }`}
          >
            {homePages.map((page, index) => (
              <Link key={index} to={page.href} className={styles.dropdownItem}>
                {page.icon}
                <span>{page.text}</span>
              </Link>
            ))}
          </div>
        </li>

        <li className={styles.navItem}>
          <span className={styles.navLink}>ABOUT</span>
        </li>

        <li className={styles.navItem}>
          <span className={styles.navLink}>SERVICE</span>
        </li>

        <li
          className={`${styles.navItem} ${styles.dropdownContainer}`}
          onMouseEnter={() => handleMouseEnter("pages")}
          onMouseLeave={handleMouseLeave}
        >
          <span className={styles.navLink}>
            PAGES
            <ChevronDown
              size={16}
              className={`${styles.chevron} ${
                activeDropdown === "pages" ? styles.rotated : ""
              }`}
            />
          </span>
          <div
            className={`${styles.dropdownMenu} ${
              activeDropdown === "pages" ? styles.visible : ""
            }`}
          >
            {otherPages.map((page, index) => (
              <Link key={index} to={page.href} className={styles.dropdownItem}>
                {page.icon}
                <span>{page.text}</span>
              </Link>
            ))}
          </div>
        </li>

        <li className={styles.navItem}>
          <span className={styles.navLink}>
            <Mail size={16} />
            CONTACT US
          </span>
        </li>
      </ul>
    </nav>
  );
}
