module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    "default-case": "error",
    "dot-notation": "error",
    "func-style": "error",
    "lines-between-class-members": "error",
    "max-params": ["error", 5],
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "valid-jsdoc": "error",
    "react/default-props-match-prop-types": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/forbid-prop-types": "error",
    "react/jsx-handler-names": "error",
    "react/no-access-state-in-setstate": "error",
    "react/prefer-stateless-function": "error",
    "react/sort-comp": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-async-promise-executor": "off",
    "react/jsx-boolean-value": "off",
    "react-hooks/exhaustive-deps": "off"
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect"
    }
  }
};
