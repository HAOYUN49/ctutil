const path = require('path');

module.exports = {
    devtool: false,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'ctutil.js',
      library: "ctutil",
    },
    devServer:{
        headers:{
         "Access-Control-Allow-Origin": "*",
        }
    }
  };