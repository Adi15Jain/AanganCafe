export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    tags: ("V" | "VE" | "GF")[];
    image: string;
    featured?: boolean;
    badge?: string; // e.g. "Chef's Pick", "New", "Bestseller"
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
                    "Flattened rice tempered with mustard seeds, curry leaves, peanuts & fresh lime. A quintessential morning staple.",
                price: 129,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop",
            },
            {
                id: 2,
                name: "Aloo Paratha",
                description:
                    "Hand-rolled whole wheat flatbread stuffed with spiced potatoes, served with thick curd & house pickle.",
                price: 149,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop",
                featured: true,
                badge: "Bestseller",
            },
            {
                id: 3,
                name: "Idli Sambar",
                description:
                    "Steamed rice cakes with piping hot lentil sambar & two chutneys — a South Indian morning ritual.",
                price: 119,
                tags: ["V", "VE", "GF"],
                image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",
            },
            {
                id: 4,
                name: "Bread Omelette",
                description:
                    "Fluffy egg omelette with diced onions, green chillies & coriander, served on buttered toasted bread.",
                price: 139,
                tags: [],
                image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop",
            },
            {
                id: 22,
                name: "Upma Special",
                description:
                    "Semolina cooked with ghee, mustard seeds, crisp cashews, green peas & ginger — light and filling.",
                price: 109,
                tags: ["V", "VE"],
                image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
            },
            {
                id: 23,
                name: "Masala Dosa",
                description:
                    "Crisp rice-lentil crepe filled with spiced potato & served with sambar and three house chutneys.",
                price: 169,
                tags: ["V", "VE", "GF"],
                image: "https://images.unsplash.com/photo-1630409351217-0d1dc59a1b3b?w=400&h=300&fit=crop",
                badge: "Chef's Pick",
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
                    "Our signature spiced tea simmered with cardamom, ginger, clove & a hint of saffron. A cup of belonging.",
                price: 79,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop",
                featured: true,
                badge: "Signature",
            },
            {
                id: 6,
                name: "Filter Coffee",
                description:
                    "South Indian–style decoction coffee served in a traditional dabarah-tumbler set — dark, intense, and soulful.",
                price: 99,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400&h=300&fit=crop",
            },
            {
                id: 7,
                name: "Kulhad Cappuccino",
                description:
                    "Velvety espresso with steamed milk served in a hand-thrown clay kulhad — earthy, rich, and rustic.",
                price: 139,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop",
                badge: "New",
            },
            {
                id: 8,
                name: "Rose Sharbat",
                description:
                    "Chilled rose-syrup drink with swollen basil seeds (sabja) and a squeeze of lemon — a Mughal-era classic.",
                price: 89,
                tags: ["V", "VE", "GF"],
                image: "https://images.unsplash.com/photo-1544252890-c3e95e867fa1?w=400&h=300&fit=crop",
            },
            {
                id: 20,
                name: "Saffron Latte",
                description:
                    "Rich espresso & velvety steamed milk infused with pure Kashmiri saffron — warm gold in a cup.",
                price: 159,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=400&h=300&fit=crop",
                featured: true,
                badge: "Chef's Pick",
            },
            {
                id: 24,
                name: "Adrak Tulsi Brew",
                description:
                    "Caffeine-free herbal infusion of fresh ginger, holy basil & honey — immunity in every sip.",
                price: 89,
                tags: ["V", "VE", "GF"],
                image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
            },
            {
                id: 25,
                name: "Cold Brew Nimbu",
                description:
                    "18-hour cold-brewed coffee with squeezed nimbu, roasted cumin & black salt — refreshingly bold.",
                price: 149,
                tags: ["V", "VE", "GF"],
                image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
                badge: "New",
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
                    "Slow-cooked kidney beans in a rich onion-tomato gravy, ladled over long-grain steamed basmati with a knob of ghee.",
                price: 199,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
            },
            {
                id: 10,
                name: "Paneer Tikka Wrap",
                description:
                    "Chargrilled cottage cheese cubes marinated in hung curd & spices, rolled in soft rumali roti with mint chutney.",
                price: 219,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
            },
            {
                id: 11,
                name: "Chole Bhature",
                description:
                    "Robust spiced chickpea masala with giant fluffy deep-fried bread — the king of North Indian street food.",
                price: 189,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&h=300&fit=crop",
                badge: "Bestseller",
            },
            {
                id: 12,
                name: "Aangan Thali",
                description:
                    "A complete, rotating seasonal thali — dal, two sabzis, raita, roti, basmati rice, papad & a dessert of the day.",
                price: 299,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
                badge: "Chef's Pick",
            },
            {
                id: 21,
                name: "Butter Chicken Roll",
                description:
                    "Tandoor-smoked chicken morsels tossed in makhani sauce, wrapped in a warm flaky paratha with sliced onions.",
                price: 249,
                tags: [],
                image: "https://images.unsplash.com/photo-1644336021648-9333ce672d54?w=400&h=300&fit=crop",
                featured: true,
                badge: "Bestseller",
            },
            {
                id: 26,
                name: "Dal Makhani",
                description:
                    "Whole black lentils slow-simmered for 12 hours with butter & cream — the dish that made us famous.",
                price: 229,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
                badge: "Signature",
            },
            {
                id: 27,
                name: "Keema Samosa",
                description:
                    "Flaky pastry pockets filled with slow-spiced minced lamb & onions, served with tamarind-date chutney.",
                price: 179,
                tags: ["GF"],
                image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8ad7?w=400&h=300&fit=crop",
            },
        ],
    },
    {
        name: "Light Bites",
        slug: "light-bites",
        description: "Small plates and snacks — perfect for sharing, or not.",
        items: [
            {
                id: 28,
                name: "Dahi Puri",
                description:
                    "Crisp mini puris filled with spiced potatoes, whisked yoghurt, sev & three chutneys — an explosion of textures.",
                price: 129,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1606491048802-8342506d6471?w=400&h=300&fit=crop",
                badge: "Staff Favourite",
            },
            {
                id: 29,
                name: "Samosa Basket",
                description:
                    "3 classic potato & pea samosas with a tamarind dip and green chilli chutney — forever a comfort snack.",
                price: 109,
                tags: ["V", "VE"],
                image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8ad7?w=400&h=300&fit=crop",
            },
            {
                id: 30,
                name: "Vada Pav",
                description:
                    "Spiced potato fritter nestled in a soft Mumbai pav, with dry garlic chutney — the city's soul in a bun.",
                price: 89,
                tags: ["V", "VE"],
                image: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=400&h=300&fit=crop",
                badge: "Bestseller",
            },
            {
                id: 31,
                name: "Chaat Platter",
                description:
                    "A generous board of aloo tikki, dahi bhalla & papdi chaat — the perfect sharing platter.",
                price: 229,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1606491048802-8342506d6471?w=400&h=300&fit=crop",
            },
            {
                id: 32,
                name: "Paneer Pakora",
                description:
                    "Soft paneer cubes in a spiced chickpea batter, fried golden — served with mint-coriander chutney.",
                price: 159,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1548340748-6af5f0f37e66?w=400&h=300&fit=crop",
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
                    "Soft khoya dumplings soaked overnight in rose-cardamom sugar syrup. Served warm with a pistachio crumble.",
                price: 109,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1666190070113-b6a3181ef5b2?w=400&h=300&fit=crop",
                badge: "Classic",
            },
            {
                id: 14,
                name: "Mango Kulfi",
                description:
                    "Traditional Indian ice cream with Alphonso mango pulp, set in a clay matka. Topped with falooda strands.",
                price: 99,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop",
            },
            {
                id: 15,
                name: "Jalebi with Rabri",
                description:
                    "Crispy saffron spirals dipped in thickened sweetened milk — a festival on a plate.",
                price: 129,
                tags: ["V"],
                image: "https://images.unsplash.com/photo-1601303516150-6d2fa3e47823?w=400&h=300&fit=crop",
            },
            {
                id: 16,
                name: "Masala Chai Crème Brûlée",
                description:
                    "Our award-winning fusion — silky French custard infused with chai masala, torched caramel top.",
                price: 169,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=400&h=300&fit=crop",
                badge: "Signature",
            },
            {
                id: 33,
                name: "Gajar Halwa",
                description:
                    "Slow-cooked carrot pudding with khoya, ghee, green cardamom & decorated with blanched almonds. Served warm.",
                price: 119,
                tags: ["V", "GF"],
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
            },
        ],
    },
];

export const featuredItems = menuData
    .flatMap((cat) => cat.items)
    .filter((item) => item.featured);
