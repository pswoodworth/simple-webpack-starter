var LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
  entry: [
    'whatwg-fetch',
    "./src/entry.js"
  ],
    output: {
        path: __dirname,
        filename: "./public/build/index.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel-loader']
          },
          {
              test: /\.scss$/,
              use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }
              ]
          }
        ]
        
    },
    plugins: [
      new LiveReloadPlugin()
    ]
};