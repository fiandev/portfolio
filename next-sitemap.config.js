/** @type {import('next-sitemap').IConfig} */

module.exports = {
  sitemapBaseFileName: "sitemap_index",
  siteUrl: 'https://fiandev.my.id',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/administrator'],
  alternateRefs: [
    {
      href: 'https://es.fiandev.my.id',
      hreflang: 'es',
    },
    {
      href: 'https://fr.fiandev.my.id',
      hreflang: 'fr',
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'black-listed-bot',
        disallow: ['/dashboard'],
      },
    ],
    additionalSitemaps: [
      "https://fiandev.my.id/sitemap.xml"
    ],
  },
}