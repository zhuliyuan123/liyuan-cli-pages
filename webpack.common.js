const {entryList,htmlList} = require('./template/pages/index')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('./path');
const Path = require('path')
let htmlArr = [];
let entry = {};
if(process.env.PAGE_ENV === 'all'){
    for(let item in htmlList){
        htmlArr.push(new HtmlWebpackPlugin({
            title:item,
            template:`${htmlList[item]}`,
            filename:`${item}.html`,
            minify:false,
            chunks:[item],
        }))
    }
    entry = entryList
}else{
    htmlArr.push(new HtmlWebpackPlugin({
        title:process.env.PAGE_ENV,
        template:`./template/pages/${process.env.PAGE_ENV}/index.html`,
        filename:`${process.env.NODE_ENV === 'production' ? process.env.PAGE_ENV : 'index'}.html`,
        minify:false,
        chunks:[process.env.PAGE_ENV]
    }))
    entry[process.env.PAGE_ENV] = `./template/pages/${process.env.PAGE_ENV}/index.js`;
}
module.exports = {
    entry:entry,
    module:{
        rules:[{
            test:/\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attributes: true,//html图片输出
                    minimize:false
                }
            }
        },{
            test: /\.md$/,
            exclude: /node_modules/,
            loader:Path.resolve('./loader/index.js')

        }]
    },
    plugins:[...htmlArr,new VueLoaderPlugin()],
}