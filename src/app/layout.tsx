/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import type { Metadata } from "next";
import { M_PLUS_1 } from "next/font/google";
import "@/app/globals.scss";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Header } from "@/app/_components/Header/Header";
import { Footer } from "@/app/_components/Footer/Footer";
import { Nav } from "@/app/_components/Nav/Nav";

// fonts
const mplus = M_PLUS_1({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mplus",
});

// Metadata
export const siteName: string = "眠星観測所";
const descriptionShort: string =
  "眠星観測所へようこそ。ふるおろいどの個人サイトです。";
const description: string = descriptionShort + "のんびりお絵描きをしています。";
const url: string = "https://syarstar.net/";
const twitterID: string = "@Fluoroid_AA";
export const metadata: Metadata = {
  metadataBase: new URL("https://syarstar.net/"),
  title: {
    default: siteName,
    template: "%s | " + siteName,
  },
  description: description,
  keywords: [siteName, "ふるおろいど", "ふるおろ", "百花", "二葉"],
  openGraph: {
    title: siteName,
    description: descriptionShort,
    url: url,
    siteName: siteName,
    locale: "ja_JP",
    type: "website",
    images: {
      url: "./opengraph-image.jpg",
      type: "image/jpeg",
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: "summary",
    title: siteName,
    description: descriptionShort,
    site: twitterID,
    creator: twitterID,
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: {
    name: "Fluoroid",
  },
  creator: siteName,
  alternates: {
    canonical: url,
  },
};

// 外枠
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics gaId="G-XYPRYB770Y" />
        <GoogleTagManager gtmId="G-XYPRYB770Y" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-title" content={siteName} />
      </head>
      <body className={mplus.className}>
        <Header />
        <aside>
          <Header />
          <Nav />
          <Footer />
        </aside>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
