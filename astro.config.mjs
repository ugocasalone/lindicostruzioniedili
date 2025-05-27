import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import astroI18n from "astro-i18n-aut/integration";

// https://astro.build/config
// export default defineConfig({
//   integrations: [
//     tailwind(),
//     astroI18n({
//       defaultLangCode: "it",
//       supportedLangCodes: ["it", "en"],
//       showDefaultLangCode: false,
//     }),
//   ],
// });


import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";

const defaultLocale = "it";
const locales = {
  it: "it",
  en: "en", // the `defaultLocale` value must present in `locales` keys
};

export default defineConfig({
  // site: "https://example.com/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    tailwind(),
    i18n({
      locales,
      defaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],
});