import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/img/", "/sprite/"],
    },
    sitemap: "https://syarstar.net/sitemap.xml",
  };
};

export default robots;
