var webpack = require('webpack');
var path = require('path');

module.exports = {
    devServer:{
        historyApiFallback: true,
    },
    // 应用入口
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './src/js/root.js' //root.js作为入口文件
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist'), // 打包好之后的输出路径
        publicPath: '/src/' // 静态资源文件引用时的路径（加在引用静态资源前面的）
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
                test: /\.jsx?$/, //使用loader的目标文件。这里是.jsx
                //loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
                exclude: /(node_modules)/, // 由于node_modules都是编译过的文件，这里我们不让babel去处理其下面的js文件
                loader: 'babel-loader',
                include: path.join(__dirname, '.'),
                query: {
                    presets: ['react', 'es2015'],
                },
            },
            // 下面是添加css的loader,也即是css模块化的配置方法。
            // {
            //     test: /\.css?$/,
            //     loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
            // }
            {
                test: /\.css?$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};