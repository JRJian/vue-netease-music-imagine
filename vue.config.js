const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        port:4000
    },
    chainWebpack: config => {
        config.resolve.alias.set('Cpnts', resolve('src/components'))
        config.resolve.alias.set('Store', resolve('src/store.js'))
    }
}