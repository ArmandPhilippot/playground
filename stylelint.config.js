/** @type {import('stylelint').Config} */
export default {
  extends: ["@arphi/stylelint-config"],
  rules: {
    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)((-|--|__)[a-z0-9]+)*$",
      {
        message:
          "Selector should use lowercase and separate words with hyphens or use BEM (selector-class-pattern)",
      },
    ],
  },
};
