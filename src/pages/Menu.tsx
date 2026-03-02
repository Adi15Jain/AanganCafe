import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import MenuCard from "../components/MenuCard";
import { menuData } from "../data/menuData";

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState(menuData[0].slug);
    const currentCategory =
        menuData.find((cat) => cat.slug === activeCategory) || menuData[0];

    return (
        <>
            <div className="min-h-[100svh] bg-transparent snap-y snap-mandatory overflow-y-scroll">
                {/* ============ HERO — 100svh ============ */}
                <section className="relative h-[100svh] min-h-[100svh] snap-start flex flex-col justify-center pb-safe-bottom overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=800&fit=crop&q=80"
                            alt="Food spread"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,14,19,0.5)] via-[rgba(12,14,19,0.4)] to-[rgba(12,14,19,0.95)]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,14,19,0.5)] to-transparent" />
                    </div>

                    {/* Ambient glow */}
                    <div className="absolute bottom-0 left-1/3 w-96 h-48 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4"
                        >
                            Our Menu
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-white/40 text-lg max-w-xl mx-auto"
                        >
                            Honest food, heritage recipes, and a whole lot of
                            love on every plate.
                        </motion.p>
                    </div>
                </section>

                {/* ============ MENU CATEGORIES — 100svh (Scrollable content) ============ */}
                <section className="relative h-[100svh] min-h-[100svh] snap-start flex flex-col justify-start pt-24 pb-safe-bottom overflow-hidden">
                    {/* Ambient glow */}
                    <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

                    {/* Scrollable inner wrapper for long menus inside constraints */}
                    <div className="flex-1 overflow-y-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scrollbar-hide">
                        {/* Glassmorphic tabs */}
                        <div className="flex flex-wrap justify-center gap-3 mb-14">
                            {menuData.map((cat) => (
                                <button
                                    key={cat.slug}
                                    onClick={() => setActiveCategory(cat.slug)}
                                    className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
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

                        {/* Menu grid */}
                        {/* ============ MENU CATEGORIES ============ */}
                        {menuData.map((category) => {
                            const isActive = activeCategory === category.slug;

                            return (
                                <motion.section
                                    key={category.slug}
                                    id={category.slug}
                                    className={`py-16 sm:py-24 relative transition-opacity duration-500 ${
                                        isActive ? "opacity-100" : "hidden"
                                    }`}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{
                                        opacity: isActive ? 1 : 0,
                                        y: 0,
                                    }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                                        {/* Decorative glowing gradient line on the left to anchor sections */}
                                        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 hidden lg:block" />

                                        <div className="lg:pl-12">
                                            <div className="mb-10 sm:mb-14">
                                                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
                                                    {category.name}
                                                </h2>
                                                {category.description && (
                                                    <p className="text-white/40 max-w-2xl text-[0.95rem] sm:text-base leading-relaxed">
                                                        {category.description}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                                {category.items.map(
                                                    (item, itemIndex) => (
                                                        <motion.div
                                                            key={item.id}
                                                            initial={{
                                                                opacity: 0,
                                                                y: 24,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    itemIndex *
                                                                    0.08,
                                                                duration: 0.5,
                                                            }}
                                                        >
                                                            <MenuCard
                                                                item={item}
                                                            />
                                                        </motion.div>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.section>
                            );
                        })}

                        {/* Dietary legend — glassmorphic */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mt-16 glass-card p-7 sm:p-8 max-w-2xl mx-auto"
                        >
                            <h3 className="font-heading font-semibold text-lg text-white mb-5 text-center">
                                Dietary Guide
                            </h3>
                            <div className="flex flex-wrap justify-center gap-5 sm:gap-8 text-sm">
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
                                        className="flex items-center gap-2.5"
                                    >
                                        <span
                                            className={`text-xs font-bold px-3 py-1 rounded-full ${color}`}
                                        >
                                            {tag}
                                        </span>
                                        <span className="text-white/40">
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}
