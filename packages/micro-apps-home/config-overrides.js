const path = require('path');
const {
  override,
} = require('customize-cra');

module.exports = {
  webpack: function(config, env) {
    config.output.library = 'MicroAppsHome';
    config.output.libraryTarget = 'umd';
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },

  jest: function(config) {
    return config;
  },

  devServer: function(configFunction) {
    return function(proxy, allowedHosts) {
      const config = configFunction(proxy, allowedHosts);
      config.open = false;
      return config;
    };
  },

  paths: function(paths, env) {
    return paths;
  },
};