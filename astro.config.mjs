import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";
import netlify from "@astrojs/netlify/server";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://hectorcreative.dev/",
  output: "server",
  adapter: netlify(),
  integrations: [
    tailwind(),
    react(),
    partytown({
      config: { forward: ["dataLayer.push"] },
    }),
    icon(),
  ],
});
