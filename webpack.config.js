const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = {
plugins: [
    new NodePolyfillPlugin()
],
resolve: {
fallback: {"https": require.resolve("https-browserify") },
fallback: {"http": require.resolve("stream-http")}
}
};