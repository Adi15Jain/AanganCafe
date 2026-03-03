/**
 * Home.tsx — Layout & render logic only.
 * ALL content (text, data, icons) comes from src/data/siteData.ts & menuData.ts.
 */
import { Link } from "react-router";
import {
    ArrowRight,
    ChevronDown,
    Quote,
    MapPin,
    Coffee,
    Award,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../components/SectionHeading";
import MenuCard from "../components/MenuCard";
import PageMeta from "../components/PageMeta";
import { featuredItems } from "../data/menuData";
import {
    siteConfig,
    heroStats,
    achievements,
    todaySpecials,
    aboutMiniStats,
    testimonials,
    testimonialsFootnote,
    openingHours,
    hoursFootnote,
} from "../data/siteData";

/* ── Animation variants (not content — live here intentionally) ── */
const wordFlip = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};
const wordItem = {
    hidden: { opacity: 0, y: 56, rotateX: 90 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
};
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3 + i * 0.15,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    }),
};

export default function Home() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

    return (
        <>
            <PageMeta />
            {/* ══════════ HERO ══════════ */}
            <section
                ref={heroRef}
                className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-16"
            >
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: heroImgY }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&h=1080&fit=crop&q=80"
                        alt="Warm café interior"
                        className="w-full h-[118%] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,14,19,0.55)] via-[rgba(12,14,19,0.35)] to-[rgba(12,14,19,0.95)]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,14,19,0.65)] via-transparent to-transparent" />
                </motion.div>

                <div className="absolute top-1/4 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />
                <div
                    className="absolute bottom-1/4 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-accent/8 rounded-full blur-[80px] animate-pulse-glow pointer-events-none"
                    style={{ animationDelay: "2s" }}
                />

                <motion.div
                    className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full py-14 sm:py-16"
                    style={{ opacity: heroOpacity }}
                >
                    {/* Pill tag */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5
                            bg-white/[0.07] backdrop-blur-xl border border-white/[0.1]
                            shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                    >
                        <Coffee size={13} className="text-accent shrink-0" />
                        <span className="text-accent/90 text-xs sm:text-sm font-medium tracking-wide">
                            {siteConfig.shortTagline}
                        </span>
                    </motion.div>

                    {/* 3D word-flip headline */}
                    <motion.h1
                        variants={wordFlip}
                        initial="hidden"
                        animate="visible"
                        className="font-heading font-bold text-white leading-[1.08] tracking-tight
                            text-[clamp(2.5rem,8.5vw,5.5rem)] mb-6 sm:mb-7 max-w-[14ch]"
                        style={{ perspective: "900px" }}
                    >
                        {["Where", "every", "sip"].map((w) => (
                            <span
                                key={w}
                                className="inline-block overflow-hidden mr-[0.2em]"
                            >
                                <motion.span
                                    variants={wordItem}
                                    className="inline-block"
                                >
                                    {w}
                                </motion.span>
                            </span>
                        ))}
                        <br />
                        {["feels", "like"].map((w) => (
                            <span
                                key={w}
                                className="inline-block overflow-hidden mr-[0.2em]"
                            >
                                <motion.span
                                    variants={wordItem}
                                    className="inline-block text-gradient italic"
                                >
                                    {w}
                                </motion.span>
                            </span>
                        ))}
                        <span className="inline-block overflow-hidden">
                            <motion.span
                                variants={wordItem}
                                className="inline-block"
                                style={{ color: "var(--color-primary)" }}
                            >
                                home
                            </motion.span>
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="text-base sm:text-lg text-white/50 leading-relaxed max-w-[44ch] mb-8 sm:mb-10"
                    >
                        {siteConfig.description}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14"
                    >
                        <Link
                            to="/menu"
                            className="inline-flex items-center gap-2.5
                                bg-gradient-to-r from-primary to-primary-dark
                                text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl
                                font-semibold text-sm sm:text-[0.95rem]
                                shadow-[0_6px_28px_rgba(255,107,53,0.38)]
                                hover:shadow-[0_10px_40px_rgba(255,107,53,0.52)]
                                hover:-translate-y-0.5 active:scale-95
                                transition-all duration-400 group"
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
                                px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl font-semibold text-sm sm:text-[0.95rem]
                                bg-white/[0.04] backdrop-blur-xl
                                hover:bg-white/[0.09] hover:border-white/[0.28] hover:text-white
                                active:scale-95 transition-all duration-300"
                        >
                            Our Story
                        </Link>
                    </motion.div>

                    {/* Hero stats — compact 3-col pills from siteData */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={3}
                        className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-[340px] sm:max-w-[440px]"
                    >
                        {heroStats.map((stat) => (
                            <div
                                key={stat.label}
                                className="flex flex-col items-center text-center gap-1.5
                                    px-2 py-3 sm:px-4 sm:py-4 rounded-xl sm:rounded-2xl
                                    bg-white/[0.05] backdrop-blur-2xl border border-white/[0.08]"
                            >
                                <div
                                    className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 ${stat.bg}`}
                                >
                                    <stat.icon
                                        size={14}
                                        className={stat.color}
                                    />
                                </div>
                                <p className="text-white font-bold text-sm sm:text-base leading-none tracking-tight">
                                    {stat.value}
                                </p>
                                <p className="text-white/40 text-[0.58rem] sm:text-xs tracking-wide leading-tight">
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
                        transition={{ delay: 2.2, duration: 0.8 }}
                        className="flex flex-col items-center gap-1.5"
                    >
                        <span className="text-[0.58rem] text-white/30 tracking-[0.22em] uppercase">
                            Scroll
                        </span>
                        <ChevronDown
                            size={15}
                            className="text-white/30 animate-scroll-bounce"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ══════════ ACHIEVEMENT BAR ══════════ */}
            <div className="relative overflow-hidden border-y border-white/[0.06] py-4 sm:py-5 bg-white/[0.015]">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-0">
                        {achievements.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <item.icon
                                    size={16}
                                    className={`${item.color} shrink-0`}
                                />
                                <div>
                                    <span className="text-white font-bold text-sm sm:text-base">
                                        {item.value}
                                    </span>
                                    <span className="text-white/35 text-xs sm:text-sm ml-2">
                                        {item.label}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ══════════ TODAY'S SPECIALS ══════════ */}
            <section className="relative py-12 sm:py-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-highlight/6 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="flex items-center gap-3 mb-2 justify-center"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <Award size={16} className="text-highlight" />
                        <span className="text-highlight text-xs sm:text-sm font-semibold tracking-widest uppercase">
                            Today Only
                        </span>
                    </motion.div>
                    <SectionHeading
                        title="Chef's Weekend Specials"
                        subtitle="Two limited creations crafted fresh each weekend — only while tables last."
                    />

                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mt-8 sm:mt-10">
                        {todaySpecials.map((special, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ delay: i * 0.15, duration: 0.75 }}
                                className={`relative overflow-hidden glass-card p-6 sm:p-8 bg-gradient-to-br ${special.color} border ${special.border}`}
                            >
                                <span className="absolute top-4 right-4 text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.08] text-white/60 border border-white/[0.1]">
                                    {special.badge}
                                </span>
                                <h3 className="font-heading font-semibold text-lg sm:text-xl text-white mb-2 pr-24">
                                    {special.name}
                                </h3>
                                <p className="text-sm text-white/45 leading-relaxed mb-5">
                                    {special.desc}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-white font-heading">
                                        ₹{special.price}
                                    </span>
                                    <Link
                                        to="/contact"
                                        className="text-sm font-semibold text-primary hover:text-primary-light transition-colors duration-200 flex items-center gap-1.5 group"
                                    >
                                        Reserve a table
                                        <ArrowRight
                                            size={14}
                                            className="group-hover:translate-x-1 transition-transform duration-300"
                                        />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ ABOUT SNIPPET ══════════ */}
            <section className="relative py-12 sm:py-16 lg:py-28">
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                        {/* Image */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.9,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                                <img
                                    src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=700&h=550&fit=crop"
                                    alt="Café courtyard with guests"
                                    className="w-full h-64 sm:h-[26rem] lg:h-[30rem] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,14,19,0.45)] to-transparent" />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4
                                    bg-white/[0.07] backdrop-blur-2xl border border-white/[0.12]
                                    px-5 py-3 sm:px-7 sm:py-5 rounded-xl sm:rounded-2xl
                                    shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
                            >
                                <p className="font-heading font-bold text-sm sm:text-lg text-white/60">
                                    Since
                                </p>
                                <p className="font-heading font-bold text-2xl sm:text-3xl text-gradient">
                                    {siteConfig.foundedYear}
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.55, duration: 0.6 }}
                                className="absolute -top-3 -left-2 sm:-top-4 sm:-left-4
                                    bg-highlight/15 backdrop-blur-xl border border-highlight/25
                                    px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl
                                    shadow-[0_4px_24px_rgba(251,191,36,0.2)]"
                            >
                                <div className="flex items-center gap-2">
                                    <Award
                                        size={14}
                                        className="text-highlight"
                                    />
                                    <p className="text-highlight text-xs font-bold">
                                        Best Café 2023
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.9,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="mt-6 lg:mt-0"
                        >
                            <SectionHeading
                                title="The Aangan Way"
                                subtitle="More than a café — a place where you always belong."
                                align="left"
                            />
                            <div className="space-y-4 text-sm sm:text-base text-white/45 leading-relaxed mb-6">
                                <p>
                                    Aangan was born from a simple belief: the
                                    best food is the kind that reminds you of
                                    home. Our courtyard café brings together the
                                    warmth of a family kitchen, the aromas of
                                    heritage recipes, and the charm of a modern
                                    neighbourhood hangout.
                                </p>
                                <p>
                                    Every dish is prepared fresh with seasonal
                                    ingredients, time-honoured techniques, and
                                    the kind of love you'd find in your
                                    grandmother's kitchen.
                                </p>
                            </div>

                            {/* Mini stats from siteData */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-7">
                                {aboutMiniStats.map((item, i) => (
                                    <div
                                        key={i}
                                        className="glass px-4 py-3 rounded-xl border-white/[0.06] flex items-center gap-3"
                                    >
                                        <item.icon
                                            size={14}
                                            className="text-primary/70 shrink-0"
                                        />
                                        <div>
                                            <p className="text-white font-bold text-sm sm:text-base leading-none">
                                                {item.value}
                                            </p>
                                            <p className="text-white/35 text-[0.68rem] sm:text-xs">
                                                {item.label}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

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
            <section className="relative py-12 sm:py-16 lg:py-28">
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeading
                        title="From Our Kitchen"
                        subtitle="Signature favourites loved by our regulars — each made to order, every single time."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8 sm:mt-12">
                        {featuredItems.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.75,
                                    ease: [0.16, 1, 0.3, 1],
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
                                text-white px-8 sm:px-9 py-4 rounded-2xl
                                font-semibold text-sm sm:text-[0.95rem]
                                shadow-[0_6px_28px_rgba(255,107,53,0.3)]
                                hover:shadow-[0_10px_40px_rgba(255,107,53,0.48)]
                                hover:-translate-y-0.5 active:scale-95
                                transition-all duration-400 group"
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

            {/* ══════════ TESTIMONIALS ══════════ */}
            <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
                <div className="absolute top-1/3 -left-24 w-80 h-80 bg-primary/6 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/6 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeading
                        title="What Our Guests Say"
                        subtitle="Stories from the people who made Aangan what it is today."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 sm:mt-14">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.75,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="glass-card p-5 sm:p-6 flex flex-col"
                            >
                                {/* Stars */}
                                <div className="flex gap-0.5 mb-4">
                                    {Array.from({ length: t.rating }).map(
                                        (_, j) => (
                                            <svg
                                                key={j}
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="text-highlight"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ),
                                    )}
                                </div>
                                <div className="relative flex-1">
                                    <Quote
                                        size={18}
                                        className="text-primary/30 mb-2"
                                    />
                                    <p className="text-sm text-white/50 leading-relaxed italic">
                                        "{t.text}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/[0.06]">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-9 h-9 rounded-full object-cover border border-white/[0.1]"
                                        loading="lazy"
                                    />
                                    <div className="min-w-0">
                                        <p className="text-white font-semibold text-sm truncate">
                                            {t.name}
                                        </p>
                                        <p className="text-white/30 text-[0.68rem] truncate">
                                            {t.location}
                                        </p>
                                    </div>
                                    <span className="ml-auto shrink-0 text-[0.55rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary/70 border border-primary/15">
                                        {t.tag}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-center mt-8 sm:mt-10"
                    >
                        <p className="text-white/30 text-sm">
                            {testimonialsFootnote}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ══════════ HOURS + LOCATION ══════════ */}
            <section className="relative py-12 sm:py-16 lg:py-28">
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
                            transition={{ duration: 0.8 }}
                            className="glass-card p-6 sm:p-8"
                        >
                            <h3 className="font-heading font-semibold text-lg sm:text-xl text-white mb-6">
                                Opening Hours
                            </h3>
                            <table className="w-full text-sm">
                                <tbody>
                                    {openingHours.map((row, i) => (
                                        <tr
                                            key={i}
                                            className="border-b border-white/[0.06] last:border-0"
                                        >
                                            <td className="py-3 text-white/65 font-medium">
                                                {row.day}
                                            </td>
                                            <td className="py-3 text-white/35 text-right">
                                                {row.time}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="mt-5 text-xs text-white/25 italic">
                                {hoursFootnote}
                            </p>
                        </motion.div>

                        {/* Map + info */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="glass-card overflow-hidden"
                        >
                            <div className="p-5 sm:p-6 border-b border-white/[0.06]">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 mt-0.5 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin
                                            size={18}
                                            className="text-primary"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-base sm:text-lg text-white">
                                            Find Us
                                        </h3>
                                        <p className="text-sm text-white/40 leading-relaxed mt-0.5">
                                            {siteConfig.address.line1}
                                            <br />
                                            {siteConfig.address.line2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Interactive Google Maps embed */}
                            <div
                                className="relative overflow-hidden"
                                style={{ height: "215px" }}
                            >
                                <iframe
                                    src={siteConfig.address.mapEmbed}
                                    width="100%"
                                    height="100%"
                                    style={{
                                        border: 0,
                                        filter: "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.88)",
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Aangan Café Location Map"
                                    className="w-full h-full"
                                />
                                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(12,14,19,0.5)]" />
                            </div>
                            <div className="px-5 py-3 border-t border-white/[0.06] flex items-center justify-between">
                                <p className="text-xs text-white/25">
                                    {siteConfig.address.landmark}
                                </p>
                                <a
                                    href={siteConfig.address.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline shrink-0"
                                >
                                    Open in Maps <ArrowRight size={11} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════ CTA BANNER ══════════ */}
            <section className="relative py-12 sm:py-16 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/18 via-transparent to-accent/10" />
                <div className="absolute inset-0 bg-[rgba(12,14,19,0.6)]" />
                <div className="absolute top-0 left-1/3 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-primary/15 rounded-full blur-[160px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-accent/10 rounded-full blur-[130px] pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        <p className="text-accent/70 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
                            — A seat always waiting —
                        </p>
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-5">
                            Come for the chai,{" "}
                            <span className="text-gradient italic">
                                stay for the warmth
                            </span>
                        </h2>
                        <p className="text-white/40 text-base sm:text-lg mb-9 max-w-[42ch] mx-auto leading-relaxed">
                            Whether it's a quick cutting chai or a slow Sunday
                            thali — your table is always set at{" "}
                            {siteConfig.name}.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2.5
                                    bg-gradient-to-r from-primary to-primary-dark
                                    text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl
                                    font-bold text-sm sm:text-base
                                    shadow-[0_6px_28px_rgba(255,107,53,0.35)]
                                    hover:shadow-[0_10px_40px_rgba(255,107,53,0.5)]
                                    hover:-translate-y-1 active:scale-95 transition-all duration-400"
                            >
                                Make a Reservation
                            </Link>
                            <Link
                                to="/menu"
                                className="inline-flex items-center gap-2.5
                                    bg-white/[0.07] backdrop-blur-xl border border-white/[0.15]
                                    text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl
                                    font-bold text-sm sm:text-base
                                    hover:bg-white/[0.12] hover:border-white/[0.25]
                                    transition-all duration-300"
                            >
                                Browse Menu
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
