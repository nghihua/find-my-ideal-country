// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Native i18n routing: /en/ and /vi/ are pre-rendered from
  // src/pages/[locale]/index.astro (see docs/i18n-plan.md, Phase 0).
  // The root redirect is NOT delegated to redirectToDefaultLocale: that mode
  // makes the i18n route claim "/" and PrerenderRouteConflict-warns against
  // the required src/pages/index.astro. Instead index.astro itself is a
  // static meta-refresh redirect page to /en/, which works on every static
  // host (the site deploys without an SSR adapter).
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
