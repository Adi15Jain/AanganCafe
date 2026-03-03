/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  siteData.ts — Single Source of Truth for Aangan Café Website Content
 *
 *  To update ANY text, image, link, or data shown on the website, edit here.
 *  Pages and components only contain layout/rendering logic — no raw strings.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import {
    Star,
    Heart,
    Coffee,
    Award,
    Users,
    Sparkles,
    Leaf,
    MapPin,
    Phone,
    Mail,
    Clock,
    Instagram,
    Facebook,
    type LucideIcon,
} from "lucide-react";

// ──────────────────────────────────────────────────────────────────────────────
//  SITE CONFIG — Global brand settings
// ──────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
    name: "Aangan Café",
    tagline: "Where every sip feels like home",
    shortTagline: "Neighbourhood Courtyard Café · Faridabad",
    description:
        "A nostalgic-modern Indian café in the heart of Faridabad. Heritage flavours, warm hospitality, and the comfort of a courtyard meal — since 2020.",
    foundedYear: "2020",
    address: {
        line1: "Sector 21C, Near Huda Market",
        line2: "Faridabad, Haryana 121001",
        /** Full Google Maps share link — used for the "Open in Google Maps" anchor */
        mapUrl: "https://www.google.com/maps/place/Hudda+Market/@28.4324193,77.3010386,18.98z/data=!4m15!1m8!3m7!1s0x390cddef4e145f65:0xf7977c26d3a257b2!2sSector+21C,+Faridabad,+Haryana+121012!3b1!8m2!3d28.4318699!4d77.2971115!16s%2Fg%2F1tfjjhp7!3m5!1s0x390cdd003bb9ad5b:0x6fbd091a7864f1b0!8m2!3d28.4327884!4d77.3010302!16s%2Fg%2F11xgs2rs9y?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
        /** Coordinate-based embed URL — works without an API key */
        mapEmbed:
            "https://maps.google.com/maps?q=28.4327884,77.3010302&z=18&output=embed",
        landmark: "10 min from Faridabad Railway Station",
        parking: "Ample parking available",
    },
    phone: "+91 98765 43210",
    email: "hello@aangancafe.in",
    copyright: "Made with ❤️ in Faridabad",
};

// ──────────────────────────────────────────────────────────────────────────────
//  NAVIGATION
// ──────────────────────────────────────────────────────────────────────────────

export interface NavLink {
    to: string;
    label: string;
}

export const navLinks: NavLink[] = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "Our Story" },
    { to: "/contact", label: "Contact" },
];

// ──────────────────────────────────────────────────────────────────────────────
//  HERO — Home Page Stats (3-column pills)
// ──────────────────────────────────────────────────────────────────────────────

export interface HeroStat {
    icon: LucideIcon;
    value: string;
    label: string;
    color: string;
    bg: string;
}

export const heroStats: HeroStat[] = [
    {
        icon: Star,
        value: "4.8★",
        label: "Google Rating",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: Heart,
        value: "5+ Yrs",
        label: "Serving Love",
        color: "text-accent",
        bg: "bg-accent/10",
    },
    {
        icon: Coffee,
        value: "30+",
        label: "Menu Items",
        color: "text-highlight",
        bg: "bg-highlight/10",
    },
];

// ──────────────────────────────────────────────────────────────────────────────
//  ACHIEVEMENT BAR — Below Hero
// ──────────────────────────────────────────────────────────────────────────────

export interface Achievement {
    icon: LucideIcon;
    value: string;
    label: string;
    color: string;
}

export const achievements: Achievement[] = [
    {
        icon: Award,
        value: "2023",
        label: "Faridabad's Best Café Award",
        color: "text-highlight",
    },
    {
        icon: Users,
        value: "50,000+",
        label: "Happy Customers Served",
        color: "text-primary",
    },
    {
        icon: Star,
        value: "4.8 / 5",
        label: "Average Google Rating",
        color: "text-accent",
    },
    {
        icon: Sparkles,
        value: "12+",
        label: "Heritage Recipes",
        color: "text-highlight",
    },
];

// ──────────────────────────────────────────────────────────────────────────────
//  TODAY'S SPECIALS — Weekend rotating items
// ──────────────────────────────────────────────────────────────────────────────

export interface TodaySpecial {
    name: string;
    desc: string;
    price: number;
    badge: string;
    color: string; // Tailwind bg-gradient-to-br class fragment
    border: string; // Tailwind border class
}

