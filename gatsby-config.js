const path = require('path');


module.exports = {
  siteMetadata: {
    title: 'MNogiec.com',
    description: 'As an ambitious and dedicated web developer, I would love to cooperate with you! Please feel free to visit this portfolio and check my work.',
    author: 'MNogiec',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-typescript',
    'gatsby-plugin-eslint',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: path.join(__dirname, 'src/intl'),
        languages: ['en', 'de', 'pl'],
        defaultLanguage: 'en',
        redirect: false,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        context: path.join(__dirname, 'src/context'),
        intl: path.join(__dirname, 'src/intl'),
        pages: path.join(__dirname, 'src/pages'),
        pages_styles: path.join(__dirname, 'src/pages_styles'),
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'MNogiec.com',
        short_name: 'MNogiec',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#3A3D9B',
        icon: './src/assets/images/favicons/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-136352136-1',
        head: false,
        defer: false,
        cookieDomain: 'mnogiec.com',
      },
    },
  ],
};
