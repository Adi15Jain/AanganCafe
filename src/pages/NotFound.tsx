/**
 * NotFound (404) — Branded error page for invalid routes.
 * Shown whenever the user navigates to a URL that doesn't match any route.
 */
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Coffee } from "lucide-react";
import PageMeta from "../components/PageMeta";

export default function NotFound() {
    return (
        <>
            <PageMeta
                title="Page Not Found"
                description="Oops — this page doesn't exist. Head back to Aangan Café's home page."
            />

            <section className="min-h-screen flex flex-col items-center justify-center px-5 relative overflow-hidden">
                {/* Ambient blobs */}
                <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

                <motion.div
                    className="relative z-10 text-center max-w-md"
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Icon */}
                    <motion.div
                        className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <Coffee size={32} className="text-primary" />
                    </motion.div>

                    {/* 404 number */}
                    <motion.p
                        className="text-[5rem] sm:text-[7rem] font-heading font-bold leading-none text-gradient mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        404
                    </motion.p>

                    <h1 className="font-heading font-semibold text-xl sm:text-2xl text-white mb-3">
                        This page wandered off
                    </h1>
                    <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-8">
                        Looks like this table doesn't exist. The chai is still
                        warm back at the main café though.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2.5
                                bg-gradient-to-r from-primary to-primary-dark
                                text-white px-7 py-3.5 rounded-2xl
                                font-semibold text-sm
                                shadow-[0_6px_28px_rgba(255,107,53,0.35)]
                                hover:shadow-[0_10px_40px_rgba(255,107,53,0.5)]
                                hover:-translate-y-0.5 active:scale-95
                                transition-all duration-300"
                        >
                            <Home size={16} />
                            Back to Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center justify-center gap-2.5
                                border border-white/[0.12] text-white/70
                                px-7 py-3.5 rounded-2xl font-semibold text-sm
                                bg-white/[0.04] backdrop-blur-xl
                                hover:bg-white/[0.08] hover:border-white/[0.22] hover:text-white
                                active:scale-95 transition-all duration-300"
                        >
                            <ArrowLeft size={16} />
                            Go Back
                        </button>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
