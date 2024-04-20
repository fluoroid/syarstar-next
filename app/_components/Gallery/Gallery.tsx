/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import styles from "@/_components/Gallery/Gallery.module.scss";
import ExternalLinkIcon from "@/_components/FontAwesome/FontAwesome";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import { ITEMS, captionType } from "@/_components/Gallery/items";

// 絵を描いた年
const drawYears: number[] = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017];

export const Gallery = () => {
  // カテゴリー
  let [activeCategory, setActiveCategory] = useState([
    true, // All
    false, // Original
    false, // Yosonoko
    false, // Copyright
  ]);
  // 年
  let [activeYear, setActiveYear] = useState(0);

  // カテゴリーを確認し、SCSSクラスを返す
  const CategoryCheck = useCallback((category: number): string => {
    switch (category) {
      case 1:
        return styles.images + " " + styles.category1;
      case 2:
        return styles.images + " " + styles.category2;
      case 3:
        return styles.images + " " + styles.category3;
    }
    return styles.images;
  }, []);

  // ソートボタン
  const handleCategory = useCallback(
    (n: number) => {
      setActiveCategory(
        activeCategory.map((activeCategory, index) =>
          index === n ? true : false
        )
      );
    },
    [activeCategory]
  );
  const handleYear = useCallback((e: any) => {
    setActiveYear(e.target.value);
  }, []);

  // captionの整形
  const MakeCaption = useCallback((data: captionType[]): string => {
    let element: JSX.Element = (
      <h4 className={styles.figCaption}>
        {data.map((item) => {
          return (
            <span key={item.name}>
              {item.name}
              {item.title !== undefined ? (
                <>
                  &nbsp;
                  <small>({item.title})</small>
                </>
              ) : (
                ""
              )}
              {item.XLink !== undefined ? (
                <>
                  &nbsp;
                  <a
                    href={item.XLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                  >
                    <Image
                      className={styles.SNS_link}
                      src="/img/X.webp"
                      alt="X"
                      width={32}
                      height={32}
                      priority
                    />
                    <ExternalLinkIcon />
                  </a>
                </>
              ) : (
                ""
              )}
              {item.ioLink !== undefined ? (
                <>
                  &nbsp;
                  <a
                    href={item.ioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                  >
                    <Image
                      className={styles.SNS_link}
                      src="/img/misskey_io.webp"
                      alt="io"
                      width={32}
                      height={32}
                      priority
                    />
                    <ExternalLinkIcon />
                  </a>
                </>
              ) : (
                ""
              )}
              &nbsp;
            </span>
          );
        })}
      </h4>
    );
    return renderToStaticMarkup(element);
  }, []);

  return (
    <>
      <div className={styles.refineFilter}>
        <button
          onClick={() => handleCategory(0)}
          className={activeCategory[0] ? styles.active : ""}
        >
          全て
        </button>
        <button
          onClick={() => handleCategory(1)}
          className={activeCategory[1] ? styles.active : ""}
        >
          オリジナル
        </button>
        <button
          onClick={() => handleCategory(2)}
          className={activeCategory[2] ? styles.active : ""}
        >
          よその子
        </button>
        <button
          onClick={() => handleCategory(3)}
          className={activeCategory[3] ? styles.active : ""}
        >
          版権
        </button>
        <select
          name="yearFilter"
          onChange={handleYear}
          className={styles.refineYear}
        >
          <option value="0">全期間</option>
          {drawYears.map((item) => {
            return (
              <option key={item} value={item}>
                {item}年
              </option>
            );
          })}
        </select>
      </div>
      <LightGallery
        allowMediaOverlap={true}
        loop={false}
        mousewheel={true}
        preload={0}
        speed={500}
        startAnimationDuration={500}
        showBarsAfter={0}
        hideBarsDelay={5000}
        swipeThreshold={1}
        mode="lg-slide"
        licenseKey="1234-5678-901-2345"
        plugins={[lgZoom]}
      >
        {ITEMS.map((item) => {
          // カテゴリー一致のときのみ表示
          if (
            (activeYear == 0 || activeYear == item.year) &&
            (activeCategory[0] || activeCategory[item.category])
          ) {
            return (
              <a
                key={item.id}
                className={CategoryCheck(item.category)}
                href={"/img/works/" + item.id + ".jpg"}
                data-sub-html={
                  item.caption
                    ? MakeCaption(item.captionData as captionType[])
                    : ""
                }
              >
                <Image
                  className={styles.image}
                  src={"/img/works/t/" + item.id + "t.webp"}
                  alt=""
                  fill
                  sizes="150px"
                  priority={false}
                  unoptimized={true}
                />
                <div className={styles.plusButton}>
                  <span>＋</span>
                </div>
              </a>
            );
          }
          return null;
        })}
      </LightGallery>
    </>
  );
};
