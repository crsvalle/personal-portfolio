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

    const handleScrollToSection = (event, id) => {
        event.preventDefault(); 
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`nav-menu ${scrolling ? "costum-navbar" : ""}`}>
            <div className="max-container flex justify-between items-center px-6">
                <Link href="/" className="navbar-brand">
                    crs<span className="text-yellow-600">valle</span>
                </Link>
            
                <ul className={`hidden h-full gap-6 lg:flex px-6 py-3`}>
                    <li>
                        <Link href="#about" className="nav-item menu-item" onClick={(event) => handleScrollToSection(event, 'about')}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#project" className="nav-item menu-item" onClick={(event) => handleScrollToSection(event, 'project')}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="nav-item menu-item" onClick={(event) => handleScrollToSection(event, 'contact')}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="#skills" className="nav-item menu-item" onClick={(event) => handleScrollToSection(event, 'skills')}>
                            Skills
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
