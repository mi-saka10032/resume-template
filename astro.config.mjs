import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [ svelte() ],
  // 注意修改为自己仓库的名称 /${RepositoryName} ，比如仓库名为resume-template，此处就是 /resume-template
  base: "/resume-template",
});
