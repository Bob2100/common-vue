module.exports = {
  devServer: {
    proxy: {
      '/map': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/map': ''
        }
      }
    }
  }
}