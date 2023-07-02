const { resolve } = require('path');

module.exports = {
  reactStrictMode: true,

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
        hostname:'w7.pngwing.com'
      },
      {
        protocol: 'https',
        hostname:'theclassicpw.com'
      }
    ],
  },
};
