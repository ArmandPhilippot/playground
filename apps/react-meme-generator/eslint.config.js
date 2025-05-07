import arphi from "@arphi/eslint-config";

export default arphi(
  { react: true, typescript: true },
  {
    name: "react-meme-generator-overrides",
    rules: {
      "@typescript-eslint/no-misused-spread": "off",
      /* It doesn't seem to play nice with `ComponentProps`. */
      "@typescript-eslint/no-unsafe-assignment": "off",
      /* It doesn't seem to play nice with `ComponentProps`. */
      "@typescript-eslint/no-unsafe-member-access": "off",
      "unicorn/filename-case": "off",
    },
  },
  {
    files: ["**/*.d.ts"],
    name: "react-meme-generator-overrides/dts",
    rules: {
      "@typescript-eslint/consistent-indexed-object-style": "off",
    },
  }
);
