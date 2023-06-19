module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-dupe-keys": "off",

    "no-undef": "off",
    "import/prefer-default-export": "off",
  },
  parserOptions: {
    sourceType: "module",
  },
};
