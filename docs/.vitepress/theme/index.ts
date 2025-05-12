import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import "./custom.css";
import { inBrowser } from "vitepress";

import "lite-youtube-embed/src/lite-yt-embed.css";

if (inBrowser) {
  // @ts-ignore
  import("lite-youtube-embed");
}

export default {
  extends: DefaultTheme,
  Layout,
};
