import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  schema?: Record<string, any>;
  type?: 'website' | 'article' | 'business';
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = [], 
  image = 'https://picsum.photos/seed/energy_pool_social/1200/630', 
  url = window.location.href,
  schema,
  type = 'website'
}) => {
  const siteTitle = `${title} | Energy Pool Zimbabwe`;
  const defaultKeywords = [
    "Construction Zimbabwe", 
    "Waterproofing Harare", 
    "Epoxy Flooring", 
    "Building Maintenance", 
    "Roof Repairs", 
    "Torch-on System", 
    "Plumbers Harare", 
    "Energy Pool Investments"
  ];
  
  const allKeywords = [...new Set([...keywords, ...defaultKeywords])].join(', ');

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Energy Pool Investments" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </>
  );
};
