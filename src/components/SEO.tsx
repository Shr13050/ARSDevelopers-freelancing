import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO = ({
  title = "ARS Developers | Premium Plots & Properties in Rajasthan & UP",
  description = "ARS Developers - Your trusted real estate partner. Buy premium residential plots near Khatu Shyam Temple, Barsana & more. RERA approved projects with world-class amenities.",
  keywords = "ARS Developers, plots in Khatu Shyam, residential plots Sikar, Barsana plots, property near Khatu Shyam Temple",
  image = "https://www.arsdevelopers.co.in/fav2.jpg",
  url = "https://www.arsdevelopers.co.in/",
  type = "website",
  structuredData,
}: SEOProps) => {
  const fullTitle = title.includes("ARS Developers") ? title : `${title} | ARS Developers`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ARS Developers" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

