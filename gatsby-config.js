const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")

module.exports = {
  siteMetadata: {
    title: `Faizur Rehman | Portfolio`,
    description: ``,
    author: `@fazurrehman`,
  },
  // in gatsby-config.js
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          autoprefixer({
            grid: true,
            browsers: ["last 10 version"],
          }),
          cssnano(),
        ],
        precision: 8,
        cssLoaderOptions: {
          localIdentName: "[name]__[local]--[hash:base64:5]",
          // localIdentName: "[hash:base64:5]",
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        filetypes: {
          ".scss": { syntax: `postcss-scss` },
        },
        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
        // For all the options check babel-plugin-react-css-modules README link provided above
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Faizur Rehman`,
        short_name: `Portfolio`,
        start_url: `/`,
        theme_color: `#000000`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
