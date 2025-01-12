import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["./src/**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettier,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-no-target-blank": "off",
    },
  },
  {
    ignores: ["node_modules", "dist"],
  },
];
