/**
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "**/*.(md|json)": "prettier --write",
  "**/*.scss": ["stylelint --fix", "prettier --write"],
  "*": [
    "cspell --no-must-find-files --no-progress",
    "prettier --write --ignore-unknown",
  ],
};

export default config;