export const todaySpecials: TodaySpecial[] = [
    {
        name: "Haldi Doodh Panna Cotta",
        desc: "Silky turmeric-infused panna cotta with a cardamom honey glaze & crushed pistachios — a fusion of Italian and Ayurveda.",
        price: 189,
        badge: "Weekend Special",
        color: "from-highlight/20 to-primary/10",
        border: "border-highlight/20",
    },
    {
        name: "Smoky Baingan Bruschetta",
        desc: "Charred aubergine mousse on toasted sourdough with pomegranate seeds & a drizzle of tamarind gastrique.",
        price: 159,
        badge: "Chef's Creation",
        color: "from-accent/15 to-primary/5",
        border: "border-accent/20",
    },
];

// ──────────────────────────────────────────────────────────────────────────────
//  ABOUT SNIPPET — Mini-stats on Home page About section
// ──────────────────────────────────────────────────────────────────────────────

export interface MiniStat {
    icon: LucideIcon;
    value: string;
    label: string;
}

export const aboutMiniStats: MiniStat[] = [
    { icon: Users, value: "50k+", label: "Happy Patrons" },
    { icon: Sparkles, value: "12+", label: "Heritage Recipes" },
    { icon: Star, value: "4.8★", label: "Google Rating" },
    { icon: Heart, value: "0", label: "Compromises Made" },
];

// ──────────────────────────────────────────────────────────────────────────────
//  TESTIMONIALS
// ──────────────────────────────────────────────────────────────────────────────

export interface Testimonial {
    name: string;
    location: string;
    rating: number;
    text: string;
    avatar: string;
    tag: string;
}

export const testimonials: Testimonial[] = [
    {
        name: "Meera Kapoor",
        location: "Faridabad",
        rating: 5,
        text: "Walked in for a chai, left two hours later having had the most incredible thali of my life. Aangan isn't just a café — it's a feeling.",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
        tag: "Regular since 2021",
    },
    {
        name: "Arjun Malhotra",
        location: "South Delhi",
        rating: 5,
        text: "The Saffron Latte is unlike anything I've had anywhere in Delhi. My girlfriend and I drive 45 minutes just for it. Worth every km.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        tag: "Weekend Regular",
    },
    {
        name: "Priya Nair",
        location: "Gurugram",
        rating: 5,
        text: "As someone who grew up in Kerala, the filter coffee here takes me straight home. The masala chai crème brûlée is genius. Please never remove it.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
        tag: "Food Blogger",
    },
    {
        name: "Rohit Sharma",
        location: "Noida",
        rating: 5,
        text: "I've worked from Aangan twice a week for a year. The staff knows my order, the WiFi is reliable, and the Poha Bowl is cheap & incredible. Perfect third space.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
        tag: "Work-from-café regular",
    },
];

export const testimonialsFootnote =
    "Based on 400+ verified Google reviews · Average 4.8 / 5 ★";

// ──────────────────────────────────────────────────────────────────────────────
//  OPENING HOURS
// ──────────────────────────────────────────────────────────────────────────────

export interface OpeningHoursRow {
    day: string;
    time: string;
}

export const openingHours: OpeningHoursRow[] = [
    { day: "Monday – Thursday", time: "8:00 AM – 10:00 PM" },
    { day: "Friday", time: "8:00 AM – 11:00 PM" },
    { day: "Saturday", time: "9:00 AM – 11:30 PM" },
    { day: "Sunday", time: "9:00 AM – 11:00 PM" },
];

export const hoursFootnote =
    "★ Kitchen closes 30 min before closing time. Weekend specials served until they run out.";

/** Compact version used in Footer */
export const footerHours = [
    { label: "Mon – Fri", time: "8:00 AM – 11:00 PM" },
    { label: "Sat", time: "9:00 AM – 11:30 PM" },
    { label: "Sunday", time: "9:00 AM – 11:00 PM" },
];

// ──────────────────────────────────────────────────────────────────────────────
//  TEAM — About page
// ──────────────────────────────────────────────────────────────────────────────

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
}

