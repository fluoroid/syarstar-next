/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import type { Metadata, NextPage, ResolvingMetadata } from "next";
import type { MetaDataProps } from "@/_d/MetaData";
import { siteName } from "@/layout";
import {
  BreadCrumbMarkup,
  createBreadcrumbJsonLd,
} from "@/_components/BreadCrumbMarkup/BreadCrumbMarkup";
import generalStyles from "@/general.module.scss";
import { Gallery } from "@/_components/Gallery/Gallery";

// JSON-LD data
const jsonLd = createBreadcrumbJsonLd([
  {
    pathname: "https://syarstar.net/",
    title: "トップ",
  },
  {
    pathname: "https://syarstar.net/works/",
    title: "作品",
  },
]);

// Metadata
const siteData: MetaDataProps = {
  params: { subTitle: "作品", url: "/works/" },
};
export const generateMetadata = async (
  { params }: MetaDataProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  params = siteData.params;
  return {
    title: params.subTitle,
    openGraph: {
      ...(await parent).openGraph,
      title: params.subTitle + " | " + siteName,
      url: params.url,
    },
    alternates: {
      canonical: params.url,
    },
  };
};

// 最終更新日
const lastModified: { year: number; month: number; day: number } = {
  year: 2024,
  month: 4,
  day: 16,
};

const Works: NextPage = () => {
  return (
    <>
      <main className={generalStyles.main}>
        <h1>作品</h1>
        <p>
          最終更新日：{lastModified.year}/
          {String(lastModified.month).padStart(2, "0")}/
          {String(lastModified.day).padStart(2, "0")}
        </p>
        <Gallery />
      </main>
      <BreadCrumbMarkup data={jsonLd} />
    </>
  );
};

export default Works;
