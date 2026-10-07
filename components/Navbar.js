'use client';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Navbar.css";

const homeLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
];

export default function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY >= 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    const handleScrollToSection = (event, id) => {
        event.preventDefault();
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: "smooth",
            });
        }
    };

    const renderLinks = (mobile = false) =>
        isHome ? (
            homeLinks.map(({ label, id }) => (
                <li key={id}>
                    <Link
                        href={`#${id}`}
                        className={`nav-item menu-item ${mobile ? "block py-3" : ""}`}
                        onClick={(event) => handleScrollToSection(event, id)}
                    >
                        {label}
                    </Link>
                </li>
            ))
        ) : (
            <li>
                <Link
                    href="/"
                    className={`nav-item menu-item ${mobile ? "block py-3" : ""}`}
                >
                    Home
                </Link>
            </li>
        );

    return (
        <nav
            className={`nav-menu ${scrolling || menuOpen ? "costum-navbar" : ""}`}
        >
            <div className="max-container flex justify-between items-center px-6">
                <Link href="/" className="navbar-brand">
                    crs<span className="text-yellow-600">valle</span>
                </Link>
                <ul className="hidden h-full gap-6 lg:flex px-6 py-3">
                    {renderLinks()}
                </ul>
                <button
                    type="button"
                    className="lg:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                >
                    <span
                        className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-7 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            <div
                id="mobile-menu"
                className={`lg:hidden grid transition-all duration-300 ease-in-out ${menuOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <ul className="flex flex-col px-6 pt-4 pb-2 mt-4 border-t border-white/10">
                        {renderLinks(true)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}