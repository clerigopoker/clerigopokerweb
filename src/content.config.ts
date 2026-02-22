// Content Collections Configuration — Astro 5 Content Layer API
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ============================================
// ESQUEMA BASE para artículos
// Reutilizable entre todas las colecciones
// ============================================
const articleSchema = z.object({
  title: z.string(),
  description: z.string().max(160), // SEO meta description
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('El Clérigo'),
  image: z.object({
    src: z.string(),
    alt: z.string(),
    width: z.number().optional(),
    height: z.number().optional(),
  }).optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  // SEO fields
  canonicalURL: z.string().url().optional(),
  noindex: z.boolean().default(false),
  // Schema.org
  schemaType: z.enum(['Article', 'BlogPosting', 'NewsArticle', 'HowTo']).default('Article'),
  // Reading
  readingTime: z.number().optional(), // minutes, auto-calculated
  difficulty: z.enum(['novicio', 'acólito', 'sacerdote', 'obispo']).optional(),
  // CTA personalizado (opcional — si no se pone, usa el default)
  ctaEyebrow: z.string().optional(),
  ctaHeadline: z.string().optional(),
  ctaBody: z.string().optional(),
  ctaCta: z.string().optional(),
});

// ============================================
// COLECCIÓN: Estrategia
// Silo principal de contenido
// ============================================
const estrategia = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/estrategia' }),
  schema: articleSchema.extend({
    category: z.enum(['preflop', 'postflop', 'torneos', 'cash-game']),
    // Campos específicos de estrategia
    gameType: z.enum(['nlhe', 'plo', 'mixed', 'general']).default('nlhe'),
    position: z.enum(['ep', 'mp', 'co', 'btn', 'sb', 'bb', 'general']).optional(),
  }),
});

// ============================================
// COLECCIÓN: Psicología
// Segundo silo de contenido
// ============================================
const psicologia = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/psicologia' }),
  schema: articleSchema.extend({
    category: z.enum(['tilt', 'mindset', 'bankroll-management']),
  }),
});

// ============================================
// COLECCIÓN: Noticias
// Tercer silo — actualidad pokeril
// ============================================
const noticias = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/noticias' }),
  schema: articleSchema.extend({
    source: z.string().optional(), // fuente original si aplica
    eventName: z.string().optional(), // ej: "WSOP 2026"
  }),
});

// ============================================
// COLECCIÓN: Conceptos (Glosario SEO)
// Páginas evergreen de conceptos clave
// ============================================
const conceptos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/conceptos' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    term: z.string(), // El término del glosario
    relatedTerms: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

// ============================================
// EXPORT
// ============================================
export const collections = {
  estrategia,
  psicologia,
  noticias,
  conceptos,
};
