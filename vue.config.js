module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:1000/categories',
        pathRewrite: {
          '^/api': ''
        },
        ws: true,
        changeOrigin: true
      },
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
