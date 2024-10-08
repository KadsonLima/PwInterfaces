const { resolve } = require('path');

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    NEXT_PUBLIC_MY_OBJECT: process.env.NEXT_PUBLIC_MY_OBJECT,
  },
  head: {
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-DDDN13BDYV",
        async: true
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DDDN13BDYV');
        `
      }
    ]
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
      },
    ],
  },
};
