import { FlatCompat } from "@eslint/eslintrc";

// Create a FlatCompat instance
const compat = new FlatCompat({
  baseDirectory: process.cwd(), // Use current working directory
});

// Define the ESLint configuration
export default [
  ...compat.extends("next/core-web-vitals"), // Extend Next.js core web vitals config
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Lint JavaScript/TypeScript files
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      // Add custom rules here
      "semi": ["error", "always"], // Enforce semicolons
      "quotes": ["error", "double"], // Enforce double quotes
    },
  },
];
