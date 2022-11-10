const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
      // clientLogLevel: 'info',
      // outputPath: path.resolve(ROOT_PATH, outputPath),
      host: '127.0.0.1',
      port: 8080,
      proxy: {
          '/api/': {
              target: 'http://127.0.0.1:3000',
              changeOrigin: true,
          },
          '/static/': {
              target: 'http://127.0.0.1:3000',
              changeOrigin: true,
          }
      }
  },
})
