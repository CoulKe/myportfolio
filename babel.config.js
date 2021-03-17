process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

module.exports = {
  presets: [
    ['@vue/app', {
      transpileDependencies: ['aos'],
      polyfills: [
        'es.promise',
        'es.symbol'
      ]
    }]
  ]
}