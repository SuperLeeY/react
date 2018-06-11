const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function entries (globPath) {
    var files = glob.sync(globPath);
    var entries = {}, entry, dirname, basename;

    for(var i=0;i<files.length;i++){
    	entry = files[i];
    	dirname = path.dirname(entry);
    	basename = path.basename(entry, '.dev.js');
    	entries[basename] = dirname + '/' + basename + '.dev.js';
    }

    return entries;
}

module.exports = {
	entry: entries('./src/js/pages/*.js'),
	output: {
		path: path.join(__dirname, './'),
		filename: 'dist/js/[name].js'
	},
	module: {
		rules: [
			{ 
				test:/\.js$/, 
				exclude: /node_modules/,
				use: [
					{
                        loader: 'babel-loader',
                        query: {
                            presets: [
                                ['es2015', { modules: false}]
                            ]
                        }
                    }
				]
			},
			{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options:{
                                minimize: true
                            }
                        }
                    ]
                })
            }
		]
	},
	plugins: [
		new ExtractTextPlugin('dist/css/[name].css')
	]
};