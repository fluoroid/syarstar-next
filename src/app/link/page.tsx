/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import type { Metadata } from "next";
import { metadata } from "@/app/layout";
import { siteName } from "@/app/layout";
import styles from "@/app/link/page.module.scss";
import generalStyles from "@/app/general.module.scss";
import ExternalLinkIcon from "@/app/_components/FontAwesome/FontAwesome";
import {
  BreadCrumbMarkup,
  createBreadcrumbJsonLd,
} from "@/app/_components/BreadCrumbMarkup/BreadCrumbMarkup";
import Image from "next/image";

// JSON-LD data
const jsonLd = createBreadcrumbJsonLd([
  {
    pathname: "https://syarstar.net/",
    title: "トップ",
  },
  {
    pathname: "https://syarstar.net/link/",
    title: "リンク",
  },
]);

// Metadata
type Props = {
  params: { subTitle: string; url: string };
};
const siteData: Props = {
  params: { subTitle: "リンク", url: "/link/" },
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

const LinkPage = () => {
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
              src="/img/Misskey_io.webp"
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
