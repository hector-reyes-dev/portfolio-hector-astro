import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://hectorcreative.dev/",
  integrations: [
    tailwind(),
    react(),
    partytown({
      config: { forward: ["dataLayer.push"] },
    }),
    icon(),
  ],
});
