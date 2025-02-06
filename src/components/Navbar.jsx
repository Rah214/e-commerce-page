"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0); // Initialize with 0

    // ✅ Load cart count from localStorage on the client-side
    useEffect(() => {
        if (typeof window !== "undefined") {
            const localValue = localStorage.getItem("cartCount");
            setCartCount(localValue ? parseInt(localValue) : 0);
        }
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar__section">
                <div className="navbar__main">
                    <div className="navbar__logo">
                        <Link href={"/"}>
                            <Image src={"/Logo.png"} width={104} height={28} alt="Logo" />
                        </Link>
                    </div>

                    <ul className="navbar__menu">
                        <li>
                            <Link href={"/collection"} className="navbar__menu-item">
                                Collection
                            </Link>
                        </li>
                        <li>
                            <Link href={"/men"} className="navbar__menu-item">
                                Men
                            </Link>
                        </li>
                        <li>
                            <Link href={"/women"} className="navbar__menu-item">
                                Women
                            </Link>
                        </li>
                        <li>
                            <Link href={"/about"} className="navbar__menu-item">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href={"/contact"} className="navbar__menu-item">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar__icons">
                    <div className="navbar__cart">
                        <FontAwesomeIcon icon={faShoppingCart} className="navbar__icon" />
                        {cartCount > 0 && (
                            <span className="navbar__cart-count">{cartCount}</span>
                        )}
                    </div>
                    <Image
                        src={"/Kristina.png"}
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
