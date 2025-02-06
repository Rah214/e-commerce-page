"use client";

import React, { useEffect, useState } from "react";
import "./Hero.scss";
import styles from "./Counter.module.scss";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const productData = {
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
    price: 125.0,
    discount: 50,
    originalPrice: 250.0,
    images: ["/4.png", "/1.png", "/2.png", "/3.png"],
    mainImage: "/shoes.png",
};

const Hero = () => {
    const [count, setCount] = useState(0);
    const [shoe, setShoe] = useState(productData.mainImage);

    useEffect(() => {
        const localValue = window.localStorage.getItem("cartCount");
        setCount(localValue ? parseInt(localValue) : 0);
    }, []);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);

    const cart = () => {
        localStorage.setItem("cartCount", count);
        window.dispatchEvent(new Event("storage"));
        toast.success(`${count} item successfully added to cart`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
        });
    };

    return (
        <section>
            <div className="container">
                <div className="container_shoe">
                    <Image src={shoe} width={489} height={547} alt="shoe-image" className="container_simage" />
                    <div className="container_shoe2">
                        {productData.images.map((imgSrc) => (
                            <button key={imgSrc} className="container_button" onClick={() => setShoe(imgSrc)}>
                                <Image src={imgSrc} width={100} height={100} alt="shoe-thumbnail" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="container_text">
                    <p className="container_text_para">{productData.company}</p>
                    <div className="container_text_head">
                        <h1>{productData.title}</h1>
                    </div>
                    <p className="container_text_para2">{productData.description}</p>
                    <div className="container_text_head2">
                        <div className="container_dollar">
                            <h3 className="container_dollar_heading">${productData.price.toFixed(2)}</h3>
                            <h6 className="container_dollar_heading1">{productData.discount}%</h6>
                        </div>
                        <div className="container_para3">
                            <p>${productData.originalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="toast">
                        <div className={styles.main}>
                            <div className={styles.counter}>
                                <button className={styles.button} onClick={decrement}>-</button>
                                <div className={styles.value}>{count}</div>
                                <button className={styles.button} onClick={increment}>+</button>
                            </div>
                            <button onClick={cart} className={styles.button2}>
                                <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;