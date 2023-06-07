module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': 0,
    'vue/require-default-prop': 0,
    'vue/no-unused-vars': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/no-v-html': 0,
    'no-unused-vars': 2,
    'standard/no-callback-literal': 0,
    'prefer-const': 0,
    'vue/require-prop-types': 0,
    eqeqeq: 0,
    camelcase: 0
  }
}
