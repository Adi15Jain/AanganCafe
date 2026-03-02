import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

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
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <>
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&h=800&fit=crop&q=80"
                        alt="Café entrance"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,14,19,0.5)] via-[rgba(12,14,19,0.4)] to-[rgba(12,14,19,0.95)]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,14,19,0.5)] to-transparent" />
                </div>

                <div className="absolute bottom-0 right-1/3 w-96 h-48 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-white/40 text-lg max-w-xl mx-auto"
                    >
                        Questions, feedback, or just want to say hello? We'd
                        love to hear from you.
                    </motion.p>
                </div>
            </section>

            {/* Contact info + form */}
            <section className="py-20 sm:py-28 relative snap-start">
                <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/4 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                        {/* Left — Info */}
                        <motion.div
                            className="lg:col-span-2 space-y-6"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <SectionHeading
                                title="Visit Us"
                                subtitle="Your seat at Aangan is always ready."
                                align="left"
                            />

                            {/* Contact cards — glassmorphic */}
                            <div className="space-y-4">
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
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-4 glass-card p-5"
                                    >
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                            <item.icon
                                                size={18}
                                                className="text-primary"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white text-sm">
                                                {item.title}
                                            </h3>
                                            {item.lines.map((line, j) => (
                                                <p
                                                    key={j}
                                                    className="text-sm text-white/35"
                                                >
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Hours — glassmorphic */}
                            <div className="glass-card p-6">
                                <div className="flex items-center gap-2.5 mb-4">
                                    <Clock size={18} className="text-accent" />
                                    <h3 className="font-semibold text-white">
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
                                                <td className="py-3 text-white/60 font-medium">
                                                    {row.day}
                                                </td>
                                                <td className="py-3 text-white/35 text-right">
                                                    {row.time}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Right — Form */}
                        <motion.div
                            className="lg:col-span-3"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <div className="glass-card p-7 sm:p-10">
                                <h2 className="font-heading font-semibold text-2xl text-white mb-2">
                                    Send Us a Message
                                </h2>
                                <p className="text-sm text-white/35 mb-8">
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
                                    <div className="grid sm:grid-cols-2 gap-5">
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
                                                className="w-full px-4 py-3.5 rounded-xl
                                                    bg-white/[0.03] border border-white/[0.08]
                                                    text-white text-sm
                                                    placeholder:text-white/20
                                                    focus:outline-none focus:border-primary/40 focus:bg-white/[0.05]
                                                    focus:shadow-[0_0_20px_rgba(255,107,53,0.08)]
                                                    transition-all duration-300"
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
                                                className="w-full px-4 py-3.5 rounded-xl
                                                    bg-white/[0.03] border border-white/[0.08]
                                                    text-white text-sm
                                                    placeholder:text-white/20
                                                    focus:outline-none focus:border-primary/40 focus:bg-white/[0.05]
                                                    focus:shadow-[0_0_20px_rgba(255,107,53,0.08)]
                                                    transition-all duration-300"
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
                                            className="w-full px-4 py-3.5 rounded-xl
                                                bg-white/[0.03] border border-white/[0.08]
                                                text-white text-sm
                                                placeholder:text-white/20
                                                focus:outline-none focus:border-primary/40 focus:bg-white/[0.05]
                                                focus:shadow-[0_0_20px_rgba(255,107,53,0.08)]
                                                transition-all duration-300"
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
                                            className="w-full px-4 py-3.5 rounded-xl
                                                bg-white/[0.03] border border-white/[0.08]
                                                text-white text-sm
                                                placeholder:text-white/20
                                                focus:outline-none focus:border-primary/40 focus:bg-white/[0.05]
                                                focus:shadow-[0_0_20px_rgba(255,107,53,0.08)]
                                                transition-all duration-300 resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2.5
                                            bg-gradient-to-r from-primary to-primary-dark
                                            text-white px-8 py-4 rounded-xl
                                            font-semibold
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

            {/* Map placeholder — 100svh */}
            <section className="relative h-[100svh] min-h-[100svh] snap-start flex flex-col justify-center pb-safe-bottom overflow-hidden border-t border-white/[0.06]">
                <div className="text-center">
                    <MapPin
                        size={40}
                        className="text-primary mx-auto mb-3 opacity-25"
                    />
                    <p className="text-white/25 text-sm mb-2">
                        Interactive map coming soon
                    </p>
                    <a
                        href="https://maps.google.com/?q=Sector+21C+Faridabad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium text-sm hover:underline"
                    >
                        Open in Google Maps →
                    </a>
                </div>
            </section>
        </>
    );
}
