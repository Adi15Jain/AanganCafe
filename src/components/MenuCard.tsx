import type { MenuItem } from "../data/menuData";

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
    return (
        <div className="group glass-card overflow-hidden cursor-default">
            {/* Image */}
            <div
                className={`relative overflow-hidden ${compact ? "h-40" : "h-48 sm:h-52"}`}
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

            {/* Content */}
            <div className="p-5 sm:p-6">
                <h3 className="font-heading font-semibold text-lg text-white group-hover:text-primary transition-colors duration-300">
                    {item.name}
                </h3>
                <p className="text-sm text-white/35 mt-2 leading-relaxed line-clamp-2">
                    {item.description}
                </p>

                {/* Tags */}
                {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
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
    );
}
