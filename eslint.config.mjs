import next from "eslint-plugin-next";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  next.configs.recommended,
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];
