/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import type { Metadata } from "next";
import { M_PLUS_1 } from "next/font/google";
import "@/app/globals.scss";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/app/_components/Header/Header";
import { Footer } from "@/app/_components/Footer/Footer";
import Head from "next/head";
import { Nav } from "@/app/_components/Nav/Nav";

// fonts
const mplus = M_PLUS_1({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mplus",
});

// metadata
const siteName = "眠星観測所";
const description =
  "眠星観測所へようこそ。ふるおろいどの個人サイトです。のんびりお絵描きをしています。";
const url = "https://syarstar.net/";
export const metadata: Metadata = {
  metadataBase: new URL("https://syarstar.net/"),
  title: {
    default: siteName,
    template: "%s | ${siteName}",
  },
  description,
  keywords: ["眠星観測所", "ふるおろいど", "ふるおろ", "百花", "二葉"],
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@Fluoroid_AA",
    creator: "@Fluoroid_AA",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: {
    name: "Fluoroid",
  },
  creator: "眠星観測所",
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
      <Head>
        <GoogleAnalytics gaId="G-XYPRYB770Y" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-title" content="眠星観測所" />
      </Head>
      <body className={mplus.className}>
        <Header />
        <aside>
          <Header />
          <nav>
            <ul>
              <li>About</li>
              <li>Discover</li>
              <li>うちの子</li>
              <li>作品</li>
              <li>リンク</li>
            </ul>
          </nav>
          <Footer />
        </aside>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
