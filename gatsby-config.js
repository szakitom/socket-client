require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://brb.szaki.xyz`,
    title: `BRB - Canvas`,
    description: `BRB Client for socket server`,
    author: `@SzakiTom`,
    keywords: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BRB Canvas`,
        short_name: `BRB`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cecece`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
