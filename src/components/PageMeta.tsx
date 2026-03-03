/**
 * PageMeta — Drop-in SEO head manager.
 * Wraps react-helmet-async to set <title>, <meta description>, and Open Graph
 * tags per page. Import and place inside any page component.
 *
 * Usage:
 *   <PageMeta
 *     title="Our Menu"
 *     description="Explore heritage Indian recipes…"
 *   />
 */
import { Helmet } from "react-helmet-async";
import { siteConfig } from "../data/siteData";

interface PageMetaProps {
    /** Page-specific title. Appended with " | Aangan Café" */
    title?: string;
    /** Page-specific description (max ~155 chars for Google) */
    description?: string;
    /** Canonical URL for this page (optional) */
    canonical?: string;
    /** OG image URL (defaults to site hero image) */
    ogImage?: string;
}

const DEFAULT_OG_IMAGE =
    "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&h=630&fit=crop&q=80";

export default function PageMeta({
    title,
    description = siteConfig.description,
    canonical,
    ogImage = DEFAULT_OG_IMAGE,
}: PageMetaProps) {
    const fullTitle = title
        ? `${title} | ${siteConfig.name}`
        : `${siteConfig.name} — ${siteConfig.tagline}`;

    return (
        <Helmet>
            {/* Primary */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            {canonical && <meta property="og:url" content={canonical} />}
            <meta property="og:site_name" content={siteConfig.name} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Extra */}
            <meta name="theme-color" content="#ff6b35" />
        </Helmet>
    );
}
