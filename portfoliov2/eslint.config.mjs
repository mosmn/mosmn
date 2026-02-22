import js from "@eslint/js";
import astro from "eslint-plugin-astro";

export default [
  js.configs.recommended,
  ...astro.configs["flat/recommended"],
  {
    ignores: ["dist", ".astro", "node_modules"],
  },
];
