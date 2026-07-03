import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      eqeqeq: 'error',
      curly: 'error',
      'no-implicit-coercion': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'comma-dangle': ['error', 'never'],
      semi: ['error', 'always']
    }
  }
];