import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import MenuCard from "../components/MenuCard";
import { menuData } from "../data/menuData";

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

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState(menuData[0].slug);
    const currentCategory =
        menuData.find((cat) => cat.slug === activeCategory) || menuData[0];

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
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=800&fit=crop&q=80"
                        alt="Food spread"
                        className="w-full h-[115%] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,14,19,0.5)] via-[rgba(12,14,19,0.4)] to-[rgba(12,14,19,0.97)]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,14,19,0.5)] to-transparent" />
                </motion.div>

                <div className="absolute bottom-0 left-1/3 w-72 h-36 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center py-14 sm:py-20">
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
                            Heritage Recipes · Seasonal Ingredients
                        </motion.div>
                        <motion.h1
                            variants={wordFlip}
                            initial="hidden"
                            animate="visible"
                            style={{ perspective: "800px" }}
                            className="font-heading font-bold text-white
                                text-[clamp(2.2rem,7vw,4.5rem)]
                                leading-tight tracking-tight mb-4"
                        >
                            {["Our", "Menu"].map((w) => (
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
                            Honest food, heritage recipes, and a whole lot of
                            love on every plate.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ══════════ MENU CONTENT ══════════ */}
            <section className="py-14 sm:py-20 relative">
                <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Category tabs */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
                        {menuData.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => setActiveCategory(cat.slug)}
                                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                    activeCategory === cat.slug
                                        ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-[0_4px_20px_rgba(255,107,53,0.3)]"
                                        : "bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] text-white/50 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06]"
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Category heading */}
                    <SectionHeading
                        title={currentCategory.name}
                        subtitle={currentCategory.description}
                    />

                    {/* Menu items */}
                    {menuData.map((category) => {
                        const isActive = activeCategory === category.slug;
                        if (!isActive) return null;

                        return (
                            <motion.div
                                key={category.slug}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-6"
                            >
                                {category.items.map((item, idx) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: idx * 0.07,
                                            duration: 0.45,
                                        }}
                                    >
                                        <MenuCard item={item} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        );
                    })}

                    {/* Dietary legend */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-14 sm:mt-20 glass-card p-6 sm:p-8 max-w-2xl mx-auto"
                    >
                        <h3 className="font-heading font-semibold text-base sm:text-lg text-white mb-5 text-center">
                            Dietary Guide
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
                            {[
                                {
                                    tag: "V",
                                    label: "Vegetarian",
                                    color: "bg-green-500/15 text-green-400 border border-green-500/20",
                                },
                                {
                                    tag: "VE",
                                    label: "Vegan",
                                    color: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
                                },
                                {
                                    tag: "GF",
                                    label: "Gluten-Free",
                                    color: "bg-amber-500/15 text-amber-400 border border-amber-500/20",
                                },
                            ].map(({ tag, label, color }) => (
                                <div
                                    key={tag}
                                    className="flex items-center gap-2"
                                >
                                    <span
                                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${color}`}
                                    >
                                        {tag}
                                    </span>
                                    <span className="text-white/40 text-sm">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
