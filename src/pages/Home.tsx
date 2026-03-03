import { Link } from "react-router";
import {
    ArrowRight,
    Clock,
    MapPin,
    Star,
    Heart,
    Coffee,
    ChevronDown,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../components/SectionHeading";
import MenuCard from "../components/MenuCard";
import { featuredItems } from "../data/menuData";

/* ── 3D word-flip stagger helper ── */
const wordFlip = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};
const wordItem = {
    hidden: { opacity: 0, y: 48, rotateX: 90 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
};

function AnimWord({ word, className }: { word: string; className?: string }) {
    return (
        <span
            className={`inline-block overflow-hidden leading-[1.1] ${className ?? ""}`}
            style={{ perspective: 800 }}
        >
            <motion.span variants={wordItem} className="inline-block">
                {word}
            </motion.span>
        </span>
    );
}

/* Stagger fade-up for other elements */
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.12,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    }),
};

export default function Home() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <>
            {/* ══════════ HERO ══════════ */}
            <section
                ref={heroRef}
                className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-16"
            >
                {/* Parallax background */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: heroImgY }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&h=1080&fit=crop&q=80"
                        alt="Warm café interior"
                        className="w-full h-[115%] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,14,19,0.55)] via-[rgba(12,14,19,0.35)] to-[rgba(12,14,19,0.92)]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,14,19,0.65)] via-transparent to-transparent" />
                </motion.div>

                {/* Ambient glow */}
                <div className="absolute top-1/4 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />
                <div
                    className="absolute bottom-1/4 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-accent/8 rounded-full blur-[80px] animate-pulse-glow pointer-events-none"
                    style={{ animationDelay: "2s" }}
                />

                <motion.div
                    className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full py-12 sm:py-16"
                    style={{ opacity: heroOpacity }}
                >
                    {/* Glassmorphic tagline pill */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4
                            bg-white/[0.07] backdrop-blur-xl
                            border border-white/[0.1]
                            shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                    >
                        <Coffee size={13} className="text-accent shrink-0" />
                        <span className="text-accent/90 text-xs sm:text-sm font-medium tracking-wide">
                            Neighbourhood Courtyard Café
                        </span>
                    </motion.div>

                    {/* 3D word-flip headline */}
                    <motion.h1
                        variants={wordFlip}
                        initial="hidden"
                        animate="visible"
                        className="font-heading font-bold text-white leading-tight tracking-tight
                            text-[clamp(2.4rem,8vw,5rem)]
                            mb-5 sm:mb-6 max-w-2xl"
                    >
                        <AnimWord word="Where" /> <AnimWord word="every" />{" "}
                        <AnimWord word="sip" className="text-white" />
                        <br />
                        <AnimWord
                            word="feels"
                            className="text-gradient italic"
                        />{" "}
                        <AnimWord
                            word="like"
                            className="text-gradient italic"
                        />{" "}
                        <AnimWord word="home" className="text-gradient-home" />
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="text-base sm:text-lg text-white/50 leading-relaxed max-w-md mb-8 sm:mb-10"
                    >
                        A nostalgic-modern Indian café in the heart of
                        Faridabad. Heritage flavours, warm hospitality, and the
                        comfort of a courtyard meal.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14"
                    >
                        <Link
                            to="/menu"
                            className="inline-flex items-center gap-2
                                bg-gradient-to-r from-primary to-primary-dark
                                text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl
                                font-semibold text-sm sm:text-[0.95rem]
                                shadow-[0_6px_28px_rgba(255,107,53,0.35)]
                                hover:shadow-[0_8px_40px_rgba(255,107,53,0.5)]
                                hover:-translate-y-0.5
                                transition-all duration-300 group"
                        >
                            Explore Our Menu
                            <ArrowRight
                                size={17}
                                className="group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </Link>
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2
                                border border-white/[0.15] text-white/80
                                px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold text-sm sm:text-[0.95rem]
                                bg-white/[0.04] backdrop-blur-xl
                                hover:bg-white/[0.08] hover:border-white/[0.25]
                                hover:text-white
                                transition-all duration-300"
                        >
                            Our Story
                        </Link>
                    </motion.div>

                    {/* Stats — 3 horizontal pills on mobile, grid on sm+ */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={3}
                        className="grid grid-cols-3 gap-2 sm:gap-4 max-w-sm sm:max-w-lg"
                    >
                        {[
                            {
                                icon: Star,
                                value: "4.8★",
                                label: "Google Rating",
                                color: "text-primary",
                                bg: "bg-primary/10",
                            },
                            {
                                icon: Heart,
                                value: "5+",
                                label: "Years of Love",
                                color: "text-accent",
                                bg: "bg-accent/10",
                            },
                            {
                                icon: Coffee,
                                value: "30+",
                                label: "Brews & Bites",
                                color: "text-highlight",
                                bg: "bg-highlight/10",
                            },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="flex flex-col items-center text-center gap-1.5
                                    px-2 py-3 sm:px-4 sm:py-4
                                    rounded-xl sm:rounded-2xl
                                    bg-white/[0.05] backdrop-blur-2xl
                                    border border-white/[0.08]"
                            >
                                <div
                                    className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center ${stat.bg}`}
                                >
                                    <stat.icon
                                        size={14}
                                        className={stat.color}
                                    />
                                </div>
                                <p className="text-white font-bold text-sm sm:text-base leading-none tracking-tight">
                                    {stat.value}
                                </p>
                                <p className="text-white/40 text-[0.6rem] sm:text-xs tracking-wide leading-tight">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                        className="flex flex-col items-center gap-1.5"
                    >
                        <span className="text-[0.6rem] text-white/30 tracking-[0.2em] uppercase">
                            Scroll
                        </span>
                        <ChevronDown
                            size={16}
                            className="text-white/30 animate-scroll-bounce"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ══════════ ABOUT SNIPPET ══════════ */}
            <section className="relative py-16 sm:py-24 lg:py-28">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                        {/* Image */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.4)]">
                                <img
                                    src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&h=500&fit=crop"
                                    alt="Café courtyard"
                                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,14,19,0.4)] to-transparent" />
                            </div>
                            {/* Floating badge */}
                            <div
                                className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4
                                bg-white/[0.07] backdrop-blur-2xl
                                border border-white/[0.12]
                                px-5 py-3 sm:px-7 sm:py-5 rounded-xl sm:rounded-2xl
                                shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
                            >
                                <p className="font-heading font-bold text-base sm:text-xl text-white/70">
                                    Since
                                </p>
                                <p className="font-heading font-bold text-2xl sm:text-3xl text-gradient">
                                    2020
                                </p>
                            </div>
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-6 lg:mt-0"
                        >
                            <SectionHeading
                                title="The Aangan Way"
                                subtitle="More than a café — it's an extension of home."
                                align="left"
                            />
                            <p className="text-white/40 leading-relaxed mb-4 text-sm sm:text-base">
                                Aangan was born from a simple belief: the best
                                food is the kind that reminds you of home. Our
                                courtyard café brings together the warmth of a
                                family kitchen, the aromas of heritage recipes,
                                and the charm of a modern neighbourhood hangout.
                            </p>
                            <p className="text-white/40 leading-relaxed mb-7 text-sm sm:text-base">
                                Every dish is prepared with seasonal
                                ingredients, time-honoured techniques, and the
                                kind of love you'd find in your grandmother's
                                kitchen.
                            </p>
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 text-sm sm:text-base"
                            >
                                Read our full story <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════ FEATURED MENU ══════════ */}
            <section className="relative py-16 sm:py-24 lg:py-28">
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeading
                        title="From Our Kitchen"
                        subtitle="A taste of what's on the table — handpicked favourites loved by our regulars."
                    />

                    {/* Mobile: 1-col scroll, md: 2-col, xl: 4-col */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8 sm:mt-12">
                        {featuredItems.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{
                                    delay: i * 0.08,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="w-full"
                            >
                                <MenuCard item={item} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-10 sm:mt-14">
                        <Link
                            to="/menu"
                            className="inline-flex items-center gap-2.5
                                bg-gradient-to-r from-primary to-primary-dark
                                text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl
                                font-semibold text-sm sm:text-[0.95rem]
                                shadow-[0_6px_28px_rgba(255,107,53,0.3)]
                                hover:shadow-[0_8px_40px_rgba(255,107,53,0.45)]
                                hover:-translate-y-0.5
                                transition-all duration-300 group"
                        >
                            View Full Menu
                            <ArrowRight
                                size={17}
                                className="group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══════════ HOURS + LOCATION ══════════ */}
            <section className="relative py-16 sm:py-24 lg:py-28">
                <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeading
                        title="Visit Aangan"
                        subtitle="We'd love to have you over. Pull up a chair — the chai is always ready."
                    />
                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                        {/* Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="glass-card p-6 sm:p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-accent/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
                                    <Clock size={18} className="text-accent" />
                                </div>
                                <h3 className="font-heading font-semibold text-lg sm:text-xl text-white">
                                    Opening Hours
                                </h3>
                            </div>
                            <table className="w-full text-sm">
                                <tbody>
                                    {[
                                        {
                                            day: "Monday – Friday",
                                            time: "8:00 AM – 10:00 PM",
                                        },
                                        {
                                            day: "Saturday",
                                            time: "8:00 AM – 11:00 PM",
                                        },
                                        {
                                            day: "Sunday",
                                            time: "9:00 AM – 11:00 PM",
                                        },
                                    ].map((row, i) => (
                                        <tr
                                            key={i}
                                            className="border-b border-white/[0.06] last:border-0"
                                        >
                                            <td className="py-3 text-white/70 font-medium">
                                                {row.day}
                                            </td>
                                            <td className="py-3 text-white/40 text-right">
                                                {row.time}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="mt-4 text-xs text-white/25 italic">
                                ★ Kitchen closes 30 min before closing time.
                            </p>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="glass-card overflow-hidden"
                        >
                            <div className="p-6 flex items-center gap-3 border-b border-white/[0.06]">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <MapPin
                                        size={18}
                                        className="text-primary"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-base sm:text-lg text-white">
                                        Find Us
                                    </h3>
                                    <p className="text-xs sm:text-sm text-white/40">
                                        Sector 21C, Faridabad, Haryana 121001
                                    </p>
                                </div>
                            </div>
                            <div className="h-48 sm:h-56 bg-white/[0.02] flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin
                                        size={28}
                                        className="text-primary mx-auto mb-3 opacity-30"
                                    />
                                    <p className="text-sm text-white/30">
                                        Interactive map coming soon
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=Sector+21C+Faridabad"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-3 text-sm text-primary font-medium hover:underline"
                                    >
                                        Open in Google Maps →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════ CTA BANNER ══════════ */}
            <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
                <div className="absolute inset-0 bg-[rgba(12,14,19,0.65)]" />
                <div className="absolute top-0 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-primary/15 rounded-full blur-[160px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-5"
                    >
                        Come for the chai,{" "}
                        <span className="text-gradient italic">
                            stay for the warmth
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-white/40 text-base sm:text-xl mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed"
                    >
                        Whether it's a quick cutting chai or a slow Sunday thali
                        — your seat at Aangan is always ready.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2.5
                                bg-white/[0.07] backdrop-blur-xl
                                border border-white/[0.15]
                                text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl
                                font-bold text-base sm:text-lg
                                shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                                hover:bg-white/[0.12] hover:border-white/[0.25]
                                hover:shadow-[0_12px_48px_rgba(255,107,53,0.15)]
                                hover:-translate-y-1
                                transition-all duration-300"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
