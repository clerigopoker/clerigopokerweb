/**
 * banners.ts — Control Central de Banners WPT Global
 * =====================================================
 * INSTRUCCIONES:
 * 1. Cuando cambie una promoción, reemplaza el HTML dentro de cada clave.
 * 2. NO toques nada más. Los cambios se propagan automáticamente a todo el sitio.
 *
 * PROMOCIÓN 1 (desktop / mobile / sidebar)
 *   → Aparece en: portada (entre secciones) y sidebar de artículos
 *
 * PROMOCIÓN 2 (global)
 *   → Aparece en: todas las páginas, justo antes del footer
 */

export const banners = {

  // ── PROMOCIÓN 1 ──────────────────────────────────────────────────

  /** 728×90 — Portada desktop */
  desktop: `
    <a href="https://tracking.wptpartners.com/visit/?bta=35660&nci=13215" Target="_Top"><img border="0" src="https://wptpartners.ck-cdn.com/tn/serve/?cid=501474" width="728" height="90"></a>
  `,

  /** 300×250 — Portada mobile */
  mobile: `
    <a href="https://tracking.wptpartners.com/visit/?bta=35660&nci=13207" Target="_Top"><img border="0" src="https://wptpartners.ck-cdn.com/tn/serve/?cid=501476" width="300" height="250"></a>
  `,

  /** 300×600 — Sidebar artículos desktop */
  sidebar: `
    <a href="https://tracking.wptpartners.com/visit/?bta=35660&nci=13209" Target="_Top"><img border="0" src="https://wptpartners.ck-cdn.com/tn/serve/?cid=501477" width="300" height="600"></a>
  `,

  // ── PROMOCIÓN 2 ──────────────────────────────────────────────────

/** 468×60 — Artículos mobile, debajo de imagen destacada */
  mobileBanner: `
    <a href="https://tracking.wptpartners.com/visit/?bta=35660&nci=13214" Target="_Top"><img border="0" src="https://wptpartners.ck-cdn.com/tn/serve/?cid=501519"  width="468" height="60"></a>
  `,

  
/** Banner global — Todas las páginas, justo antes del footer */
  global: `
    <a href="https://tracking.wptpartners.com/visit/?bta=35660&nci=8069" Target="_Top"><img border="0" src="https://wptpartners.ck-cdn.com/tn/serve/?cid=456367"  width="728" height="90"></a>
  `,

};