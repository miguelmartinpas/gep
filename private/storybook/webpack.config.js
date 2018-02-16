const baseConfig = {
  resolve: modules => () => ({
    resolve: {
      modules: [].concat(modules, ['node_modules'])
    }
  }),
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/, loader: 'url-loader?limit=8000'
      }
    ]
  }
};

module.exports = storybookBaseConfig =>
  Object.assign({}, storybookBaseConfig, {
    resolve: Object.assign({}, storybookBaseConfig.resolve, {
      modules: baseConfig.resolve.modules
    }),
    module: Object.assign({}, storybookBaseConfig.module, {
      rules: storybookBaseConfig.module.rules.concat(baseConfig.module.rules.slice(1))
    })
  });
