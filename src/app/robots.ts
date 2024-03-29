import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/img/", "/img/*/", "/works/*/"],
    },
    sitemap: "https://syarstar.net/sitemap.xml",
  };
}
