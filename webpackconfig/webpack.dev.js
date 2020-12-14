const merge = require('webpack-merge').default;
const common = require('../webpack.common')
const { servePath }  = require('../path')

module.exports = merge(common,{
    mode:'development',
    module:{
        rules:[{
            test:/\.css$/,
            use:[
                'vue-style-loader',
                'postcss-loader',
                'style-loader',
                'css-loader'
            ]

        },{
            test:/\.scss$/,
            use:[
                'vue-style-loader',
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        },{
            test: /\.vue$/,
            loader:'vue-loader',
            options: {
                loaders: {
                   scss: ['vue-style-loader', 'css-loader', 'sass-loader']
                }
            } 
        },{
            test: /\.(png|jpg|jpeg|gif|webp|svg|svgz)(\?.+)?$/,
            use: [{
                loader: "url-loader",
                options: {
                    esModule:false,
                    limit: 10000,
                    name: `image/[name].[ext]`,
                }
            }]
        }]
    },
    devServer:{
        contentBase: servePath,
        hot:true,
        host: '10.0.16.154',
        compress: true,
        open: true,
        port:8000,
        proxy:{
            '/index':{
                target:'https://helper-test.miniworldbox.com',
                changeOrigin:true
            }
        }
    }
})