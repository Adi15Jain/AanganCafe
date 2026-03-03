import { Heart, Leaf, Users, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import SectionHeading from "../components/SectionHeading";

const team = [
    {
        name: "Amma Ji",
        role: "Head Chef & Soul of the Kitchen",
        bio: "The recipes live in her hands. Three decades of cooking with instinct, love, and an unmatched feel for spice.",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop&crop=face",
    },
    {
        name: "Rohan",
        role: "Founder & Chai Enthusiast",
        bio: "Left his tech job to build a place that felt like home. Still makes the morning chai himself, every single day.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
        name: "Priya",
        role: "Manager & Community Builder",
        bio: `The warmth you feel when you walk in? That's Priya. She knows every regular by name and their order by heart.`,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    },
];

/* ── 3D word-flip helpers ── */
const wordFlip = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};
const wordItem = {
    hidden: { opacity: 0, y: 40, rotateX: 80 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
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

            {/* ══════════ CORE VALUES ══════════ */}
            <section className="relative py-16 sm:py-24 lg:py-28">
                <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeading
                        title="Our Pillars"
                        subtitle="The uncompromising principles that guide every dish we plate and every cup we pour."
                    />

                    {/* Always a proper grid — no carousel */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mt-10 sm:mt-14">
                        {[
                            {
                                icon: Heart,
                                title: "Heritage First",
                                color: "text-primary",
                                bg: "bg-primary/10",
                                desc: "Our recipes aren't just instructions; they are heirlooms passed down through generations, preserved and celebrated.",
                            },
                            {
                                icon: Leaf,
                                title: "Slow & Intentional",
                                color: "text-accent",
                                bg: "bg-accent/10",
                                desc: "No shortcuts. From our 12-hour simmered Dal Makhani to our hand-pounded spices, we believe good things take time.",
                            },
                            {
                                icon: Users,
                                title: "Community Driven",
                                color: "text-highlight",
                                bg: "bg-highlight/10",
                                desc: "We are more than a café; we are a gathering place. A courtyard where strangers become regulars, and regulars become family.",
                            },
                        ].map((value, i) => (
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
