/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "@/globals.scss";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Header } from "@/_components/Header/Header";
import { Footer } from "@/_components/Footer/Footer";
import { Nav } from "@/_components/Nav/Nav";
import { TsParticles } from "@/_components/tsParticles/tsParticles";

// fonts
const mplus: NextFontWithVariable = M_PLUS_Rounded_1c({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mplus",
});

// Metadata
export const siteName: string = "眠星観測所";
const descriptionShort: string = "ふるおろいどの個人サイトです。";
const description: string = descriptionShort + "";
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
}>): JSX.Element => {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics gaId="G-XYPRYB770Y" />
        <GoogleTagManager gtmId="G-XYPRYB770Y" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <meta name="theme-color" content="#ffdf7f" />
        <link rel="manifest" href="/manifest.webmanifest" />
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
        <TsParticles />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
