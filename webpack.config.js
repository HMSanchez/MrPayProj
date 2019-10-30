module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/build',
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
};