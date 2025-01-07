
export default [
  {
    ignores: ['dist'],
    extends: ['eslint:recommended'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        document: 'readonly',
        window: 'readonly'
      }
    },
    plugins: {
      'react-hooks': {
        rules: {
          'rules-of-hooks': 'error',
          'exhaustive-deps': 'warn'
        }
      },
      'react-refresh': {
        'only-export-components': ['warn', { allowConstantExport: true }]
      }
    }
  }
];
