import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import SectionHeading from "../components/SectionHeading";
import PageMeta from "../components/PageMeta";
import { team, milestones, coreValues } from "../data/siteData";

/* Animation variants — logic, not content — live here intentionally */
const wordFlip = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};
const wordItem = {
    hidden: { opacity: 0, y: 40, rotateX: 80 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
};

export default function About() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <>
            <PageMeta
                title="Our Story"
                description="Learn how Aangan Café was founded in 2020 with 5 tables and a dream — today serving 50,000+ happy patrons in Faridabad with heritage Indian recipes and warm hospitality."
            />
            {/* ══════════ HERO ══════════ */}
            <section
                ref={heroRef}
                className="relative min-h-[60svh] sm:min-h-[65svh] flex items-center justify-center overflow-hidden pt-16"
            >
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: heroImgY }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=800&fit=crop&q=80"
                        alt="Café ambiance"
                        className="w-full h-[115%] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,14,19,0.5)] via-[rgba(12,14,19,0.4)] to-[rgba(12,14,19,0.97)]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,14,19,0.5)] to-transparent" />
                </motion.div>

                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center py-14 sm:py-20">
                    {/* 3D scale entrance for the whole hero block */}
                    <motion.div
                        initial={{ scale: 0.94, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5
                                bg-white/[0.07] backdrop-blur-xl border border-white/[0.1] text-accent/80 text-xs sm:text-sm tracking-wide"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Est. 2020 · Faridabad, Haryana
                        </motion.div>
                        <motion.h1
                            variants={wordFlip}
                            initial="hidden"
                            animate="visible"
                            className="font-heading font-bold text-white
                                text-[clamp(2.2rem,7vw,4.5rem)]
                                leading-tight tracking-tight mb-4"
                            style={{ perspective: "800px" }}
                        >
                            {["Our", "Story"].map((w) => (
                                <motion.span
                                    key={w}
                                    variants={wordItem}
                                    className="inline-block mr-[0.25em]"
                                >
                                    {w}
                                </motion.span>
                            ))}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.6 }}
                            className="text-white/40 text-base sm:text-lg max-w-md mx-auto leading-relaxed"
                        >
                            How a courtyard dream became Faridabad's favourite
                            corner of warmth.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ══════════ BRAND STORY ══════════ */}
            <section className="py-16 sm:py-24 lg:py-28 relative">
                <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/4 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <SectionHeading
                                title="Born in a Courtyard"
                                subtitle="From a family kitchen to your neighbourhood café."
                                align="left"
                            />
                            <div className="space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
                                <p>
                                    Aangan began with a nostalgic memory: the
                                    smell of freshly brewed cardamom chai and
                                    the comfort of slow-cooked meals shared with
                                    family in our ancestral courtyard.
                                </p>
                                <p>
                                    We realized that in the rush of modern life,
                                    what people craved wasn't just good food,
                                    but a place to pause. A sanctuary where time
                                    slows down, conversations flow, and every
                                    bite feels like returning home.
                                </p>
                                <p>
                                    What started as a modest 5-table setup has
                                    today blossomed into a beloved community
                                    space — yet our philosophy remains
                                    unchanged: honest ingredients, heritage
                                    recipes, and unmistakable warmth.
                                </p>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="glass p-4 sm:p-5 rounded-2xl border-primary/20 bg-primary/5">
                                    <h4 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
                                        5+ Years
                                    </h4>
                                    <p className="text-xs sm:text-sm text-white/40 font-medium">
                                        Of Serving Love
                                    </p>
                                </div>
                                <div className="glass p-4 sm:p-5 rounded-2xl border-accent/20 bg-accent/5">
                                    <h4 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
                                        50k+
                                    </h4>
                                    <p className="text-xs sm:text-sm text-white/40 font-medium">
                                        Happy Patrons
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.4)]">
                                <img
                                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=500&fit=crop"
                                    alt="Cosy café interior"
                                    className="w-full h-64 sm:h-[28rem] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,14,19,0.4)] to-transparent" />
                            </div>
                            <div
                                className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-4
                                bg-white/[0.07] backdrop-blur-2xl
                                border border-white/[0.12]
                                px-5 py-3 sm:px-7 sm:py-5 rounded-xl sm:rounded-2xl
                                shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
                            >
                                <p className="font-heading font-bold text-base sm:text-lg text-white/60">
                                    12 seats →
                                </p>
                                <p className="font-heading font-bold text-xl sm:text-2xl text-gradient">
                                    60+ family
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════ MILESTONE TIMELINE ══════════ */}
            <section className="relative py-16 sm:py-24 overflow-hidden">
                <div className="absolute inset-y-0 left-1/2 sm:left-1/3 lg:left-1/2 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent -translate-x-1/2 pointer-events-none" />
                <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/4 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeading
                        title="Our Journey"
                        subtitle="Five years. One courtyard. Countless memories."
                    />

                    <div className="relative mt-10 sm:mt-14 space-y-0">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={m.year}
                                initial={{
                                    opacity: 0,
                                    x: i % 2 === 0 ? -24 : 24,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{
                                    delay: 0.05,
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className={`relative flex gap-5 sm:gap-8 pb-8 sm:pb-12 last:pb-0 ${
                                    i % 2 === 0
                                        ? "sm:flex-row"
                                        : "sm:flex-row-reverse sm:text-right"
                                }`}
                            >
                                {/* Timeline dot + year */}
                                <div className="flex flex-col items-center shrink-0">
                                    <div
                                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 ${m.bg} border border-white/[0.06]`}
                                    >
                                        <m.icon size={18} className={m.color} />
                                    </div>
                                    {i < milestones.length - 1 && (
                                        <div className="w-px flex-1 mt-3 bg-gradient-to-b from-white/[0.08] to-transparent" />
                                    )}
                                </div>

                                {/* Content */}
                                <div
                                    className={`glass-card p-5 sm:p-6 mb-8 sm:mb-0 flex-1 max-w-md ${
                                        i % 2 !== 0 ? "sm:mr-auto" : "sm:ml-0"
                                    }`}
                                >
                                    <span
                                        className={`text-xs font-bold tracking-widest uppercase ${m.color} mb-2 block`}
                                    >
                                        {m.year}
                                    </span>
                                    <h3 className="font-heading font-semibold text-base sm:text-lg text-white mb-2">
                                        {m.title}
                                    </h3>
                                    <p className="text-sm text-white/40 leading-relaxed">
                                        {m.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ CORE VALUES ══════════ */}
            <section className="relative py-16 sm:py-24 lg:py-28">
                <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeading
                        title="Our Pillars"
                        subtitle="The uncompromising principles that guide every dish we plate and every cup we pour."
                    />

                    {/* Responsive grid — data from siteData.coreValues */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mt-10 sm:mt-14">
                        {coreValues.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ delay: i * 0.12, duration: 0.7 }}
                                className="glass-card p-6 sm:p-8 text-center group"
                            >
                                <div
                                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-5
                                    ${value.bg}
                                    group-hover:scale-110 transition-transform duration-500`}
                                >
                                    <value.icon
                                        size={24}
                                        className={value.color}
                                    />
                                </div>
                                <h3 className="font-heading font-semibold text-lg sm:text-xl text-white mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-white/35 leading-relaxed">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ TEAM ══════════ */}
            <section className="pb-20 sm:pb-28 relative">
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeading
                        title="The Aangan Family"
                        subtitle="The people behind the warmth — small team, big heart."
                    />
                    {/* grid — no carousel */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ delay: i * 0.12, duration: 0.7 }}
                                className="text-center group"
                            >
                                <div
                                    className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-5 rounded-full overflow-hidden
                                    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                                    border-2 border-white/[0.08]
                                    group-hover:border-primary/30 transition-all duration-500"
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,14,19,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <h3 className="font-heading font-semibold text-lg sm:text-xl text-white">
                                    {member.name}
                                </h3>
                                <p className="text-primary/80 font-medium text-xs sm:text-sm mt-1.5">
                                    {member.role}
                                </p>
                                <p className="text-xs sm:text-sm text-white/30 mt-3 leading-relaxed max-w-xs mx-auto">
                                    {member.bio}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-14">
                        <Link
                            to="/menu"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                        >
                            Explore our menu <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
