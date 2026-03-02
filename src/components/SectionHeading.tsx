interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    light?: boolean;
    align?: "left" | "center";
}

export default function SectionHeading({
    title,
    subtitle,
    light: _light = false,
    align = "center",
}: SectionHeadingProps) {
    return (
        <div
            className={`mb-12 sm:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
        >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white">
                {title}
            </h2>
            {/* Gradient accent line */}
            <div
                className={`mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-primary to-accent ${
                    align === "center" ? "mx-auto" : ""
                }`}
            />
            {subtitle && (
                <p
                    className={`mt-5 text-base sm:text-lg max-w-2xl leading-relaxed ${
                        align === "center" ? "mx-auto" : ""
                    } text-white/40`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
