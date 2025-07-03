/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  // Plugins
  plugins: ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"],

  // Basic formatting (matching EditorConfig)
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  endOfLine: "lf",

  // Common preferences
  semi: false,
  singleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "avoid",

  // Sort imports
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

module.exports = config
