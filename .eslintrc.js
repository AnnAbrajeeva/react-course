module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:i18next/recommended",
    "plugin:react/jsx-runtime",
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json"]
  },
  plugins: ["react", "i18next"],
  rules: {
    "react/jsx-indent": [2, 2],
    "i18next/no-literal-string": ["error", { markupOnly: true }],
    quotes: "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false
      }
    ],
    "@typescript-eslint/semi": "off",
    semi: 0
  }
};
