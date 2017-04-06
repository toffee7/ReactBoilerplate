module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: './',
    publicPath: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    host: '10.61.17.91'
  }
};
