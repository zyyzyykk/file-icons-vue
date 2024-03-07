const { defineConfig } = require('@vue/cli-service')

const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('node:path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (conf) => {
    // console.log(conf.module.rules);

  },
  chainWebpack: (conf) => {
    conf.resolveLoader.modules.add('loader');
    let imgRule = conf.module.rule('images')
    imgRule.parser({
      dataUrlCondition: {
        maxSize: 10
      }
    })
    conf.module.rule('copy-doc')
    conf.plugin('copy-doc').use(CopyWebpackPlugin, [
      {
        patterns: [
          {
            from: path.resolve(__dirname, './doc'),
            to: path.resolve(__dirname, './file-icons-vue')
          },
          {
            from: path.resolve(__dirname, './doc'),
            to: path.resolve(__dirname, './file-icons-vue@min')
          }
        ]
      }
    ])

    // conf.module.rule('image-map')
    //   .parser({
    //     commonjs: true,
    //     requireContext: true
    //   })
    //   .test(/.\.map.js$/)
    //   .use('val-loader')
    //   .loader('val-loader')
    //   .end()
    //   .use('log-loader-start')
    //   .loader('ImageMapLoader')
    //   .end()
    //   ;
  },
  lintOnSave: false
})
