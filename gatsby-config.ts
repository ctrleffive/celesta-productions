import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Celesta Productions",
    siteUrl: "https://celestaproductions.com",
    description: "",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-cloudflare-pages",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "raleway\:600,800",
          "source sans pro\:300,600,700,300i,600i,700i"
        ],
      }
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-W0EXB5VSHE"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Celesta Productions",
        short_name: "Celesta Productions",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#49B5E3",
        display: "standalone",
        icon: "./src/images/logo.png"
      },
    },
  ],
};

export default config;
