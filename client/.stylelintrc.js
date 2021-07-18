// Stylelint docs -- Configuring Stylelint:   https://stylelint.io/user-guide/configure
// Stylelint docs -- List of available rules: https://stylelint.io/user-guide/rules/list

module.exports = {
  "processors": ["stylelint-processor-styled-components"],
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
    "stylelint-config-prettier",
  ],
  "plugins": [
    "stylelint-order",
    "stylelint-prettier"
  ],
  "rules": {
    "prettier/prettier": true,
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": "never",
    "declaration-no-important": true,
    "font-family-name-quotes": "always-where-recommended",
    "indentation": 2,
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "max-nesting-depth": 3,
    "no-eol-whitespace": true,
    "number-leading-zero": "always",
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "order/properties-alphabetical-order": true
	}
}
