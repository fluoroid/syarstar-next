/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

"use client";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import styles from "@/_components/Uchinoko/Uchinoko.module.scss";
import { ModalWindow } from "@/_components/ModalWindow/ModalWindow";
import { useSpring, animated } from "@react-spring/web";

// うちの子表示データ
type uchonokoData = Readonly<{
  id: number;
  name: string;
  src: string;
  description: {
    name: string;
    subname: string;
    subnameEn: string;
    age: number;
    height: number;
    birth: { month: number; day: number };
    text: JSX.Element;
  };
}>;
const UCHINOKO: uchonokoData[] = [
  {
    id: 0,
    name: "百花",
    src: "momoka",
    description: {
      name: "ももか",
      subname: "桜木 百花",
      subnameEn: "Sakuragi Momoka",
      age: 11,
      height: 138,
      birth: {
        month: 4,
        day: 4,
      },
      text: (
        <>
          <p>眠星に住む女の子。</p>
          <p>ちょっと控えな子だけれど、マイペースで抜けたところも。</p>
          <p>実は陰でふたばを支えているのはこの子。</p>
          <p>ふたばのことを「ふーちゃん」と呼ぶ。</p>
          <p>好きなもの：あまいもの、いちご</p>
        </>
      ),
    },
  },
  {
    id: 1,
    name: "二葉",
    src: "futaba",
    description: {
      name: "ふたば",
      subname: "生更木 二葉",
      subnameEn: "Kisaragi Futaba",
      age: 11,
      height: 136,
      birth: {
        month: 5,
        day: 25,
      },
      text: (
        <>
          <p>眠星に住む女の子。</p>
          <p>とっても元気の子で、よくももかと一緒にいる。</p>
          <p>
            根はしっかりしているはずなのに、すぐ調子に乗ってしまうこまったさん。
          </p>
          <p>ふたばのことを「もも」と呼ぶ。</p>
          <p>好きなもの：（砂糖入り）抹茶</p>
        </>
      ),
    },
  },
  {
    id: 2,
    name: "芽火",
    src: "meika",
    description: {
      name: "めいか",
      subname: "灯星 芽火",
      subnameEn: "Akariboshi Meika",
      age: 10,
      height: 132,
      birth: {
        month: 10,
        day: 18,
      },
      text: (
        <>
          <p>眠星観測所の賢者の一人。</p>
          <p>ほのみと組んで観測のお仕事をしている。主に事務担当。</p>
          <p>なかなかのわがままで、我を押し通そうとしてくる。</p>
          <p>でも時々デレるツンデレさん。</p>
          <p>好きなもの：金平糖</p>
        </>
      ),
    },
  },
  {
    id: 3,
    name: "帆之海",
    src: "honomi",
    description: {
      name: "ほのみ",
      subname: "月星 帆之海",
      subnameEn: "Tsukihoshi Honomi",
      age: 10,
      height: 136,
      birth: {
        month: 8,
        day: 7,
      },
      text: (
        <>
          <p>眠星観測所の賢者の一人。</p>
          <p>芽火と組んで観測のお仕事をしている。主に観測担当。</p>
          <p>物静かで、よく本を読んでいる。でもいつも眠そう……</p>
          <p>みんなには「ほのみん」と呼ばれている。</p>
          <p>好きなこと：昼寝</p>
        </>
      ),
    },
  },
];

// うちの子規約
const Terms = (): JSX.Element => {
  const termsNum: number[] = [1, 2, 3, 4];
  return (
    <>
      <h1>うちの子規約</h1>
      <p>創作などにおける、うちの子とのおやくそくだよ</p>
      <p>
        {termsNum.map((item) => {
          return (
            <Image
              key={item}
              className={styles.tremsicons}
              src={"/img/characters/terms/policy_" + item + ".webp"}
              alt="icon"
              width={96}
              height={96}
              priority
            />
          );
        })}
      </p>
    </>
  );
};

export const Uchinoko = (): JSX.Element => {
  // 表示中のキャラ
  const [activeChara, setActiveChara] = useState(0);
  // モーダルウインドウ
  const [modalShow, setModalShow] = useState(false);

  // アニメーション
  const [stylesPopup, startStylesPopup] = useSpring(() => ({
    from: { opacity: 1, transform: "scale(1)" },
  }));
  const stylesPopupProps = useMemo(() => {
    return {
      from: { opacity: 0, transform: "scale(0.5)" },
      to: { opacity: 1, transform: "scale(1)" },
      config: {
        friction: 19,
      },
    };
  }, []);

  // キャラを変更
  const changeCharacter = useCallback(
    (id: number) => {
      if (id !== activeChara) {
        setActiveChara(id);
        startStylesPopup.start(stylesPopupProps);
      }
    },
    [startStylesPopup, stylesPopupProps, activeChara]
  );

  // うちの子メイン画面
  const CharacterMain = (props: { data: uchonokoData }): JSX.Element => {
    return (
      <div className={styles.charawWindow}>
        <animated.div style={stylesPopup} className={styles.uchinokoWrapper}>
          <div className={styles.uchinokoImg}>
            <div className={styles.uchinokoDeco1}>
              <Image
                src={"/img/characters/deco" + props.data.id + ".webp"}
                alt="アイコン"
                fill
                sizes="853px"
                priority={false}
              />
            </div>
            <div className={styles.uchinokoDeco2}>
              <Image
                src={"/img/characters/deco" + props.data.id + ".webp"}
                alt="アイコン"
                fill
                sizes="853px"
                priority={false}
              />
            </div>
            <div className={styles.uchinokoDeco3}>
              <Image
                src={"/img/characters/deco" + props.data.id + ".webp"}
                alt="アイコン"
                fill
                sizes="400px"
                priority={false}
              />
            </div>
            <Image
              className={undefined}
              src={"/img/characters/" + props.data.src + ".webp"}
              alt={props.data.name}
              fill
              sizes="1920px"
              priority
            />
          </div>
          <div
            className={`${styles.uchinokoDescription} ${styles["charaThemeColor" + props.data.id]}`}
          >
            <div className={styles.charaName}>
              {props.data.description.name}
            </div>
            <div className={styles.charaSubName}>
              <ruby>
                ({props.data.description.subname}
                <rp>(</rp>
                <rt>{props.data.description.subnameEn}</rt>
                <rp>)</rp>)
              </ruby>
            </div>
            <div className={styles.charaStatus}>
              <span>
                {props.data.description.age}才　{props.data.description.height}{" "}
                cm　
                {props.data.description.birth.month}/
                {props.data.description.birth.day}生
              </span>
            </div>
            <div className={styles.charaDescription}>
              {props.data.description.text}
            </div>
          </div>
        </animated.div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.tabs}>
          {UCHINOKO.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => changeCharacter(item.id)}
                className={
                  styles.tabsList +
                  (activeChara === item.id ? " " + styles.active : "")
                }
              >
                <Image
                  className={styles.uchinokoNav}
                  src={"/img/characters/" + item.src + "_icon.webp"}
                  alt={item.name}
                  fill
                  sizes="108px"
                  priority
                />
              </li>
            );
          })}
        </ul>
        <CharacterMain data={UCHINOKO[activeChara]} />
      </div>
      <button onClick={() => setModalShow(true)} className={styles.charaTerms}>
        うちの子規約
      </button>
      <ModalWindow
        content={Terms()}
        show={modalShow}
        firstShow={false}
        setShow={setModalShow}
      />
    </>
  );
};
