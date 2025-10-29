import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [{
  ignores: [
    ".next/**",
    "node_modules/**",
    ".contentlayer/**",
    ".content-collections/**",
    "out/**",
    "build/**",
  ],
}, ...nextCoreWebVitals, ...nextTypescript];

export default eslintConfig;
