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
import { Uchinoko } from "@/_components/Uchinoko/Uchinoko";

// JSON-LD data
const jsonLd = createBreadcrumbJsonLd([
  {
    pathname: "https://syarstar.net",
    title: "トップ",
  },
  {
    pathname: "https://syarstar.net/characters",
    title: "うちの子",
  },
]);

// Metadata
const siteData: MetaDataProps = {
  params: { subTitle: "うちの子", url: "/characters" },
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

const Characters: NextPage = () => {
  return (
    <>
      <main className={generalStyles.main}>
        <h1>うちの子</h1>
        <Uchinoko />
      </main>
      <BreadCrumbMarkup data={jsonLd} />
    </>
  );
};

export default Characters;
