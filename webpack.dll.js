const path = require('path')
const webpack = require('webpack')


module.exports = {
    entry:{
        library:[
            'vue'
        ]
    },
    output:{
        filename:'[name]_[hash].js',
        path:path.resolve(__dirname,'./library'),
        library:'[name]'
    },
    plugins:[
        new webpack.DllPlugin({
            name:'[name]_[hash]',
            path: path.resolve(__dirname,'./library/[name].json'),
        })
    ]
}
