import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    coverage: {
      include: ["src/**"],
      exclude: ["src/App.tsx", "src/main.tsx", "src/vite-env.d.ts", "src/features/*/*.tsx"],
    },
  },
});
