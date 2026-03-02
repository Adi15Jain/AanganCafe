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

/* Stagger animation helpers */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.7,
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
    const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <>
            {/* ============ HERO — 100svh ============ */}
            <section
                ref={heroRef}
                className="relative h-[100svh] min-h-[100svh] snap-start flex flex-col justify-center pb-safe-bottom overflow-hidden"
            >
                {/* Parallax background */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: heroImgY }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&h=1080&fit=crop&q=80"
                        alt="Warm café interior"
                        className="w-full h-[120%] object-cover"
                    />
                    {/* Multi-layer gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,14,19,0.5)] via-[rgba(12,14,19,0.3)] to-[rgba(12,14,19,0.85)]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,14,19,0.7)] via-transparent to-transparent" />
                </motion.div>

                {/* Ambient glow orbs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
                <div
                    className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/8 rounded-full blur-[100px] animate-pulse-glow pointer-events-none"
                    style={{ animationDelay: "2s" }}
                />

                <motion.div
                    className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-28 lg:pt-0"
                    style={{ opacity: heroOpacity }}
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
                        {/* Left — Text content */}
                        <div className="max-w-xl lg:max-w-[55%] pt-12">
                            {/* Glassmorphic tagline pill */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={0}
                                className="inline-flex items-center gap-2.5 rounded-full px-4 sm:px-5 py-2 mb-3
                                    bg-white/[0.06] backdrop-blur-xl
                                    border border-white/[0.1]
                                    shadow-[0_4px_24px_rgba(0,0,0,0.2)] max-w-full"
                            >
                                <Coffee
                                    size={14}
                                    className="text-accent shrink-0"
                                />
                                <span className="text-accent/90 text-[0.8rem] sm:text-sm font-medium tracking-wide truncate">
                                    Neighbourhood Courtyard Café
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={1}
                                className="text-[2.5rem] sm:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight tracking-tight break-words"
                            >
                                Where every
                                <br className="hidden sm:block" /> sip{" "}
                                <span className="text-gradient italic relative inline-block">
                                    feels like
                                </span>{" "}
                                <br className="hidden sm:block" />
                                <span className="text-gradient-home">home</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={2}
                                className="mt-6 text-lg sm:text-xl text-white/50 leading-relaxed max-w-lg"
                            >
                                A nostalgic-modern Indian café in the heart of
                                Faridabad. Heritage flavours, warm hospitality,
                                and the comfort of a courtyard meal.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={3}
                                className="mt-9 flex flex-wrap gap-4"
                            >
                                <Link
                                    to="/menu"
                                    className="inline-flex items-center gap-2.5
                                        bg-gradient-to-r from-primary to-primary-dark
                                        text-white px-8 py-4 rounded-2xl
                                        font-semibold text-[0.95rem]
                                        shadow-[0_6px_28px_rgba(255,107,53,0.35)]
                                        hover:shadow-[0_8px_40px_rgba(255,107,53,0.5)]
                                        hover:-translate-y-0.5
                                        transition-all duration-300 group"
                                >
                                    Explore Our Menu
                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform duration-300"
                                    />
                                </Link>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2.5
                                        border border-white/[0.15] text-white/80
                                        px-8 py-4 rounded-2xl font-semibold text-[0.95rem]
                                        bg-white/[0.04] backdrop-blur-xl
                                        hover:bg-white/[0.08] hover:border-white/[0.25]
                                        hover:text-white
                                        transition-all duration-300"
                                >
                                    Our Story
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right — Quick stats as vertical/horizontal glassmorphic cards */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={4}
                            className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-4 mt-8 lg:mt-0 w-full lg:w-auto
                                overflow-x-auto sm:overflow-visible pb-2 sm:pb-0
                                snap-x snap-mandatory scrollbar-hide"
                        >
                            {[
                                {
                                    icon: Star,
                                    value: "4.8★",
                                    label: "Google Rating",
                                },
                                {
                                    icon: Heart,
                                    value: "5+",
                                    label: "Years of Love",
                                },
                                {
                                    icon: Coffee,
                                    value: "30+",
                                    label: "Brews & Bites",
                                },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    whileHover={{
                                        scale: 1.04,
                                        borderColor: "rgba(255,255,255,0.15)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 25,
                                    }}
                                    className="flex items-center sm:flex-col sm:items-center sm:text-center gap-4 sm:gap-0
                                        px-4 py-4 lg:px-10 lg:py-6
                                        rounded-2xl
                                        bg-white/[0.05] backdrop-blur-2xl
                                        border border-white/[0.08]
                                        shadow-[0_4px_24px_rgba(0,0,0,0.2)]
                                        cursor-default
                                        w-[calc(100vw-3rem)] sm:w-full max-w-[320px] sm:max-w-none shrink-0 snap-center overflow-hidden"
                                >
                                    <div
                                        className={`shrink-0 w-11 h-11 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center sm:mb-3 ${
                                            i === 0
                                                ? "bg-primary/15"
                                                : i === 1
                                                  ? "bg-accent/15"
                                                  : "bg-highlight/15"
                                        }`}
                                    >
                                        <stat.icon
                                            size={20}
                                            className={
                                                i === 0
                                                    ? "text-primary"
                                                    : i === 1
                                                      ? "text-accent"
                                                      : "text-highlight"
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col sm:items-center gap-0.5 sm:gap-1.5 flex-1 min-w-0">
                                        <p className="text-white font-bold text-[1.35rem] lg:text-2xl leading-none tracking-tight">
                                            {stat.value}
                                        </p>
                                        <p className="text-white/40 text-[0.75rem] lg:text-xs tracking-wide">
                                            {stat.label}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-full text-center pb-safe-bottom pb-4 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-[0.65rem] text-white/30 tracking-[0.2em] uppercase">
                            Swipe or Scroll
                        </span>
                        <ChevronDown
                            size={18}
                            className="text-white/30 animate-scroll-bounce"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ============ ABOUT SNIPPET — 100svh ============ */}
            <section className="relative h-[100svh] min-h-[100svh] snap-start flex flex-col justify-center pb-safe-bottom">
                {/* Ambient glow */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                        {/* Image with glassmorphic badge */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.4)]">
                                <img
                                    src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&h=500&fit=crop"
                                    alt="Café courtyard"
                                    className="w-full h-80 sm:h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,14,19,0.4)] to-transparent" />
                            </div>
                            {/* Floating glassmorphic badge */}
                            <div
                                className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6
                                bg-white/[0.06] backdrop-blur-2xl
                                border border-white/[0.12]
                                px-7 py-5 rounded-2xl
                                shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
                            >
                                <p className="font-heading font-bold text-xl text-white/70">
                                    Since
                                </p>
                                <p className="font-heading font-bold text-3xl text-gradient">
                                    2020
                                </p>
                            </div>
                        </motion.div>

                        {/* Text content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <SectionHeading
                                title="The Aangan Way"
                                subtitle="More than a café — it's an extension of home."
                                align="left"
                            />
                            <p className="text-white/40 leading-relaxed mb-4">
                                Aangan was born from a simple belief: the best
                                food is the kind that reminds you of home. Our
                                courtyard café brings together the warmth of a
                                family kitchen, the aromas of heritage recipes,
                                and the charm of a modern neighbourhood hangout.
                            </p>
                            <p className="text-white/40 leading-relaxed mb-7">
                                Every dish is prepared with seasonal
                                ingredients, time-honoured techniques, and the
                                kind of love you'd find in your grandmother's
                                kitchen.
                            </p>
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                            >
                                Read our full story <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ============ FEATURED MENU — 100svh ============ */}
            <section className="relative h-[100svh] min-h-[100svh] snap-start flex flex-col justify-center pb-safe-bottom">
                {/* Ambient glow */}
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeading
                        title="From Our Kitchen"
                        subtitle="A taste of what's on the table — handpicked favourites loved by our regulars."
                    />
                    {/* Dense responsive grid: 1-col Mobile, 2-col Tablet, 4-col Desktop. No scrolling. */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-5 mt-8 sm:mt-10">
                        {featuredItems.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="w-full"
                            >
                                <MenuCard item={item} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link
                            to="/menu"
                            className="inline-flex items-center gap-2.5
                                bg-gradient-to-r from-primary to-primary-dark
                                text-white px-8 py-4 rounded-2xl
                                font-semibold shadow-[0_6px_28px_rgba(255,107,53,0.3)]
                                hover:shadow-[0_8px_40px_rgba(255,107,53,0.45)]
                                hover:-translate-y-0.5
                                transition-all duration-300 group"
                        >
                            View Full Menu
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============ HOURS + LOCATION — 100svh ============ */}
            <section className="relative h-[100svh] min-h-[100svh] snap-start flex flex-col justify-center pb-safe-bottom">
                <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeading
                        title="Visit Aangan"
                        subtitle="We'd love to have you over. Pull up a chair — the chai is always ready."
                    />
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Hours card — glassmorphic */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="glass-card p-8 sm:p-10"
                        >
                            <div className="flex items-center gap-3 mb-7">
                                <div className="w-11 h-11 bg-accent/10 rounded-2xl flex items-center justify-center">
                                    <Clock size={20} className="text-accent" />
                                </div>
                                <h3 className="font-heading font-semibold text-xl text-white">
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
                                            <td className="py-3.5 text-white/70 font-medium">
                                                {row.day}
                                            </td>
                                            <td className="py-3.5 text-white/40 text-right">
                                                {row.time}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="mt-4 sm:mt-5 text-[0.65rem] sm:text-xs text-white/25 italic">
                                ★ Kitchen closes 30 min before closing time.
                            </p>
                        </motion.div>

                        {/* Map placeholder — glassmorphic */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="glass-card overflow-hidden"
                        >
                            <div className="p-7 flex items-center gap-3 border-b border-white/[0.06]">
                                <div className="w-11 h-11 bg-primary/10 rounded-2xl flex items-center justify-center">
                                    <MapPin
                                        size={20}
                                        className="text-primary"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-lg text-white">
                                        Find Us
                                    </h3>
                                    <p className="text-sm text-white/40">
                                        Sector 21C, Faridabad, Haryana 121001
                                    </p>
                                </div>
                            </div>
                            <div className="h-64 bg-white/[0.02] flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin
                                        size={32}
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

            {/* ============ CTA BANNER — Glassmorphic 100svh ============ */}
            <section className="relative h-[100svh] min-h-[100svh] snap-start flex flex-col justify-center pb-safe-bottom overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
                <div className="absolute inset-0 bg-[rgba(12,14,19,0.7)]" />

                {/* Glow orbs */}
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-[160px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-5"
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
                        className="text-white/40 text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
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
                                bg-white/[0.06] backdrop-blur-xl
                                border border-white/[0.15]
                                text-white px-10 py-5 rounded-2xl
                                font-bold text-lg
                                shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                                hover:bg-white/[0.1] hover:border-white/[0.25]
                                hover:shadow-[0_12px_48px_rgba(255,107,53,0.15)]
                                hover:-translate-y-1
                                transition-all duration-400"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
