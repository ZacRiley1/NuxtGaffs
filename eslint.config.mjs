// eslint.config.mjs
import withNuxt from './.nuxt/eslint.config.mjs';
export default withNuxt({
  files: ['**/*.ts', '**/*.tsx'],
  rules: {
    'no-console': 'off', // allow console.log in TypeScript files
  },
})
  .append({
    extends: [
      'eslint:recommended', // ESLint recommended rules
      'plugin:vue/vue3-recommended', // Vue 3 recommended rules
      'plugin:prettier/recommended', // Adds Prettier and turns off conflicting rules
    ],
    plugins: [
      'vue',
      'prettier', // Enable Prettier plugin for ESLint
    ],
    rules: {
      'prettier/prettier': 'error', // Enforce Prettier formatting as ESLint error
      // You can add any custom rules here as needed
    },
  })
  .prepend
  // If you want to prepend configurations, you can add them here
  ()
  .override('nuxt/typescript', {
    rules: {
      '@typescript-eslint/ban-types': 'off', // Example of overriding rules
    },
  });
