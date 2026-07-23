import type { Config } from "tailwindcss";
import uiPreset from "@community-os/ui/tailwind.config";

export default {
  presets: [uiPreset],
  content: [
    "./index.html",
    "./src/**/*.{vue,ts}",
    "../../packages/ui/src/**/*.{vue,ts}",
  ],
} satisfies Config;
