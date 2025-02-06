"use client";
import React, { useEffect, useState } from "react";
import "./Hero.scss";
import styles from "./Counter.module.scss";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    const [count, setCount] = useState(0);
    const [shoe, setShoe] = useState("/shoes.png");

    // Retrieve count from localStorage on component mount
    useEffect(() => {
        const localValue = window.localStorage.getItem("cartCount");
        setCount(localValue ? parseInt(localValue) : 0);
    }, []);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);

    const cart = () => {
        // if (count === 0) {
        //     toast.error("Cart is empty, please enter the quantity", {
        //         position: "bottom-right",
        //         autoClose: 2000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: false
        //     });
        // } else {
            // Update localStorage immediately
            localStorage.setItem("cartCount", count);

            // Trigger 'storage' event to notify other components of the update
            window.dispatchEvent(new Event("storage"));

            toast.success(`${count} item successfully added to cart`, {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false
            });

            // setCount(0);
        // }
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="container_shoe">
                        <Image src={shoe} width={489} height={547} alt="shoe-image" className="container_simage" />

                        <div className="container_shoe2">
                            {["/4.png", "/1.png", "/2.png", "/3.png"].map((imgSrc) => (
                                <button
                                    key={imgSrc}
                                    className="container_button"
                                    onClick={() => setShoe(imgSrc)}
                                >
                                    <Image src={imgSrc} width={100} height={100} alt="shoe-image" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="container_text">
                        <p className="container_text_para">Sneaker Company</p>

                        <div className="container_text_head">
                            <h1>Fall Limited Edition Sneakers</h1>
                        </div>

                        <p className="container_text_para2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...
                        </p>

                        <div className="container_text_head2">
                            <div className="container_dollar">
                                <h3 className="container_dollar_heading">$125.00</h3>
                                <h6 className="container_dollar_heading1">50%</h6>
                            </div>
                            <div className="container_para3">
                                <p>$250.00</p>
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
        </>
    );
};

export default Hero;
