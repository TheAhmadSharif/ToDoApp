module.exports = {
    entry: './public/app.jsx',
    output: {
    		pathname: __dirname,
        filename: './public/bundle.js'    
     },
    resolve: {
      extensions:  ['', '.js', '.jsx']
    },
    module: {
    	loaders: {
    		loader: 'babel-loader',
    		query: {
    			presets: ['react': 'es2015']
    		},
    		test: 
    	}
    }
}
