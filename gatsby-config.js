module.exports = {
  siteMetadata: {
    title: `Anastasiya Makarevich.`,
    description: ` `,
    author: `Anastasiya Makarevich`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
        name: `Anastasiya Makarevich`,
        short_name: `AM`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins", "Titillium Web"],
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: false,
          database: false,
          firestore: false,
          storage: false,
          messaging: false,
          functions: false,
          performance: false,
          analytics: true,
        },
        credentials: {
          apiKey: 'AIzaSyDweDnalAT5WgPnBASVWszU90qaShVEZRo',
          authDomain: 'portfolio-eb3bd.firebaseapp.com',
          projectId: 'portfolio-eb3bd',
          storageBucket: 'portfolio-eb3bd.appspot.com',
          messagingSenderId: '282966375602',
          appId: '1:282966375602:web:2424d9a305e8430f2dddab',
          measurementId: 'G-CR15PC308J',
        }
      },
    },
  ],
}
