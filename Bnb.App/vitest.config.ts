import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    coverage: {
      include: ["src/**"],
      exclude: [
        "src/components/ErrorBoundary.tsx",
        "src/components/LoadingSpinner.tsx",
        "src/features/*/*.tsx",
        "src/features/*/api/**",
        "src/features/*/dtos/**",
        "src/features/*/models/**",
        "src/features/*/routes/**",
        "src/main.tsx",
        "src/Root.tsx",
        "src/routes/**",
        "src/vite-env.d.ts",
      ],
    },
  },
});
