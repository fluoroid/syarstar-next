/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import type { Metadata, ResolvingMetadata } from "next";
import type { MetaDataProps } from "@/_d/MetaData";
import { siteName } from "@/layout";
import {
  BreadCrumbMarkup,
  createBreadcrumbJsonLd,
} from "@/_components/BreadCrumbMarkup/BreadCrumbMarkup";
import generalStyles from "@/general.module.scss";

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
const siteData: MetaDataProps = {
  params: { subTitle: "About", url: "/about/" },
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

const About = () => {
  return (
    <>
      <main className={generalStyles.main}>
        <h1>
          <ruby>
            眠星<rp>(</rp>
            <rt>ねむりぼし</rt>
            <rp>)</rp>
          </ruby>
          観測所
        </h1>
        <ul>
          <li>
            こんにちは！　「ふるおろいど」と申します。このページを見てくださり、ありがとうございます。
          </li>
          <li>
            このサイトは、自身の創作活動の記録を残すために立てた小さな小さな観測所(個人サイト)です。
          </li>
          <li>
            同人活動はしていませんが、一応「眠星観測所」が個人サークル名みたいなかんじです。
          </li>
          <li>
            うちの子の資料置き場と、イラストの保管庫として運用しようと思います。
          </li>
        </ul>
        <h1>私について</h1>
        <ul>
          <li>
            「ふるおろいど」という名前で創作活動しています。略して「ふるおろ」。
          </li>
          <li>誕生日：11月1日</li>
          <li>生きているところ：千葉、眠星</li>
          <li>好物：おさかな、チョコレート、和菓子。甘党。</li>
          <li>お絵描きを中心とした創作が好き。ゲームやアニメも好きです。</li>
          <li>絵</li>
          <ul>
            <li>
              主にオリジナル(うちの子)や版権のファンアートを描いています。
            </li>
            <li>全年齢向け</li>
            <li>たまによその子のファンアートも描くこともあるよ。</li>
            <li>
              一次創作だと、色彩豊かなデフォルメっぽい絵や、他者様の一次創作、オリジナルキャラクターが好きです。
            </li>
            <li>
              版権だと、きらら系、日常系、東方や心温まるお話とかが好きです。
            </li>
          </ul>
          <li>ゲーム</li>
          <ul>
            <li>
              世界樹の迷宮、東方Project(弾幕STG)、星のカービィ、ぷよぷよなど。
            </li>
            <li>最近はSteamのインディーゲームとかもたまにやります。</li>
            <li>オンラインゲームは、最近は原神しかやってないです……</li>
            <li>
              過去に、Sky
              星を紡ぐ子どもたち、ぷよぷよ!!クエスト、きららファンタジアとかやってました。
            </li>
          </ul>
          <li>アニメ</li>
          <ul>
            <li>きらら系、日常系などほっこりする内容を中心に見ています。</li>
            <li>たまに放送中のTVアニメのファンアートも描いているよ。</li>
          </ul>
        </ul>
      </main>
      <BreadCrumbMarkup data={jsonLd} />
    </>
  );
};

export default About;
