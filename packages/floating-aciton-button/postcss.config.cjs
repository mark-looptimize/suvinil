const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');
const presetEnv = require('postcss-preset-env');
const cssNano = require('cssnano');

// Where should the open props values live
const openPropsTargetSelector = ":host";

const config = {
    plugins: [
      postcssJitProps({...OpenProps, custom_selector: openPropsTargetSelector}),
      presetEnv,
      cssNano({
        preset: 'default'
      })
    ]
  }
  
  module.exports = config