module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "scss/operator-no-unspaced": [
      true,
      {
        "ignore": ["inside-function"]
      }
    ]
  }
};
