var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './src/js/root.js'
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/src/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                //loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                include: path.join(__dirname, '.'),
                query: {
                    presets: ['react','es2015'],
                },
            },
            // 下面是添加css的loader,也即是css模块化的配置方法
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
