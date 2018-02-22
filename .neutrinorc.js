module.exports = {
  options: {
    root: '',
    src: 'src',
    index: 'index'
  },
  use: [
    [
      '@neutrinojs/airbnb',
      {
        eslint: {
          settings: {
            'import/resolver': 'webpack'
          },
          "rules": {
            "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
            "import/extensions": 0,
            "react/prop-types": "off",
            "react/require-default-props": "off",
            "no-undef": "off",
            "no-console": "off",
            "class-methods-use-this": 0,
            "comma-dangle": ["error", {
                "arrays": "never",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "ignore"
            }],
            "object-curly-newline": ["error", {
              "consistent": true
            }],
            "max-len": 0,
            "no-shadow": 0,
            "arrow-body-style": 0,
            "global-require": 0,
            "no-unused-expressions": 0,
            "no-confusing-arrow": 0,
            "no-unused-vars": [2, { "ignoreRestSiblings": true }],
            "import/no-dynamic-require": 0,
            "import/no-extraneous-dependencies": 0,
            "import/prefer-default-export": 0,
            "react/require-default-props": 0,
            "react/forbid-prop-types": 0,
            "react/default-props-match-prop-types": 0,
            "react/jsx-filename-extension": [2, {"extensions": [".js", ".jsx"]}],
            "jsx-a11y/anchor-is-valid": [2, {
              "components": ["Link"],
              "specialLink": ["hrefLeft", "hrefRight", "to"],
              "aspects": ["noHref", "invalidHref", "preferButton"]
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
    ['@neutrinojs/jest', {
      "verbose": true,
      "testRegex": "src/.*\\.test\\.js$",
      'moduleDirectories': [
        'src',
        'node_modules'
      ],
      "setupFiles": [
        "raf/polyfill"
      ],
      moduleNameMapper: {
        '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/private/jest/fileMock.js',
        '^components$': '<rootDir>/private/jest/componentsMock.js'
      },
      setupTestFrameworkScriptFile: '<rootDir>/private/jest/setupTests.js',
    }]
  ]
};
