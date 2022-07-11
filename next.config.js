const { withPlaiceholder } = require('@plaiceholder/next')

/** @type {import('next').NextConfig} */
module.exports = withPlaiceholder({
  reactStrictMode: false,
  swcMinify: true,
  basePath: '',
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['i.ytimg.com']
  }
})
