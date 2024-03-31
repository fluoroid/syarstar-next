/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import type { Metadata } from "next";
import { metadata } from "@/app/layout";
import { siteName } from "@/app/layout";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import {
  BreadCrumbMarkup,
  createBreadcrumbJsonLd,
} from "@/app/_components/BreadCrumbMarkup/BreadCrumbMarkup";

// JSON-LD data
const jsonLd = createBreadcrumbJsonLd([
  {
    pathname: "https://syarstar.net/",
    title: "トップ",
  },
  {
    pathname: "https://syarstar.net/about/",
    title: "このサイトについて",
  },
]);

// Metadata
type Props = {
  params: { subTitle: string; url: string };
};
const siteData: Props = {
  params: { subTitle: "About", url: "/about/" },
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  params = siteData.params;
  return {
    title: params.subTitle,
    openGraph: {
      ...metadata.openGraph,
      title: params.subTitle + " | " + siteName,
      url: params.url,
    },
    alternates: {
      ...metadata.alternates,
      canonical: params.url,
    },
  };
}

const About = () => {
  return (
    <>
      <main className={styles.main}>aboutmainです</main>
      <BreadCrumbMarkup data={jsonLd} />
    </>
  );
};

export default About;
