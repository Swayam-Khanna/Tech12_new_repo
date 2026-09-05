import { defineConfig } from "@neon/config/v1";

export default defineConfig({
  auth: true,
  preview: {
    // Upgrade to a paid plan to enable I Gateway for your project.
    // aiGateway: true,
    buckets: {
      "abvt-assets": { access: "private" },
    },
    functions: {
      api: { name: "api", source: "./hello.ts" },
    },
  },
});
