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
