var path = require('path');

const config = {
    entry: {
        app: [path.resolve(__dirname, './app/main.js')]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015',
                            'react',
                            'stage-0'
                        ],
                        plugins: []
                    }
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader", options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};

module.exports = config;