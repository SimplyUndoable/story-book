const path = require('path');

const custom = require('../webpack.config.js');

custom.module.rules.splice(0,1)

module.exports = {
  stories: ['../src/components/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async (config, { configType }) => {
    return { ...config, module: { ...config.module, rules: [...config.module.rules,...custom.module.rules] } };
  },
};