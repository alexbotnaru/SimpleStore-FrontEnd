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
            },
            '^/api/suggestions': {
                target: 'https://999.md/suggestions',
                pathRewrite: {
                    '^/api/suggestions': ''
                },
                ws: true,
                changeOrigin: true,
            },
            '^/api/m/suggestions': {
                target: 'https://m.999.md/suggestions',
                pathRewrite: {
                    '^/api/m/suggestions': ''
                },
                ws: true,
                changeOrigin: true,
            },
            //'https://m.999.md/suggestions'
            '^/api/item': {
                target: 'http://localhost:1000/item',
                pathRewrite: {
                    '^/api/item': ''
                },
                ws: true,
                changeOrigin: true,
            }
        }
    },
    transpileDependencies: [
        'vuetify'
    ]
}
