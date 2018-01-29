module.exports = {
  use: [
    [
      '@neutrinojs/airbnb',
      {
        eslint: {
          "rules": {
            "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
            "import/extensions": 0,
            "react/prop-types": "off",
            "no-undef": "off",
            "no-console": "off",
            "object-curly-newline": ["error", { "multiline": true, "minProperties": 1 }],
            "comma-dangle": ["error", {
                "arrays": "never",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "ignore"
            }]
          },
        },
      },
    ],
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'gep'
        }
      }
    ],
    '@neutrinojs/jest'
  ]
};
