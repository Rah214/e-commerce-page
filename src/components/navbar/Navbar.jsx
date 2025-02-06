"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// JSON Structure for Navbar
const navbarData = {
  logo: "/Logo.png",
  links: [
    { name: "Collection", path: "/collection" },
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
  icons: [
    { name: "cart", icon: faShoppingCart },
  ],
  userImage: "/Kristina.png",
};

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  // Function to get cart count from localStorage
  const getCartCount = () => {
    if (typeof window !== "undefined") {
      const localValue = localStorage.getItem("cartCount");
      return localValue ? parseInt(localValue) : 0;
    }
    return 0;
  };

  // Load cart count when component mounts and listen for localStorage updates
  useEffect(() => {
    setCartCount(getCartCount());

    // Listen for changes in localStorage via storage event
    const handleStorageChange = () => setCartCount(getCartCount());

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__section">
        <div className="navbar__main">
          <div className="navbar__logo">
            <Link href="/">
              <Image src={navbarData.logo} width={104} height={28} alt="Logo" />
            </Link>
          </div>

          <ul className="navbar__menu">
            {navbarData.links.map((link) => (
              <li key={link.name}>
                <Link href={link.path} className="navbar__menu-item">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar__icons">
          {navbarData.icons.map((icon) => (
            <div key={icon.name} className="navbar__cart">
              <FontAwesomeIcon icon={icon.icon} className="navbar__icon" />
              {cartCount > 0 && <span className="navbar__cart-count">{cartCount}</span>}
            </div>
          ))}

          <Image
            src={navbarData.userImage}
            width={45}
            height={45}
            className="navbar__image"
            alt="User Image"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
