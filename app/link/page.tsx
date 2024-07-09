/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import Image from "next/image";
import type { Metadata, NextPage, ResolvingMetadata } from "next";
import type { MetaDataProps } from "@/_d/MetaData";
import { siteName } from "@/layout";
import {
  BreadCrumbMarkup,
  createBreadcrumbJsonLd,
} from "@/_components/BreadCrumbMarkup/BreadCrumbMarkup";
import generalStyles from "@/general.module.scss";
import styles from "@/link/page.module.scss";
import { ExternalLinkIcon } from "@/_components/FontAwesome/FontAwesome";

// JSON-LD data
const jsonLd = createBreadcrumbJsonLd([
  {
    pathname: "https://syarstar.net",
    title: "トップ",
  },
  {
    pathname: "https://syarstar.net/link",
    title: "リンク",
  },
]);

// Metadata
const siteData: MetaDataProps = {
  params: { subTitle: "リンク", url: "/link" },
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

const LinkPage: NextPage = () => {
  return (
    <>
      <main className={generalStyles.main}>
        <h1>リンク集</h1>
        <p>ここに書いてあるアカウント以外は私のものじゃないよ</p>
        <div className={styles.linkIconsList}>
          <a
            href="https://misskey.io/@Fluoroid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.linkIcon}
              src="/img/misskey_io.webp"
              alt="icon"
              width={64}
              height={64}
              priority
            />
            <div className={styles.balloon}>
              Misskey.io
              <br />
              @Fluoroid
            </div>
          </a>
          <a
            href="https://pixiv.me/fluoroid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.linkIcon}
              src="/img/pixiv.webp"
              alt="icon"
              width={64}
              height={64}
              priority
            />
            <div className={styles.balloon}>
              pixiv
              <br />
              17519193
            </div>
          </a>
        </div>
        <h1>コンタクト</h1>
        <p>
          当観測所へのご連絡は
          <a
            href="https://misskey.io/@Fluoroid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Misskey.io&nbsp;
            <ExternalLinkIcon />
          </a>
          からお願いいたします。
        </p>
        <p>なお、イラストのリクエスト等の募集は行っておりません。</p>
      </main>
      <BreadCrumbMarkup data={jsonLd} />
    </>
  );
};

export default LinkPage;
