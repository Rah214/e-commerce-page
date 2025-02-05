// import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import "./home.module.scss"  

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {/* <Hero/> */}
        {children}
      </body>
    </html>
  );
}
