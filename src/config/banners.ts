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
    <a href="https://tracking.wptpartners.com/visit/?bta=35660&nci=13656" Target="_Top"><img border="0" src="https://central.ck-cdn.com/w-pt-partners/2026-03-17/728x90_5c6fe666.jpg" width="728" height="90"></a>
  `,

  /** 300×250 — Portada mobile */
  mobile: `
    <a href="https://tracking.wptpartners.com/visit/?bta=35660&nci=13647" Target="_Top"><img border="0" src="https://central.ck-cdn.com/w-pt-partners/2026-03-17/300x250_0e7435e0.jpg" width="300" height="250"></a>
  `,

  /** 300×600 — Sidebar artículos desktop */
  sidebar: `
    <a href="https://tracking.wptpartners.com/visit/?bta=35660&nci=13649" Target="_Top"><img border="0" src="https://central.ck-cdn.com/w-pt-partners/2026-03-17/300x600_c3980b65.jpg" width="300" height="600"></a>
  `,

  // ── PROMOCIÓN 2 ──────────────────────────────────────────────────

/** 468×60 — Artículos mobile, debajo de imagen destacada */
  mobileBanner: `
    <a href="https://tracking.wptpartners.com/visit/?bta=35660&nci=13655" Target="_Top"><img border="0" src="https://central.ck-cdn.com/w-pt-partners/2026-03-17/468x60_v02_c065c7da.jpg"  width="468" height="60"></a>
  `,

  
/** Banner global — Todas las páginas, justo antes del footer */
  global: `
    <a href="https://tracking.wptpartners.com/visit/?bta=35660&nci=13409" Target="_Top"><img border="0" src="https://central.ck-cdn.com/w-pt-partners/2026-03-08/728x90_df9d0b47.jpg"  width="728" height="90"></a>
  `,

};