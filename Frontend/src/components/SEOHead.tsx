import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

const SEOHead = ({ title, description, keywords, image }: SEOHeadProps) => {
  const location = useLocation();
  const currentUrl = `https://prakash-electric.vercel.app/${location.pathname}`;
  const defaultImage = "https://prakash-electric.vercel.app/prakashelectric.png";

  useEffect(() => {
    // Update document title
    document.title = `${title} | Prakash Electric Works Motihari - Electronics Repair Shop Bihar`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'Prakash Electric Works Motihari');

    // Open Graph tags
    updateMetaTag('og:title', `${title} | Prakash Electric Works Motihari`, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image || defaultImage, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'Prakash Electric Works Motihari', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', `${title} | Prakash Electric Works Motihari`, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', image || defaultImage, 'name');

    // Local Business Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Prakash Electric Works Motihari",
      "description": description,
      "url": currentUrl,
      "telephone": "+91-9934900409",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Balua Bazar",
        "addressLocality": "Motihari",
        "addressRegion": "Bihar",
        "postalCode": "845401",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.6449414",
        "longitude": "84.9040381"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "26.6449414",
          "longitude": "84.9040381"
        },
        "geoRadius": "50000"
      },
      "priceRange": "₹₹",
      "image": image || defaultImage,
      "sameAs": [
        // "https://www.facebook.com/Prakash Electric Works motihari",
        // "https://www.instagram.com/Prakash Electric Works motihari"
      ]
    };

    // Update or create JSON-LD script
    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(schemaData);

  }, [title, description, keywords, image, currentUrl]);

  return null;
};

export default SEOHead;
