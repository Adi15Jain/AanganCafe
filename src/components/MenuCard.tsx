import type { MenuItem } from "../data/menuData";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";

const tagColors: Record<string, string> = {
    V: "bg-green-500/15 text-green-400 border border-green-500/20",
    VE: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
    GF: "bg-amber-500/15 text-amber-400 border border-amber-500/20",
};

const tagLabels: Record<string, string> = {
    V: "Vegetarian",
    VE: "Vegan",
    GF: "Gluten-Free",
};

interface MenuCardProps {
    item: MenuItem;
    compact?: boolean;
}

export default function MenuCard({ item, compact = false }: MenuCardProps) {
    // Check if device is mobile to disable 3D tilt for performance/ux
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <Tilt
            tiltEnable={!isMobile}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={!isMobile}
            glareMaxOpacity={0.15}
            glareColor="#ffffff"
            glarePosition="all"
            scale={isMobile ? 1 : 1.02}
            transitionSpeed={1000}
            className="h-full"
        >
            <div className="group glass-card overflow-hidden cursor-default h-full flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_rgba(255,107,53,0.12)] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500">
                {/* Image */}
                <div
                    className={`relative overflow-hidden shrink-0 ${compact ? "h-36 sm:h-40" : "h-44 sm:h-48"}`}
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,14,19,0.6)] via-transparent to-transparent" />
                    {/* Price badge — glassmorphic */}
                    <div
                        className="absolute top-3 right-3
                    bg-white/[0.1] backdrop-blur-xl
                    border border-white/[0.15]
                    text-white px-3.5 py-1.5
                    rounded-full text-sm font-bold
                    shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
                    >
                        ₹{item.price}
                    </div>
                </div>

                {/* Content Body - Very dense layout */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <h3 className="font-heading font-semibold text-[1.1rem] sm:text-lg text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                        {item.name}
                    </h3>
                    <p className="text-[0.8rem] sm:text-sm text-white/40 mt-1.5 leading-snug line-clamp-2 max-w-[95%]">
                        {item.description}
                    </p>

                    {/* Spacer to push tags to bottom if cards stretch */}
                    <div className="flex-1" />

                    {/* Tags */}
                    {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/[0.04]">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    title={tagLabels[tag]}
                                    className={`text-[0.65rem] font-semibold px-2.5 py-0.5 rounded-full ${tagColors[tag]}`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Tilt>
    );
}
