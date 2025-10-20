<script setup>
import DefaultTheme from "vitepress/theme";
import { onMounted } from "vue";
import { useRouter } from "vitepress";
import mediumZoom from "medium-zoom";
// GA id from Vite env or fallback
// @ts-ignore - import.meta.env typing may not be defined in this environment
const GA_ID = import.meta.env?.VITE_GA_MEASUREMENT_ID || "G-DM76BQ3BW2";

const { Layout } = DefaultTheme;
const router = useRouter();

// Setup medium zoom with the desired options
const setupMediumZoom = () => {
  mediumZoom("[data-zoomable]", {
    background: "transparent",
  });
};

// Apply medium zoom on load
onMounted(setupMediumZoom);

// Track initial page view (if gtag loaded)
onMounted(() => {
  try {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_ID, { page_path: window.location.pathname });
    }
  } catch (e) {
    // ignore if gtag not available
  }
});

// Subscribe to route changes to re-apply medium zoom effect and send GA pageviews
router.onAfterRouteChange = () => {
  setupMediumZoom();
  try {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_ID, { page_path: window.location.pathname });
    }
  } catch (e) {
    // ignore if gtag not available
  }
};
</script>

<template>
  <Layout />
</template>

<style>
.medium-zoom-overlay {
  backdrop-filter: blur(5rem);
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 999;
}
</style>
