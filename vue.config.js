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
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '前端二牛'
        return args
      })
  }
}