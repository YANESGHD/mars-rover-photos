module.exports = {
  plugins: ["prettier"],
  extends: [
    'semistandard'
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    'prettier/prettier': 'error',
  }
};


// .eslintrc.js
module.exports = {
  // Otras configuraciones...
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    'prettier/prettier': 'error',
  },
};

