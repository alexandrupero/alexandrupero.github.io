export default {
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  rules: {
    'at-rule-prelude-no-invalid': [
      true,
      { ignoreAtRules: ['apply', 'tailwind', 'screen'] },
    ],
  },
}
