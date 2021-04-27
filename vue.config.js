module.exports = {
    runtimeCompiler: true,
    devServer: {
        host: '0.0.0.0',
        proxy: 'https://sports.cxct.org'
    },

    outputDir: process.env.VUE_APP_PLATFORM === 'sample' ? 'dist' : `output/${process.env.VUE_APP_PLATFORM}`,

    pluginOptions: {
      i18n: {
        locale: 'zh',
        fallbackLocale: 'zh',
        localeDir: `@/platform/${process.env.VUE_APP_PLATFORM}/locales`,
        enableInSFC: false
      }
    }
}
