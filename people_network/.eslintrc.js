module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
  },

  env: {
    es6: true,
  },
  globals: {
    $: true,
    require: true,
    console: true,
    __dirname: true,
  },
  extends: "eslint:recommended",
  rules: {
    // enable additional rules
    indent: ["error", 4],
    quotes: ["error", "double"],
    semi: ["error", "always"],

    // override configuration set by extending "eslint:recommended"
    "no-empty": "warn",
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "for-direction": "off",
  },
};
