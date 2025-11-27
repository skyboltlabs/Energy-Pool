import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'business';
  schema?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl = 'https://energypool.co.zw', 
  type = 'website',
  schema 
}) => {
  const siteTitle = "Energy Pool | Construction & Waterproofing Experts Zimbabwe";
  const fullTitle = `${title} | Energy Pool`;

  // Default Organization Schema (Global)
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Energy Pool Investments",
    "alternateName": "Energy Pool",
    "url": "https://energypool.co.zw",
    "logo": "https://energypool.co.zw/logo.png",
    "description": "Premier construction and maintenance company in Zimbabwe specializing in waterproofing, epoxy flooring, painting, and civil works.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "752 Lorraine Drive, Bluffhill",
      "addressLocality": "Harare",
      "addressRegion": "Harare",
      "postalCode": "0000",
      "addressCountry": "ZW"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+263-773-109-447",
      "contactType": "sales",
      "areaServed": "ZW",
      "availableLanguage": "English"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/energypool",
      "https://www.instagram.com/energypool"
    ]
  };

  // Merge custom schema with default if provided
  const structuredData = schema ? { ...defaultSchema, ...schema } : defaultSchema;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || "Construction Zimbabwe, Waterproofing Harare, Epoxy Flooring, Roof Repairs, Building Maintenance, Civil Engineering Zimbabwe, Torch-on Waterproofing"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Energy Pool Investments" />
      <meta property="og:image" content="https://picsum.photos/seed/roof_waterproof/1200/630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://picsum.photos/seed/roof_waterproof/1200/630" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};