// @ts-nocheck
import { DefaultTheme, defineConfig } from "vitepress";
import lightbox from "vitepress-plugin-lightbox";

// GA measurement id: read from Vite env or fallback to provided ID
const GA_ID = (import.meta as any).env?.VITE_GA_MEASUREMENT_ID || "G-DM76BQ3BW2";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vason Team",
  description: "Vason Team",
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    [
      "script",
      { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}` },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}', { page_path: window.location.pathname });`,
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.svg",
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        items: [
          { text: "About us", link: "/about-us" },
          { text: "Our projects", link: "/projects" },
          { text: "Contact us", link: "/contact-us" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/vason-io" }],
    footer: {
      message: "Full-Stack Software Experts",
      copyright: "© 2020-2026 Vason Team",
    },
  } satisfies DefaultTheme.Config, // Type-hint for IntelliJ,
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "lite-youtube",
      },
    },
  },
});
