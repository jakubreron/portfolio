module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
  ],

  plugins: [
    'stylelint-scss',
  ],

  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'indentation': 2,
    'string-quotes': 'single',
    'no-duplicate-selectors': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'selector-combinator-space-after': 'always',
    'selector-attribute-quotes': 'always',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-brackets-space-inside': 'never',
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'number-leading-zero': 'never',
    'function-url-quotes': 'always',
    'font-family-name-quotes': 'always-where-recommended',
    'comment-whitespace-inside': 'always',
    'at-rule-no-vendor-prefix': true,
    'rule-empty-line-before': 'always-multi-line',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always',
  },
}
