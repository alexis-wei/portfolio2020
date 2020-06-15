module.exports = {
  siteMetadata: {
    title: `ALEXIS WEI`,
    description: `This is Alexis Wei's portfolio for work in mechanical engineering, computer science, and design`,
    author: `@alexis.w`,
    "menuLinks": [
      {
        "name": "Mechancial",
        "link": "/mechanical"
      },
      {
        "name": "Software",
        "link": "/cs"
      },
      {
        "name": "Design",
        "link": "/design"
      },
      {
        "name": "About me",
        "link": "/about"
      }
    ]
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/bunny.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        disableAutoprefixing: false,
        disableMinification: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
