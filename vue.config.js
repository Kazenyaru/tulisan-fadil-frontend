module.exports = {

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/base.scss";
          `,
      },
    },
  },

  runtimeCompiler: true,

  pwa: {
    name: 'Tulisan Fadil',
  },

  lintOnSave: false,
};
