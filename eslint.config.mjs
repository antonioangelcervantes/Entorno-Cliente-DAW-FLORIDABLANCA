import globals from "globals";
import pluginJs from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",   // CLAVE para evitar errores de import/export
      globals: {
        ...globals.browser
      }
    },
    rules: {
      "no-var": "error",
      "prefer-const": "warn",
      "no-unused-vars": "warn",
      "no-undef": "error",
      eqeqeq: ["warn", "always"],
      "no-console": "off"
    },
    extends: [pluginJs.configs.recommended]
  }
]);