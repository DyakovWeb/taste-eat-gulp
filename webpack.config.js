const config = {
    mode: 'production',
    entry: {
        index: './src/js/index.js',
        //contacts: './src/js/contacts.js',
    },
    output: {
        filename: '[name].bundle.js',
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
   },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

module.exports = config;