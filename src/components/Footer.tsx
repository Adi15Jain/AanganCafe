import { Link } from "react-router";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Instagram,
    Facebook,
    ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
];

const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Our Menu" },
    { to: "/about", label: "Our Story" },
    { to: "/contact", label: "Contact" },
];

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative overflow-hidden">
            {/* Gradient top accent */}
            <div className="h-[2px] bg-gradient-to-r from-primary via-accent to-highlight opacity-40" />

            {/* Main footer — glass-like dark */}
            <div
                className="relative"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(12,14,19,0.95) 0%, rgba(8,10,14,1) 100%)",
                }}
            >
                {/* Ambient glow */}
                <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-0 right-1/3 w-80 h-48 bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                        {/* Brand */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <Link
                                to="/"
                                className="inline-flex items-baseline gap-1.5 mb-4"
                            >
                                <span className="text-xl font-heading font-bold text-white tracking-tight">
                                    Aangan
                                </span>
                                <span className="text-[0.65rem] font-body font-semibold text-accent tracking-[0.2em] uppercase">
                                    Café
                                </span>
                            </Link>
                            <p className="text-[0.82rem] leading-relaxed mb-6 text-white/30 max-w-[260px]">
                                Where every sip feels like home. A
                                nostalgic-modern Indian courtyard café in
                                Faridabad.
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-xl
                                            bg-white/[0.04] border border-white/[0.08]
                                            flex items-center justify-center
                                            text-white/40 hover:text-white
                                            transition-all duration-300"
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor:
                                                "rgba(20, 184, 166, 0.2)",
                                            borderColor:
                                                "rgba(20, 184, 166, 0.4)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon size={15} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick links */}
                        <div>
                            <h3 className="text-white font-heading font-semibold text-base mb-4 tracking-tight">
                                Explore
                            </h3>
                            <ul className="space-y-2.5">
                                {quickLinks.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            className="text-[0.82rem] text-white/30 hover:text-primary transition-colors duration-200 inline-block"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white font-heading font-semibold text-base mb-4 tracking-tight">
                                Reach Us
                            </h3>
                            <ul className="space-y-3 text-[0.82rem]">
                                <li className="flex items-start gap-2.5 text-white/30">
                                    <MapPin
                                        size={14}
                                        className="text-accent mt-0.5 shrink-0"
                                    />
                                    <span>
                                        Sector 21C, Faridabad,
                                        <br />
                                        Haryana 121001
                                    </span>
                                </li>
                                <li className="flex items-center gap-2.5 text-white/30">
                                    <Phone
                                        size={14}
                                        className="text-accent shrink-0"
                                    />
                                    <span>+91 98765 43210</span>
                                </li>
                                <li className="flex items-center gap-2.5 text-white/30">
                                    <Mail
                                        size={14}
                                        className="text-accent shrink-0"
                                    />
                                    <span>hello@aangancafe.in</span>
                                </li>
                            </ul>
                        </div>

                        {/* Hours */}
                        <div>
                            <h3 className="text-white font-heading font-semibold text-base mb-4 tracking-tight">
                                Hours
                            </h3>
                            <ul className="space-y-3 text-[0.82rem]">
                                <li className="flex items-center gap-2.5">
                                    <Clock
                                        size={14}
                                        className="text-accent shrink-0"
                                    />
                                    <div>
                                        <p className="text-white/50 font-medium">
                                            Mon – Sat
                                        </p>
                                        <p className="text-white/30">
                                            8:00 AM – 10:00 PM
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <Clock
                                        size={14}
                                        className="text-accent shrink-0"
                                    />
                                    <div>
                                        <p className="text-white/50 font-medium">
                                            Sunday
                                        </p>
                                        <p className="text-white/30">
                                            9:00 AM – 11:00 PM
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="relative z-10 border-t border-white/[0.06]">
                    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
                        <p className="text-[0.7rem] text-white/20">
                            © {new Date().getFullYear()} Aangan Café · Made with
                            ❤️ in Faridabad
                        </p>
                        <motion.button
                            onClick={scrollToTop}
                            className="w-8 h-8 rounded-xl
                                bg-white/[0.04] border border-white/[0.08]
                                flex items-center justify-center
                                text-white/30 hover:text-white
                                transition-all duration-300"
                            whileHover={{
                                scale: 1.15,
                                backgroundColor: "rgba(255, 107, 53, 0.15)",
                                borderColor: "rgba(255, 107, 53, 0.3)",
                            }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Back to top"
                        >
                            <ArrowUp size={14} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
