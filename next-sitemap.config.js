/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: process.env.SITE_URL || 'https://shopmakers.tech',
  generateRobotsTxt: true,
  exclude: ['/404', '/es/404', '/it/404', '/500', '/es/500', '/it/500'],
  alternateRefs: [
    {
      href: 'https://shopmakers.tech/es',
      hreflang: 'es',
    },
    {
      href: 'https://shopmakers.tech/it',
      hreflang: 'it',
    },
  ],
};

/**
 * This cannot be exported as ES6 module.
 * @see https://github.com/iamvishnusankar/next-sitemap/issues/217#issuecomment-1164538797
 */
module.exports = config;
