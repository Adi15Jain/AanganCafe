import { useState, useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import PageMeta from "../components/PageMeta";
import { siteConfig } from "../data/siteData";

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

const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(255,107,53,0.08)] transition-all duration-300";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Build mailto: URL so this frontend-only form actually reaches the café
        const subject = encodeURIComponent(
            formData.subject || `Enquiry from ${formData.name}`,
        );
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
        );
        window.open(
            `mailto:${siteConfig.email}?subject=${subject}&body=${body}`,
            "_blank",
        );
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <>
            <PageMeta
                title="Contact Us"
                description="Reach out to Aangan Café for reservations, events, or just to say hello. Located in Sector 21C, Faridabad. Call, email, or visit us."
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
                        src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&h=800&fit=crop&q=80"
                        alt="Café entrance"
                        className="w-full h-[115%] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,14,19,0.5)] via-[rgba(12,14,19,0.4)] to-[rgba(12,14,19,0.97)]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,14,19,0.5)] to-transparent" />
                </motion.div>

                <div className="absolute bottom-0 right-1/3 w-72 h-36 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

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
                            Sector 21C, Faridabad · Open Today
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
                            {["Get", "in", "Touch"].map((w) => (
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
                            Questions, feedback, or just want to say hello? We'd
                            love to hear from you.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ══════════ CONTACT CONTENT ══════════ */}
            <section className="py-14 sm:py-20 lg:py-28 relative">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/4 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-14">
                        {/* Left — Info sidebar */}
                        <motion.div
                            className="lg:col-span-2 space-y-5"
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <SectionHeading
                                title="Visit Us"
                                subtitle="Your seat at Aangan is always ready."
                                align="left"
                            />

                            {/* Contact info cards — grid on mobile (no horizontal carousel) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                {[
                                    {
                                        icon: MapPin,
                                        title: "Address",
                                        lines: [
                                            "Sector 21C, Near Huda Market",
                                            "Faridabad, Haryana 121001",
                                        ],
                                    },
                                    {
                                        icon: Phone,
                                        title: "Phone",
                                        lines: ["+91 98765 43210"],
                                    },
                                    {
                                        icon: Mail,
                                        title: "Email",
                                        lines: ["hello@aangancafe.in"],
                                    },
                                    {
                                        icon: Clock,
                                        title: "Hours",
                                        lines: [
                                            "Mon–Sat: 8 AM – 10 PM",
                                            "Sunday: 9 AM – 11 PM",
                                        ],
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="glass-card p-4 sm:p-5 flex items-start gap-3 hover:-translate-y-0.5 transition-transform"
                                    >
                                        <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                            <item.icon
                                                size={16}
                                                className="text-primary"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white text-sm mb-0.5">
                                                {item.title}
                                            </h3>
                                            {item.lines.map((line, j) => (
                                                <p
                                                    key={j}
                                                    className="text-xs sm:text-sm text-white/35"
                                                >
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right — Form */}
                        <motion.div
                            className="lg:col-span-3"
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <div className="glass-card p-6 sm:p-8 lg:p-10">
                                <h2 className="font-heading font-semibold text-xl sm:text-2xl text-white mb-1.5">
                                    Send Us a Message
                                </h2>
                                <p className="text-sm text-white/35 mb-7">
                                    Whether it's a catering enquiry, feedback,
                                    or a reservation request — drop us a line.
                                </p>

                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 bg-accent/10 border border-accent/20 text-accent rounded-xl px-5 py-4 text-sm font-medium"
                                    >
                                        ✓ Thank you! We'll get back to you
                                        shortly.
                                    </motion.div>
                                )}

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-white/60 mb-2"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        name: e.target.value,
                                                    })
                                                }
                                                placeholder="e.g. Priya Sharma"
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-white/60 mb-2"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        email: e.target.value,
                                                    })
                                                }
                                                placeholder="priya@example.com"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-white/60 mb-2"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            required
                                            value={formData.subject}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    subject: e.target.value,
                                                })
                                            }
                                            placeholder="Catering enquiry, feedback, etc."
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-white/60 mb-2"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            required
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    message: e.target.value,
                                                })
                                            }
                                            placeholder="Tell us what's on your mind..."
                                            className={`${inputClass} resize-none`}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2.5
                                            bg-gradient-to-r from-primary to-primary-dark
                                            text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl
                                            font-semibold text-sm sm:text-base
                                            shadow-[0_6px_28px_rgba(255,107,53,0.3)]
                                            hover:shadow-[0_8px_40px_rgba(255,107,53,0.45)]
                                            hover:-translate-y-0.5
                                            transition-all duration-300 group"
                                    >
                                        Send Message
                                        <Send
                                            size={16}
                                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                        />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════ MAP SECTION ══════════ */}
            <section className="pb-16 sm:pb-20 relative">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card overflow-hidden"
                    >
                        <div className="p-5 sm:p-6 border-b border-white/[0.06] flex items-center gap-3">
                            <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
                                <MapPin size={16} className="text-primary" />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-base sm:text-lg text-white">
                                    Aangan Café Location
                                </h3>
                                <p className="text-xs sm:text-sm text-white/40">
                                    Sector 21C, Faridabad, Haryana 121001
                                </p>
                            </div>
                        </div>
                        {/* Interactive Google Maps embed */}
                        <div
                            className="relative overflow-hidden"
                            style={{ height: "320px" }}
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
                            {/* Subtle dark overlay at edges for glass frame effect */}
                            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(12,14,19,0.5)]" />
                        </div>
                        {/* Open in app link */}
                        <div className="px-5 py-3 border-t border-white/[0.06] flex items-center justify-between">
                            <p className="text-xs text-white/25">
                                {siteConfig.address.landmark} ·{" "}
                                {siteConfig.address.parking}
                            </p>
                            <a
                                href={siteConfig.address.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline shrink-0"
                            >
                                Open in Maps →
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
