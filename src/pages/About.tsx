import { Heart, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion";
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

export default function About() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=800&fit=crop&q=80"
                        alt="Café ambiance"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,14,19,0.5)] via-[rgba(12,14,19,0.4)] to-[rgba(12,14,19,0.95)]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,14,19,0.5)] to-transparent" />
                </div>

                <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-white/40 text-lg max-w-xl mx-auto"
                    >
                        How a courtyard dream became Faridabad's favourite
                        corner of warmth.
                    </motion.p>
                </div>
            </section>

            {/* Brand story */}
            <section className="py-24 sm:py-32 relative">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/4 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
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
                            <div className="space-y-5 sm:space-y-6 text-white/50 text-[0.95rem] sm:text-base leading-relaxed">
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
                                    space. Yet, our philosophy remains
                                    unchanged: honest ingredients, heritage
                                    recipes, and the unmistakable warmth of
                                    Indian hospitality.
                                </p>
                            </div>

                            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-6">
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

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.4)]">
                                <img
                                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=500&fit=crop"
                                    alt="Cosy café interior"
                                    className="w-full h-80 sm:h-[28rem] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,14,19,0.4)] to-transparent" />
                            </div>
                            {/* Floating glassmorphic badge */}
                            <div
                                className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6
                                bg-white/[0.06] backdrop-blur-2xl
                                border border-white/[0.12]
                                px-7 py-5 rounded-2xl
                                shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
                            >
                                <p className="font-heading font-bold text-lg text-white/60">
                                    12 seats →
                                </p>
                                <p className="font-heading font-bold text-2xl text-gradient">
                                    60+ family
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ============ CORE VALUES ============ */}
            <section className="relative h-[100svh] min-h-[100svh] snap-start flex flex-col justify-center pb-safe-bottom">
                {/* Accent glow orb */}
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeading
                        title="Our Pillars"
                        subtitle="The uncompromising principles that guide every dish we plate and every cup we pour."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
                        {[
                            {
                                icon: Heart, // Changed from Award
                                title: "Heritage First",
                                color: "text-primary",
                                bg: "bg-primary/10",
                                desc: "Our recipes aren't just instructions; they are heirlooms passed down through generations, preserved and celebrated.",
                            },
                            {
                                icon: Leaf, // Changed from HeartPulse
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
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ delay: i * 0.12, duration: 0.7 }}
                                className="glass-card p-8 text-center group"
                            >
                                <div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6
                                    ${value.bg}
                                    group-hover:scale-110 transition-transform duration-500`}
                                >
                                    <value.icon
                                        size={28}
                                        className={`${value.color}`}
                                    />
                                </div>
                                <h3 className="font-heading font-semibold text-xl text-white mb-3">
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

            {/* Team */}
            <section className="py-24 sm:py-32 relative">
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeading
                        title="The Aangan Family"
                        subtitle="The people behind the warmth — small team, big heart."
                    />
                    <div className="grid sm:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ delay: i * 0.12, duration: 0.7 }}
                                className="text-center group"
                            >
                                <div
                                    className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden
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
                                <h3 className="font-heading font-semibold text-xl text-white">
                                    {member.name}
                                </h3>
                                <p className="text-primary/80 font-medium text-sm mt-1.5">
                                    {member.role}
                                </p>
                                <p className="text-sm text-white/30 mt-3 leading-relaxed max-w-xs mx-auto">
                                    {member.bio}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
