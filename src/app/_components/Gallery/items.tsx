/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

// ITEMSの型
export type illustItems = {
  id: number;
  year: number;
  category: number;
  caption: boolean;
  captionData?: captionType[];
};
export type captionType = {
  name: string;
  title?: string;
  XLink?: string;
  ioLink?: string;
};

// データベース
export const ITEMS: illustItems[] = [
  {
    id: 41,
    year: 2018,
    category: 3,
    caption: true,
    captionData: [{ name: "多々良小傘", title: "東方Project" }],
  },
  { id: 40, year: 2018, category: 1, caption: false },
  {
    id: 39,
    year: 2018,
    category: 3,
    caption: true,
    captionData: [{ name: "萌田薫子", title: "こみっくがーるず" }],
  },
  {
    id: 38,
    year: 2018,
    category: 3,
    caption: true,
    captionData: [{ name: "保登心愛", title: "ご注文はうさぎですか？" }],
  },
  {
    id: 37,
    year: 2018,
    category: 2,
    caption: true,
    captionData: [
      {
        name: "めあ",
        title: "はときゅね 様",
        XLink: "https://twitter.com/hatoqne/",
        ioLink: "https://misskey.io/@hatoqne",
      },
    ],
  },
  { id: 36, year: 2018, category: 1, caption: false },
  {
    id: 35,
    year: 2018,
    category: 3,
    caption: true,
    captionData: [{ name: "リリーホワイト", title: "東方Project" }],
  },
  { id: 34, year: 2018, category: 1, caption: false },
  {
    id: 33,
    year: 2018,
    category: 2,
    caption: true,
    captionData: [
      {
        name: "ナビビ",
        title: "ぷらす 様",
        XLink: "https://twitter.com/purazum/",
      },
    ],
  },
  {
    id: 32,
    year: 2018,
    category: 3,
    caption: true,
    captionData: [{ name: "一之瀬花名", title: "スロウスタート" }],
  },
  { id: 31, year: 2018, category: 1, caption: false },
  { id: 30, year: 2018, category: 1, caption: false },
  {
    id: 29,
    year: 2018,
    category: 3,
    caption: true,
    captionData: [{ name: "香風智乃", title: "ご注文はうさぎですか？" }],
  },
  {
    id: 28,
    year: 2018,
    category: 2,
    caption: true,
    captionData: [
      {
        name: "プラグ",
        title: "ぷらす 様",
        XLink: "https://twitter.com/purazum/",
      },
      {
        name: "えんび",
        title: "まいとね 様",
        XLink: "https://twitter.com/268meitne/",
      },
    ],
  },
  {
    id: 27,
    year: 2018,
    category: 3,
    caption: true,
    captionData: [{ name: "百地たまて", title: "スロウスタート" }],
  },
  {
    id: 26,
    year: 2018,
    category: 3,
    caption: true,
    captionData: [
      { name: "さっちゃん" },
      { name: "結衣" },
      { name: "琴葉", title: "三ツ星カラーズ" },
    ],
  },
  { id: 25, year: 2018, category: 1, caption: false },
  { id: 24, year: 2018, category: 1, caption: false },
  {
    id: 23,
    year: 2018,
    category: 3,
    caption: true,
    captionData: [{ name: "一之瀬花名", title: "スロウスタート" }],
  },
  {
    id: 22,
    year: 2018,
    category: 3,
    caption: true,
    captionData: [{ name: "矢田寺成美", title: "東方Project" }],
  },
  { id: 21, year: 2018, category: 1, caption: false },
  {
    id: 20,
    year: 2017,
    category: 3,
    caption: true,
    captionData: [{ name: "香風智乃", title: "ご注文はうさぎですか？" }],
  },
  {
    id: 19,
    year: 2017,
    category: 3,
    caption: true,
    captionData: [{ name: "保登心愛", title: "ご注文はうさぎですか？" }],
  },
  { id: 18, year: 2017, category: 1, caption: false },
  { id: 17, year: 2017, category: 1, caption: false },
  {
    id: 16,
    year: 2017,
    category: 3,
    caption: true,
    captionData: [{ name: "柚", title: "このはな綺譚" }],
  },
  { id: 15, year: 2017, category: 1, caption: false },
  {
    id: 14,
    year: 2017,
    category: 3,
    caption: true,
    captionData: [{ name: "涼風青葉", title: "NEW GAME!" }],
  },
  {
    id: 13,
    year: 2017,
    category: 3,
    caption: true,
    captionData: [{ name: "五島潤", title: "天使の3P!" }],
  },
  { id: 12, year: 2017, category: 1, caption: false },
  { id: 11, year: 2017, category: 1, caption: false },
  {
    id: 10,
    year: 2017,
    category: 3,
    caption: true,
    captionData: [{ name: "桐間紗路", title: "ご注文はうさぎですか？" }],
  },
  {
    id: 9,
    year: 2017,
    category: 3,
    caption: true,
    captionData: [{ name: "ナズーリン", title: "東方Project" }],
  },
  { id: 8, year: 2017, category: 1, caption: false },
  {
    id: 7,
    year: 2017,
    category: 3,
    caption: true,
    captionData: [{ name: "エタニティラルバ", title: "東方Project" }],
  },
  { id: 6, year: 2017, category: 1, caption: false },
  { id: 5, year: 2017, category: 1, caption: false },
  {
    id: 4,
    year: 2017,
    category: 3,
    caption: true,
    captionData: [{ name: "桜木ひな子", title: "ひなこのーと" }],
  },
  {
    id: 3,
    year: 2017,
    category: 3,
    caption: true,
    captionData: [{ name: "初瀬いづな", title: "ノーゲーム・ノーライフ" }],
  },
  { id: 2, year: 2017, category: 1, caption: false },
  { id: 1, year: 2017, category: 1, caption: false },
];
