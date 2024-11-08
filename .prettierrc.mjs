/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  jsxDoubleQuote: true,
  quoteProps: "consistent",
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: true,
  endOfLine: "lf",
  arrowParens: "always",
  plugins: [
    "prettier-plugin-astro",
  ],
  overrides: [
    {
      files: ["*.json", "*.md", "*.toml", "*.yml"],
      options: {
        useTabs: false,
      },
    },
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
  