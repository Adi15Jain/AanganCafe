export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    tags: ("V" | "VE" | "GF")[];
    image: string;
    featured?: boolean;
}

export interface MenuCategory {
    name: string;
    slug: string;
    description: string;
    items: MenuItem[];
}

export const menuData: MenuCategory[] = [
    {
        name: "Breakfast",
        slug: "breakfast",
        description:
            "Start your morning the desi way — warm, wholesome, and full of love.",
        items: [
            {
                id: 1,
                name: "Poha Bowl",
                description:
                    "Flattened rice tempered with mustard seeds, curry leaves, peanuts & fresh lime.",
                price: 129,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop",
                featured: true,
            },
            {
                id: 2,
                name: "Aloo Paratha",
                description:
                    "Hand-rolled whole wheat flatbread stuffed with spiced potatoes, served with curd & pickle.",
                price: 149,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop",
            },
            {
                id: 3,
                name: "Idli Sambar",
                description:
                    "Steamed rice cakes with piping hot lentil sambar & coconut chutney.",
                price: 119,
                tags: ["V", "VE", "GF"],
                image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",
            },
            {
                id: 4,
                name: "Bread Omelette",
                description:
                    "Fluffy egg omelette with onions & green chillies, served on buttered toast.",
                price: 139,
                tags: [],
                image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop",
            },
        ],
    },
    {
        name: "Chai & Coffee",
        slug: "chai-coffee",
        description:
            "Sip on our signature brews — each cup crafted with patience and soul.",
        items: [
            {
                id: 5,
                name: "Aangan Masala Chai",
                description:
                    "Our signature spiced tea with cardamom, ginger & a hint of saffron.",
                price: 79,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop",
                featured: true,
            },
            {
                id: 6,
                name: "Filter Coffee",
                description:
                    "South Indian–style decoction coffee served in a traditional dabarah set.",
                price: 99,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400&h=300&fit=crop",
            },
            {
                id: 7,
                name: "Kulhad Cappuccino",
                description:
                    "Creamy cappuccino served in an earthen kulhad for that rustic touch.",
                price: 139,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop",
            },
            {
                id: 8,
                name: "Rose Sharbat",
                description:
                    "Chilled rose-syrup drink with basil seeds — a refreshing Mughal classic.",
                price: 89,
                tags: ["V", "VE", "GF"],
                image: "https://images.unsplash.com/photo-1544252890-c3e95e867fa1?w=400&h=300&fit=crop",
            },
        ],
    },
    {
        name: "Mains",
        slug: "mains",
        description:
            "Hearty plates that bring the comfort of ghar ka khana to your table.",
        items: [
            {
                id: 9,
                name: "Rajma Chawal",
                description:
                    "Slow-cooked kidney beans in a rich tomato gravy, served over steamed basmati.",
                price: 199,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
                featured: true,
            },
            {
                id: 10,
                name: "Paneer Tikka Wrap",
                description:
                    "Chargrilled paneer with mint chutney, onions & peppers in a soft rumali roti.",
                price: 219,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
            },
            {
                id: 11,
                name: "Chole Bhature",
                description:
                    "Spiced chickpea curry with fluffy deep-fried bread — a North Indian favourite.",
                price: 189,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&h=300&fit=crop",
            },
            {
                id: 12,
                name: "Thali Plate",
                description:
                    "A complete meal — dal, sabzi, raita, roti, rice, papad & a sweet treat.",
                price: 279,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
            },
        ],
    },
    {
        name: "Desserts",
        slug: "desserts",
        description:
            "End on a sweet note — mithai made with love, just like Nani used to make.",
        items: [
            {
                id: 13,
                name: "Gulab Jamun",
                description:
                    "Soft milk-solid dumplings soaked in rose-cardamom sugar syrup. Served warm.",
                price: 109,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1666190070113-b6a3181ef5b2?w=400&h=300&fit=crop",
                featured: true,
            },
            {
                id: 14,
                name: "Mango Kulfi",
                description:
                    "Traditional Indian ice cream infused with Alphonso mango, set in a matka.",
                price: 99,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop",
            },
            {
                id: 15,
                name: "Jalebi with Rabri",
                description:
                    "Crispy saffron spirals served with thickened sweetened milk.",
                price: 129,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1601303516150-6d2fa3e47823?w=400&h=300&fit=crop",
            },
            {
                id: 16,
                name: "Masala Chai Crème Brûlée",
                description:
                    "Our signature fusion — classic French custard meets Indian masala chai.",
                price: 169,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=400&h=300&fit=crop",
            },
        ],
    },
];

export const featuredItems = menuData
    .flatMap((cat) => cat.items)
    .filter((item) => item.featured);
