
const devServer = {
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    open: false,
    overlay: true,
    port: 3000,
    quiet: true,
    stats: {
        warning: true,
        buildAt: true,
        errors: true,
        assets: true
    },
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    proxy: {

    }
}

module.exports = devServer;