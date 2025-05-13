import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    dir: "src",
    workspace: [
      {
        extends: true,
        test: {
          name: "unit",
          dir: "src/domain",
        },
      },
      {
        extends: true,
        test: {
          name: "e2e",
          dir: "src/http/controllers",
          environment:
            "./prisma/vitest-environment-prisma/prisma-test-environment.ts",
        },
      },
    ],
    environment: "node",
    setupFiles: [],
  },
});
