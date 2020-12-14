module.exports = {
    plugins: {
      'autoprefixer': {
        overrideBrowserslist: ['iOS >= 7', 'Android >= 4','ie >= 8']
      },
      'postcss-pxtorem': {
        rootValue: 32,
        propWhiteList: ['*'],
        selectorBlackList:['']
      }
    }
}