import { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "眠星観測所",
    short_name: "眠星観測所",
    description: "眠星観測所へようこそ。ふるおろいどの個人サイトです。",
    start_url: "/",
    scope: "/",
    display: "fullscreen",
    background_color: "#ffffff",
    theme_color: "#ffdf7f",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
};

export default manifest;
