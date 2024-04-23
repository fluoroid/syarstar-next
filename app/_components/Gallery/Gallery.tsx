/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

"use client";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import styles from "@/_components/Gallery/Gallery.module.scss";
import { ExternalLinkIcon } from "@/_components/FontAwesome/FontAwesome";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import { useSpring, animated } from "@react-spring/web";
import { ITEMS, captionType } from "@/_components/Gallery/items";
import { ModalWindow } from "@/_components/ModalWindow/ModalWindow";

// 絵を描いた年
const drawYears: number[] = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017];

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
              width={96}
              height={96}
              priority
            />
          );
        })}
      </p>
      <p>詳しく書くと、以下の通りになります。</p>
      <ul>
        <li>
          基本はCC BY-NC-ND
          4.0ライセンスに則ります。その上で、以下のように定めさせていただきます。
        </li>
        <li>
          私のイラストのダウンロード・印刷など個人の範囲での使用やSNS等のアイコンとして使用することは、公序良俗に反する目的や誹謗・中傷目的でなければ基本的に自由です。事前に連絡する必要はありません。
        </li>
        <li>
          イラストの転載に関してはあまり深く追及いたしませんが、一次創作は可能な限り要相談とさせていただきます。
        </li>
        <li>
          私のイラストを加工・編集して、インターネット上へ再アップロードする行為はお控えください。これは、私の作品をAI学習等の素材として使用し、得られた画像や動画をインターネット上へアップロードする行為も含みます。
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

export const Gallery = () => {
  // カテゴリー
  let [activeCategory, setActiveCategory] = useState(0);
  // 年
  let [activeYear, setActiveYear] = useState(drawYears[0]);
  // モーダル
  const [modalShow, setModalShow] = useState(false);

  // アニメーション
  const [stylesPopup, startStylesPopup] = useSpring(() => ({
    from: { opacity: 1, transform: "scale(1) rotateZ(0)" },
  }));
  const stylesPopupProps = useMemo(() => {
    return {
      from: { opacity: 0, transform: "scale(0.33) rotateZ(-60deg)" },
      to: { opacity: 1, transform: "scale(1) rotateZ(0)" },
      config: { tension: 130 },
    };
  }, []);

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
      setActiveCategory(n);
      startStylesPopup.start(stylesPopupProps);
    },
    [startStylesPopup, stylesPopupProps]
  );
  const handleYear = useCallback(
    (e: any) => {
      setActiveYear(e.target.value);
      startStylesPopup.start(stylesPopupProps);
    },
    [startStylesPopup, stylesPopupProps]
  );

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
      <button onClick={() => setModalShow(true)} className={styles.charaTerms}>
        規約
      </button>
      <div className={styles.refineFilter}>
        <button
          onClick={() => handleCategory(0)}
          className={activeCategory === 0 ? styles.active : ""}
        >
          全て
        </button>
        <button
          onClick={() => handleCategory(1)}
          className={activeCategory === 1 ? styles.active : ""}
        >
          オリジナル
        </button>
        <button
          onClick={() => handleCategory(2)}
          className={activeCategory === 2 ? styles.active : ""}
        >
          よその子
        </button>
        <button
          onClick={() => handleCategory(3)}
          className={activeCategory === 3 ? styles.active : ""}
        >
          版権
        </button>
        <select
          name="yearFilter"
          onChange={handleYear}
          className={styles.refineYear}
        >
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
            activeYear == item.year &&
            (activeCategory === 0 || activeCategory === item.category)
          ) {
            return (
              <animated.a
                key={item.id}
                style={stylesPopup}
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
              </animated.a>
            );
          }
          return null;
        })}
      </LightGallery>
      <ModalWindow
        content={Terms()}
        show={modalShow}
        firstShow={true}
        setShow={setModalShow}
        storage="worksIsVisited"
      />
    </>
  );
};
