const { resolve } = require('path');

module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_KEY: process.env.API_KEY,
    MY_OBJECT: process.env.MY_OBJECT,
  },
  pageExtensions: ['tsx', 'ts'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'i.ytimg.com'
      },
      {
        protocol: 'https',
        hostname:'cdn.discordapp.com'
      },
      {
        protocol: 'https',
        hostname:'i.imgur.com'
      },
      {
        protocol: 'https',
        hostname:'w7.pngwing.com'
      },
      {
        protocol: 'https',
        hostname:'aplicbronze.com.br'
      },
      {
        protocol: 'https',
        hostname:'theclassicpw.com'
      }
    ],
  },
};
