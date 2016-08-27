module.exports = {
    entry: './app/index.js',
    output: {
        path: './public/js',
        publicPath: '/js',
        filename: 'bundle.js'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: __dirname + '/app',
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: './public'
    }
};
