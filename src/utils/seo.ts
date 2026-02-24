// ============================================
// SEO UTILITIES — Clérigo Poker
// Schema.org, Open Graph, meta generation
// ============================================

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  type?: 'website' | 'article';
  pubDate?: Date;
  updatedDate?: Date;
  author?: string;
  noindex?: boolean;
  tags?: string[];
}

const SITE = {
  name: 'Clérigo Poker',
  url: 'https://clerigopoker.com',
  defaultImage: '/images/og-default.avif',
  defaultDescription: 'El portal de póker en español donde la estrategia es religión. Guías, psicología y noticias para devotos del green felt.',
  twitterHandle: '@clerigopoker',
  locale: 'es_ES',
  language: 'es',
};

/**
 * Genera el título completo con el formato del sitio
 */
export function formatTitle(pageTitle?: string): string {
  if (!pageTitle) return `${SITE.name} — Donde la Estrategia es Religión`;
  return `${pageTitle} | ${SITE.name}`;
}

/**
 * Genera la URL canónica
 */
export function getCanonical(path: string): string {
  // Asegurar que termina sin trailing slash para consistencia
  const cleanPath = path.replace(/\/$/, '') || '/';
  return `${SITE.url}${cleanPath}`;
}

/**
 * Genera la URL absoluta de una imagen
 */
export function getImageURL(src: string): string {
  if (src.startsWith('http')) return src;
  return `${SITE.url}${src}`;
}

/**
 * Genera el Schema.org JSON-LD para la página web (WebSite)
 */
export function getWebSiteSchema(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.defaultDescription,
    inLanguage: SITE.language,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/buscar?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  });
}

/**
 * Genera el Schema.org JSON-LD para un artículo
 */
export function getArticleSchema(props: {
  title: string;
  description: string;
  url: string;
  image?: string;
  pubDate: Date;
  updatedDate?: Date;
  author?: string;
  schemaType?: string;
}): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': props.schemaType || 'Article',
    headline: props.title,
    description: props.description,
    url: props.url,
    image: props.image ? getImageURL(props.image) : getImageURL(SITE.defaultImage),
    datePublished: props.pubDate.toISOString(),
    dateModified: (props.updatedDate || props.pubDate).toISOString(),
    author: {
      '@type': 'Person',
      name: props.author || 'El Clérigo',
      url: `${SITE.url}/sobre`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/images/logo.avif`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': props.url,
    },
    inLanguage: SITE.language,
  });
}

/**
 * Genera Schema.org BreadcrumbList
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE.url}${item.url}`,
    })),
  });
}

/**
 * Estima el tiempo de lectura de un texto
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200; // español promedio
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export { SITE };
