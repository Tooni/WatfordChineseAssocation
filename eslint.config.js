import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactRefresh.configs.vite,
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    files: ["**/*.jsx", "**/*.js", "**/*.tsx", "**/*.ts"],
    ignores: [
      "eslint.config.js",
      "vite.config.ts",
      "tsconfig.node.json",
      "tsconfig.json",
    ],
  }
);
