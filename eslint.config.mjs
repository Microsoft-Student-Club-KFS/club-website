import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  // Project-specific rule overrides to reduce noisy build-blocking errors
  {
    rules: {
      // many JSX strings in the repo include apostrophes; treat as warnings
      'react/no-unescaped-entities': 'warn',
      // allow explicit any as a warning in a few utilities
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];

export default eslintConfig;
