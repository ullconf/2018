const plugins = [
  { src: "~plugins/velocity.js", ssr: false },
  { src: "~plugins/fontawesome.js", ssr: false }
];

// if (process.env.NODE_ENV != "production") {
//   plugins.push({
//     src: "~plugins/dragit.js",
//     ssr: false
//   });
// }

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "ull-2018",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Úll 2018 website" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://use.typekit.net/ulo6zhx.css" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  css: [{ src: "~/assets/stylesheets/main.scss", lang: "scss" }],
  modules: [
    ["bootstrap-vue/nuxt", { css: false }],
    [
      "nuxt-sass-resources-loader",
      [
        "~assets/stylesheets/_custom.scss",
        "bootstrap/scss/_functions.scss",
        "bootstrap/scss/_variables.scss",
        "bootstrap/scss/_mixins.scss"
      ]
    ]
  ],
  plugins: plugins,
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
