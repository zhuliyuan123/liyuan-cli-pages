const path = require('path')
const servePath =  path.resolve(__dirname, './template/pages/')
const buildPath = path.resolve(__dirname,'./dist')
const publicPath = 'http://10.0.16.154:8080/'

module.exports = {
    servePath:servePath,
    buildPath:buildPath,
    publicPath:publicPath,
}