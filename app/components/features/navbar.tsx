import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav id="navbar" className="fixed-navbar">
      <Link href="/">
        <Image 
          src="/assets/Syntropi-Eng-logo.webp" 
          alt="Syntropy Engineering Logo" 
          width={100} 
          height={100}
          priority
        />
      </Link>
      
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
