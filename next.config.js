const nextTranslate = require('next-translate')
const withPlugins = require('next-compose-plugins');

module.exports = nextTranslate({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"]
    });
    
    return config;
  }
})
