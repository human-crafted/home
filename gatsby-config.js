module.exports = {
  siteMetadata: {
    title: `Humancrafted`,
    description: `We’re a Bournemouth based and globally operating, engineering and product consultancy specialising in User Experience, React.js and React Native, GraphQL, Node.js and the extended Javascript ecosystem. In short, we build high quality exclusive mobile and web applications.`,
    author: `Humancrafted Technology ltd`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Humancrafted`,
        short_name: `Humancrafted`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-small.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'human-crafted-home',
        region: 'eu-west-2',
        protocol: 'https',
        hostname: 'www.humancrafted.tech',
      },
    },
  ],
}
