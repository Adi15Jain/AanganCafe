import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CanvasBackground from "./components/CanvasBackground";

/* Scroll to top on every route change */
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, [pathname]);
    return null;
}

/* Animated page wrapper */
const pageTransition = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
};

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                {...pageTransition}
                className="relative w-full"
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </motion.div>
        </AnimatePresence>
    );
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            {/* Root: no height constraint, natural scroll, overflow-x locked */}
            <div className="w-full min-h-screen relative overflow-x-hidden">
                <CanvasBackground />
                <Navbar />
                <main className="relative">
                    <AnimatedRoutes />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
