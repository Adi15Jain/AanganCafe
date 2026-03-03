import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "Our Story" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* Reading progress bar */
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
                scrolled
                    ? "bg-[rgba(12,14,19,0.65)] backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            {/* Reading progress indicator */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-highlight origin-left pointer-events-none"
                style={{ scaleX }}
            />

            <nav className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="relative group flex items-baseline gap-1 sm:gap-1.5"
                    >
                        <span className="text-2xl sm:text-[1.8rem] font-heading font-bold text-white tracking-tight leading-none">
                            Aangan
                        </span>
                        <span className="text-[0.6rem] sm:text-xs font-body font-semibold text-accent tracking-[0.2em] uppercase leading-none hidden sm:inline-block">
                            Café
                        </span>
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 group-hover:w-full shadow-[0_0_8px_rgba(255,107,53,0.4)]" />
                    </Link>

                    {/* Desktop nav */}
                    <ul className="hidden md:flex relative items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.to;
                            return (
                                <li key={link.to} className="relative">
                                    <Link
                                        to={link.to}
                                        className={`relative px-4 py-2 rounded-xl text-[0.85rem] font-medium transition-all duration-300 ${
                                            isActive
                                                ? "text-primary"
                                                : "text-white/60 hover:text-white"
                                        }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-active"
                                                className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-primary shadow-[0_0_12px_rgba(255,107,53,0.5)]"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="ml-4">
                            <Link
                                to="/contact"
                                className="relative px-6 py-2.5 rounded-xl text-[0.85rem] font-semibold text-white
                                    bg-gradient-to-r from-primary to-primary-dark
                                    shadow-[0_4px_20px_rgba(255,107,53,0.3)]
                                    hover:shadow-[0_6px_28px_rgba(255,107,53,0.45)]
                                    hover:-translate-y-0.5
                                    transition-all duration-300"
                            >
                                Visit Us
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2.5 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.span
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={22} />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="open"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={22} />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative md:hidden overflow-hidden"
                        >
                            <ul
                                className="flex flex-col gap-0.5 rounded-2xl p-3 mb-4
                                bg-[rgba(12,14,19,0.85)] backdrop-blur-2xl
                                border border-white/[0.08]
                                shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                            >
                                {navLinks.map((link, i) => (
                                    <motion.li
                                        key={link.to}
                                        initial={{ x: -16, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            delay: i * 0.07,
                                            duration: 0.35,
                                        }}
                                    >
                                        <Link
                                            to={link.to}
                                            className={`block px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                                                location.pathname === link.to
                                                    ? "text-primary bg-primary/[0.08]"
                                                    : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                                <motion.li
                                    initial={{ x: -16, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: navLinks.length * 0.07,
                                        duration: 0.35,
                                    }}
                                    className="pt-1"
                                >
                                    <Link
                                        to="/contact"
                                        className="block text-center px-4 py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl text-sm font-semibold
                                            shadow-[0_4px_20px_rgba(255,107,53,0.25)]
                                            hover:shadow-[0_6px_28px_rgba(255,107,53,0.4)]
                                            transition-all duration-300"
                                    >
                                        Visit Us
                                    </Link>
                                </motion.li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}
