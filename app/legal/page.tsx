/* 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import Link from "next/link";
import type { Metadata, NextPage, ResolvingMetadata } from "next";
import type { MetaDataProps } from "@/_d/MetaData";
import { siteName } from "@/layout";
import {
  BreadCrumbMarkup,
  createBreadcrumbJsonLd,
} from "@/_components/BreadCrumbMarkup/BreadCrumbMarkup";
import generalStyles from "@/general.module.scss";
import { ExternalLinkIcon } from "@/_components/FontAwesome/FontAwesome";

// JSON-LD data
const jsonLd = createBreadcrumbJsonLd([
  {
    pathname: "https://syarstar.net",
    title: "トップ",
  },
  {
    pathname: "https://syarstar.net/legal",
    title: "Legal Info.",
  },
]);

// Metadata
const siteData: MetaDataProps = {
  params: { subTitle: "Legal Info.", url: "/legal" },
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

const Legal: NextPage = () => {
  return (
    <>
      <main className={generalStyles.main}>
        <h1>プライバシーポリシー</h1>
        <h2>アクセス解析ツールについて</h2>
        <p>
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
          このGoogleアナリティクスはトラフィックデータの収集のためにクッキー(Cookie)を使用しております。
          トラフィックデータは匿名で収集されており、個人を特定するものではありません。
        </p>
        <p>
          この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          この規約に関しての詳細は
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Googleアナリティクスサービス利用規約&nbsp;
            <ExternalLinkIcon />
          </a>
          と
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Googleポリシーと規約&nbsp;
            <ExternalLinkIcon />
          </a>
          をご覧ください。
        </p>
        <h2>プライバシーポリシーの変更について</h2>
        <p>
          当サイトは、個人情報に関して日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直しその改善に努めます。
        </p>
        <p>
          本プライバシーポリシーは事前の予告なく変更することがございます。本プライバシーポリシーが変更された場合も含め、最新のプライバシーポリシーを常に本ページにて開示いたします。
        </p>
        <h1>免責事項</h1>
        <p>
          当サイトのコンテンツや情報については可能な限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではございません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>
        <p>
          当サイトからリンクやバナーなどによって他のサイトに移動した場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
        </p>
        <h1>著作権について</h1>
        <p>
          当サイトで掲載しているコンテンツ(文章、画像、イラスト等)は著作権法よって権利が守られており、許可なく無断利用(転載、複製、改変、二次利用等)することは禁止されています。
        </p>
        <p>
          ただし、イラストに関しては<Link href="./works">作品</Link>
          のページにて別途利用規約を定めさせていただきますのでご確認ください。
        </p>
        <p>
          二次創作関連の各権利所有者におかれましては、万一掲載内容に問題がございましたらご本人様より
          <a
            href="https://misskey.io/@Fluoroid"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Fluoroid&nbsp;
            <ExternalLinkIcon />
          </a>
          (Misskey.io)へお問い合わせください。迅速に対応いたします。
        </p>
        <p>(2024年1月8日 改訂)</p>
      </main>
      <BreadCrumbMarkup data={jsonLd} />
    </>
  );
};

export default Legal;
