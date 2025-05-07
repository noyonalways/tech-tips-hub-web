/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://techtipshub.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ["/admin", "/admin/**", "/payment/**"],
  outDir: "./public",
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/admin"],
      },
    ],
  },
  additionalSitemaps: [
    `${process.env.SITE_URL || "https://techtipshub.vercel.app"}/sitemap-blogs.xml`,
  ],
};

module.exports = config;
