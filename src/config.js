const merge = require('lodash/merge');
const firebaseConfig = require('../configs/firebase.config');

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    firebaseConfig: firebaseConfig.database
  },
  test: {},
  development: {},
  production: {}
};

module.exports = merge(config.all, config[config.all.env]);
