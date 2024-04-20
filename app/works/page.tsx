/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import type { MetaDataProps } from "@/_d/MetaData";
import { siteName } from "@/layout";
import {
  BreadCrumbMarkup,
  createBreadcrumbJsonLd,
} from "@/_components/BreadCrumbMarkup/BreadCrumbMarkup";
import generalStyles from "@/general.module.scss";
import styles from "@/works/page.module.scss";
import { Gallery } from "@/_components/Gallery/Gallery";
import { InitialModalWindow } from "@/_components/ModalWindow/ModalWindow";

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

// 注意事項
const Terms = () => {
  const termsNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <h1>絵に利用に関して</h1>
      <p>絵の使用に関するおやくそくだよ</p>
      <p>
        {termsNum.map((item) => {
          return (
            <Image
              key={item}
              className={styles.tremsicons}
              src={"/img/works/terms/policy_" + item + ".webp"}
              alt="icon"
              width={72}
              height={72}
              priority
            />
          );
        })}
      </p>
      <p>詳しく書くと、以下の通りになります。</p>
      <ul>
        <li>
          私のイラストのダウンロード・印刷など個人の範囲での使用やSNS等のアイコンとして使用することは、公序良俗に反する目的や誹謗・中傷目的でなければ基本的に自由です。事前に連絡する必要はありません。
        </li>
        <li>
          イラストの転載に関しては深く追及いたしませんが、一次創作は可能な限り要相談とさせていただきます。
        </li>
        <li>
          私のイラストを加工・編集して、SNS等へ再アップロードする行為はお控えください。これは、私の作品をうごイラやAI学習の素材として使用し、得られた画像や動画をSNS等へアップロードする行為も含みます。
        </li>
        <li>
          私のイラストを用いてグッズ化、広告への使用など、営利目的での使用は固く禁止します。
        </li>
        <li>
          私が行った二次創作(他者様のよその子・版権絵)はいわゆる二次的著作物に該当し、そのキャラクターの著作権は原作者に帰属します。私の活動は非営利目的でのファンアートのみにとどめていますが、使用の際にはこの点を注意して使用してください。
        </li>
      </ul>
    </>
  );
};

const Works = () => {
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
      <InitialModalWindow content={Terms()} storage="worksIsVisited" />
      <BreadCrumbMarkup data={jsonLd} />
    </>
  );
};

export default Works;
