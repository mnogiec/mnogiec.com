const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'MNogiec.com',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: 'MNogiec.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-typescript',
    'gatsby-plugin-eslint',
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
        misc: path.join(__dirname, 'src/misc'),
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
        background_color: '#3A3D9B',
        theme_color: '#3A3D9B',
        icon: './src/assets/images/icon.png',
      },
    },
  ],
};
