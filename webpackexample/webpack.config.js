const HTMLWebpackPlugin = require('html-webpack-plugin'); // installed module
const path = require('path'); // node module

module.exports = {
    devServer: {
       port: 9000,
    },
    module: {
        rules: [
            {
                test : /\.js$/,
                use: "babel-loader",
                exclude :/node_modules/
            }
            ,{
                test : /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    optimization: {
        splitChunks: {chunks: "all", name: "vendor"}
    },
    plugins : [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}