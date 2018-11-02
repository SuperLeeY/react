const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Uglify = require('uglifyjs-webpack-plugin');

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
                                ['es2015', { modules: false}]
                            ]
                        }
                    }
				]
			},
			{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
		]
	},
	plugins: [
        new MiniCssExtractPlugin({
            filename: '/css/[name].css',
        }),
        new Uglify()
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    }
};