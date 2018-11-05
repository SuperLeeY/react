const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function entries (globPath) {
    var files = glob.sync(globPath);
    var entries = {}, entry, dirname, basename;

    for(var i=0;i<files.length;i++){
    	entry = files[i];
    	dirname = path.dirname(entry);
    	basename = path.basename(entry, '.js');
    	entries[basename] = dirname + '/' + basename + '.js';
    }

    return entries;
}

module.exports = {
	entry: entries('./src/containers/*.js'),
	output: {
        path: path.join(__dirname, '/dist/'),
        publicPath: '/dist/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js'
	},
	module: {
		rules: [
            { 
				test:/\.(js|jsx)$/, 
				exclude: /node_modules/,
				use: [
					{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['env', { modules: false}]
                            ]
                        }
                    }
				]
			},
			{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
		]
	},
	plugins: [
        new MiniCssExtractPlugin({
            filename: '/css/[name].css',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/pages/home.html'),
            filename: '/pages/home.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    devServer: {
        host: '10.222.32.52',
        port: '8080',
        open: true,
        inline: true
    }
};