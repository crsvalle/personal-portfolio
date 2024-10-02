'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
    const [scrolling, setScrolling] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrolling(position >= 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <nav className={`nav-menu ${scrolling ? "costum-navbar" : ""}`}>
            <div className="max-container flex justify-between items-center px-6">
                <Link href="/" className="navbar-brand">
                    crs<span className="text-yellow-600">valle</span>
                </Link>
            
                <ul className={`hidden h-full gap-6 lg:flex px-6 py-3 `}>
                    <li>
                        <Link href="#about" className="nav-item menu-item">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#project" className="nav-item menu-item">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="nav-item menu-item">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
