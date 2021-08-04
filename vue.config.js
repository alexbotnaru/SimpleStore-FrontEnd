module.exports = {
  devServer: {
    proxy: {
      '^/api/cars': {
        target: 'http://localhost:1000/page',
        ws: true,
        changeOrigin: true
      },
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
