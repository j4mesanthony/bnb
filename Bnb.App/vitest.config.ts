import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    coverage: {
      include: ["src/**"],
      exclude: [
        "src/Root.tsx",
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/features/*/*.tsx",
        "src/features/*/models/**",
        "src/features/*/routes/**",
        "src/features/*/dtos/**",
        "src/features/*/api/**",
        "src/routes/**",
      ],
    },
  },
});
