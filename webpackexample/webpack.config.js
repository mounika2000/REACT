const HTMLWebpackPlugin = require('html-webpack-plugin'); // installed module
const path = require('path'); // node module

module.exports = {
    plugins : [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}