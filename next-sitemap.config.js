/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://techtipshub.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ["/admin/*", "/admin/**/*"],
  outDir: "./public",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/admin"],
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  changefreq: "daily",
  priority: 0.7,
  additionalSitemaps: [
    `${
      process.env.SITE_URL || "https://techtipshub.vercel.app"
    }/sitemap-blogs.xml`,
  ],
  transform: async (config, path) => {
    if (path.startsWith("/admin")) {
      return null;
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};

// Create a separate blogs sitemap
const createBlogsSitemap = async () => {
  try {
    if (!process.env.BASE_API) {
      throw new Error("BASE_API environment variable is not defined");
    }

    const response = await fetch(`${process.env.BASE_API}/posts?limit=100`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text(); // Get the raw response text
    let data;

    try {
      const json = JSON.parse(text); // Parse it manually to handle potential JSON errors
      data = json.data;

      if (!Array.isArray(data)) {
        throw new Error("API response data is not an array");
      }
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Raw Response:", text);
      throw new Error("Failed to parse API response");
    }

    // Generate blog sitemap content with proper XML formatting
    const blogSitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${data
  .map(
    (post) => `  <url>
    <loc>${config.siteUrl}/blogs/${post.slug}</loc>
    <lastmod>${new Date(
      post.updatedAt || post.createdAt
    ).toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

    // Write the blogs sitemap file
    const fs = require("fs");
    const path = require("path");
    const dir = "./public";

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(path.join(dir, "sitemap-blogs.xml"), blogSitemapContent);
    console.log("Successfully generated blogs sitemap");
  } catch (error) {
    console.error("Error generating blogs sitemap:", error);
    // Don't throw the error, just log it to prevent the entire sitemap generation from failing
  }
};

// Export both the config and create blogs sitemap
module.exports = {
  ...config,
  transform: async (config, path) => {
    // Create blogs sitemap during the first transform
    if (!global.blogsSitemapCreated) {
      await createBlogsSitemap();
      global.blogsSitemapCreated = true;
    }

    // Skip admin routes and blog routes (as they're in a separate sitemap)
    if (path.startsWith("/admin") || path.startsWith("/blogs/")) {
      return null;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
