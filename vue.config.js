const px2rem = require('postcss-px2rem');

module.exports = ({
  lintOnSave:false,
  // devServer: {
  //   proxy: {
  //     '/getsidebar': {
  //       target: 'https://mallapi.duyiedu.com/goods/',
  //     },
  //   },
  // },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5,
          }),
        ],
      },
    },
  },
});
