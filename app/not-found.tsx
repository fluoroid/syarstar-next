/* 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import type { Metadata, NextPage, ResolvingMetadata } from "next";
import type { MetaDataProps } from "@/_d/MetaData";
import { siteName } from "@/layout";
import styles from "@/general.module.scss";

// Metadata
const siteData: MetaDataProps = {
  params: { subTitle: "404 Not Found", url: "/" },
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

const NotFound: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1>404 Not Found</h1>
      <p>お探しのページは冬眠中のようです……</p>
    </main>
  );
};

export default NotFound;
