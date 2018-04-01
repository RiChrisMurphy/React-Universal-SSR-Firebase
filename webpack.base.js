module.exports = {
 //tell webpack to run babel on every file it runs through
 module: {
  rules: [
   {
    test: /\.js?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
     presets: [
      'react',
      'stage-0',
      ['env', { tagets: { browsers: ['last 2 versions'] } }]
     ],
     plugins: ['transform-class-properties']
    }
   },
   {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
     'file-loader',
     {
      loader: 'image-webpack-loader',
      options: {
       bypassOnDebug: true
      }
     }
    ]
   },
   {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
   }
  ]
 }
};
