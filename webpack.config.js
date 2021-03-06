const path = require('path');

module.exports = {
  mode: 'production',
  entry: './assets/js/stable.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'bundle.min.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  targets: {
                    browsers: ['last 2 versions', 'safari >= 7']
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
