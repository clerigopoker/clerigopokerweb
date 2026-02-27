/**
 * banners.ts — Control Central de Banners WPT Global
 * =====================================================
 * INSTRUCCIONES:
 * 1. Cuando cambie una promoción, reemplaza el HTML dentro de cada tamaño.
 * 2. NO toques nada más. Los cambios se propagan automáticamente a todo el sitio.
 *
 * TAMAÑOS DISPONIBLES:
 *   desktop    → 728×90   (leaderboard — artículos, portada, footer)
 *   mobile     → 300×250  (rectangle   — artículos, portada, footer)
 *   sidebar    → 300×600  (half page   — sidebar futuro)
 */

export const banners = {

  /** 728×90 — Se usa en: artículos (desktop), portada (desktop), footer (desktop) */
  desktop: `
    <a href="https://tracking.wptpartners.com/visit/?bta=35660&nci=13215" Target="_Top"><img border="0" src="https://wptpartners.ck-cdn.com/tn/serve/?cid=501474"  width="728" height="90"></a>
  `,

  /** 300×250 — Se usa en: artículos (mobile), portada (mobile), footer (mobile) */
  mobile: `
    <a href="https://tracking.wptpartners.com/visit/?bta=35660&nci=13207" Target="_Top"><img border="0" src="https://wptpartners.ck-cdn.com/tn/serve/?cid=501476"  width="300" height="250"></a>
  `,

  /** 300×600 — Se usa en: sidebar (futuro) */
  sidebar: `
    <a href="https://tracking.wptpartners.com/visit/?bta=35660&nci=13209" Target="_Top"><img border="0" src="https://wptpartners.ck-cdn.com/tn/serve/?cid=501477"  width="300" height="600"></a>
  `,

};