const path = require('path');

const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/components/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async (config, { configType }) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
};