export const team: TeamMember[] = [
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

// ──────────────────────────────────────────────────────────────────────────────
//  MILESTONE TIMELINE — About page
// ──────────────────────────────────────────────────────────────────────────────

export interface Milestone {
    year: string;
    title: string;
    desc: string;
    icon: LucideIcon;
    color: string;
    bg: string;
}

export const milestones: Milestone[] = [
    {
        year: "2020",
        title: "A Dream in the Courtyard",
        desc: "Opened with just 5 tables, a wood-fired stove, and Amma Ji's family recipes. Sold out on day one and never looked back.",
        icon: Coffee,
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        year: "2021",
        title: "Faridabad Takes Notice",
        desc: "Word spread through Faridabad. By December, we had a waiting list every weekend and expanded seating to 24 covers.",
        icon: Users,
        color: "text-accent",
        bg: "bg-accent/10",
    },
    {
        year: "2022",
        title: "The Heritage Menu Launch",
        desc: "Introduced our rotating Heritage Menu — monthly deep-dives into regional Indian cuisines like Awadhi, Malabar, and Rajasthani.",
        icon: Heart,
        color: "text-highlight",
        bg: "bg-highlight/10",
    },
    {
        year: "2023",
        title: "'Best Café in Faridabad'",
        desc: "Named Faridabad's Best Café by Zomato readers. We framed the certificate, then got back to work making the best chai we could.",
        icon: Award,
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        year: "2024",
        title: "50,000 Happy Patrons",
        desc: "Served our 50,000th customer — a five-year-old girl who ordered the Gulab Jamun for the 12th time. We gave her extra rabri.",
        icon: Star,
        color: "text-accent",
        bg: "bg-accent/10",
    },
];

// ──────────────────────────────────────────────────────────────────────────────
//  CORE VALUES — About page pillars
// ──────────────────────────────────────────────────────────────────────────────

export interface CoreValue {
    icon: LucideIcon;
    title: string;
    desc: string;
    color: string;
    bg: string;
}

export const coreValues: CoreValue[] = [
    {
        icon: Heart,
        title: "Made with Love",
        desc: "Every dish is made fresh to order. We never pre-cook or compromise on quality, even on the busiest Sundays.",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: Leaf,
        title: "Honest Ingredients",
        desc: "Seasonal, locally sourced produce. No artificial flavours, no shortcuts — just ingredients your grandmother would recognise.",
        color: "text-accent",
        bg: "bg-accent/10",
    },
    {
        icon: Users,
        title: "Community First",
        desc: "Aangan is your third place. We host local artists, student nights, and family gatherings. Come as a guest, leave as family.",
        color: "text-highlight",
        bg: "bg-highlight/10",
    },
];

// ──────────────────────────────────────────────────────────────────────────────
//  CONTACT INFO CARDS — Contact page
// ──────────────────────────────────────────────────────────────────────────────

export interface ContactCard {
    icon: LucideIcon;
    title: string;
    lines: string[];
    href?: string;
    hrefLabel?: string;
    color: string;
    bg: string;
}

export const contactCards: ContactCard[] = [
    {
        icon: MapPin,
        title: "Find Us",
        lines: ["Sector 21C, Near Huda Market", "Faridabad, Haryana 121001"],
        href: "https://maps.google.com/?q=Sector+21C+Faridabad",
        hrefLabel: "Get Directions",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: Phone,
        title: "Call Us",
        lines: ["+91 98765 43210"],
        href: "tel:+919876543210",
        hrefLabel: "Call now",
        color: "text-accent",
        bg: "bg-accent/10",
    },
    {
        icon: Mail,
        title: "Email Us",
        lines: ["hello@aangancafe.in"],
        href: "mailto:hello@aangancafe.in",
        hrefLabel: "Send email",
        color: "text-highlight",
        bg: "bg-highlight/10",
    },
    {
        icon: Clock,
        title: "Open Today",
        lines: [
            "Mon–Thu: 8 AM – 10 PM",
            "Fri: 8 AM – 11 PM",
            "Sat: 9 AM – 11:30 PM",
            "Sun: 9 AM – 11 PM",
        ],
        color: "text-primary",
        bg: "bg-primary/10",
    },
];

// ──────────────────────────────────────────────────────────────────────────────
//  FOOTER — Links & Social
// ──────────────────────────────────────────────────────────────────────────────

export interface FooterLink {
    to: string;
    label: string;
}

export const footerQuickLinks: FooterLink[] = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Our Menu" },
    { to: "/about", label: "Our Story" },
    { to: "/contact", label: "Contact" },
];

export interface SocialLink {
    href: string;
    icon: LucideIcon;
    label: string;
}

export const socialLinks: SocialLink[] = [
    {
        href: "https://instagram.com/aangancafe",
        icon: Instagram,
        label: "Instagram",
    },
    {
        href: "https://facebook.com/aangancafe",
        icon: Facebook,
        label: "Facebook",
    },
];
