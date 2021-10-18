"use strict";

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:jsonc/base",
    "plugin:jsonc/prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/recommended",
    "plugin:vuejs-accessibility/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: [
    "@typescript-eslint",
    "jsonc",
    "no-secrets",
    "vue",
    "vuejs-accessibility",
    "import",
    "sonarjs",
    "unicorn",
  ],
  rules: {
    // Code quality
    "unicorn/custom-error-definition": "error",
    "unicorn/import-style": "off",
    "unicorn/filename-case": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prevent-abbreviations": "off",
    "max-lines": ["error", 400],
    "max-lines-per-function": ["error", { max: 50, skipComments: true }],

    // Disable because of false positives with buffers and with MongoDB/Mongoose
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-array-method-this-argument": "off",
    "unicorn/no-array-push-push": "off",

    // Security
    "sonarjs/cognitive-complexity": ["warn", 8],
    "no-new-func": "error",
    "no-secrets/no-secrets": [
      "error",
      {
        ignoreContent: ["http://", "https://"],
        ignoreIdentifiers: ["ALPHABET"],
      },
    ],

    // Additional TypeScript checks not enabled by the recommended configuration
    // (TODO: member-ordering)
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/array-type": "warn",
    "@typescript-eslint/consistent-indexed-object-style": "warn",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/method-signature-style": "off",
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    "@typescript-eslint/no-extraneous-class": "warn",
    "@typescript-eslint/no-implicit-any-catch": "warn",
    "@typescript-eslint/no-invalid-void-type": "warn",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "warn",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/sort-type-union-intersection-members": "warn",
    "@typescript-eslint/unified-signatures": "warn",

    // All of the following checks require type information, and can slow down your editor
    // (TODO: naming-convention)
    // "@typescript-eslint/no-base-to-string": "warn",
    // "@typescript-eslint/no-confusing-void-expression": "warn",
    // "@typescript-eslint/no-unnecessary-qualifier": "warn",
    // "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    // "@typescript-eslint/prefer-includes": "warn",
    // "@typescript-eslint/prefer-nullish-coalescing": "warn",
    // "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    // "@typescript-eslint/prefer-string-starts-ends-with": "error",
    // "@typescript-eslint/promise-function-async": "error",
    // "@typescript-eslint/require-array-sort-compare": "warn",
  },
};
