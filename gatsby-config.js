const roboto = require("@theme-ui/preset-funk");

const date = new Date();
const year = date.getFullYear();

module.exports = {
  siteMetadata: {
    siteTitle: `JavaScript Trivia`,
    defaultTitle: `JavaScript Trivia`,
    siteTitleShort: `JavaScript Trivia`,
    siteDescription: `JavaScript trivia questions and public API`,
    siteUrl: `https://javascript-trivia.com`,
    siteLogo: "/logo.png",
    siteAuthor: `Ben Perlmutter`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#1103FF`,
    basePath: `/`,
    footer: `Made with love, Gatsby, and java (the liquid kind)
     by Ben Perlmutter.   © ${year}`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JavaScript Trivia - trivia questions and public API`,
        short_name: `JavaScript Trivia`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1103FF`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-164663303-2`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://javascript-trivia.com`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: roboto,
        // basePath: `/`,
      },
    },
  ],
};
