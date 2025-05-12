import { DefaultTheme, defineConfig } from "vitepress";
import lightbox from "vitepress-plugin-lightbox";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vason Team",
  description: "Vason Team",
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.svg",
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        items: [
          { text: "About us", link: "/about-us" },
          { text: "Contact us", link: "/contact-us" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vason-io" }],
    footer: {
      message: "Full-Stack Software Experts",
      copyright: "© 2025 Vason Team",
    },
  } satisfies DefaultTheme.Config, // Type-hint for IntelliJ,
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },
});
