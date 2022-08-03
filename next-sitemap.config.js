/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: process.env.SITE_URL || 'https://shopmakers.tech',
  generateRobotsTxt: true,
};

/**
 * This cannot be exported as ES6 module.
 * @see https://github.com/iamvishnusankar/next-sitemap/issues/217#issuecomment-1164538797
 */
module.exports = config;
