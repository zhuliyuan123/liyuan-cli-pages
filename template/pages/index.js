const readFiles = require('../../webpackconfig/options/entry')
module.exports = {
    'entryList':readFiles(__dirname,'js'),
    'htmlList':readFiles(__dirname,'html')
}