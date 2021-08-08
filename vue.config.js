module.exports = {
    devServer: {
        proxy: {
            '^/api/categories': {
                target: 'http://localhost:1000/categories',
                pathRewrite: {
                    '^/api/categories': ''
                },
                ws: true,
                changeOrigin: true
            },
            '^/api/products': {
                target: 'http://localhost:1000/page',
                pathRewrite: {
                    '^/api/products': ''
                },
                ws: true,
                changeOrigin: true
            }
        }
    },
    transpileDependencies: [
        'vuetify'
    ]
}
