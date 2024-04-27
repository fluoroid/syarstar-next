/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animateScroll, Events } from "react-scroll";
import { useSpring, animated } from "@react-spring/web";
import { isMobile } from "react-device-detect";
import styles from "@/_components/TopPage/TopPage.module.scss";
import LoadingTop from "@/loading";

export const TopPage = (): JSX.Element => {
  // マウスの座標
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // アニメーション
  const [stylesBlur, startStylesBlur] = useSpring(() => ({
    from: {
      filter: "blur(10px)",
      transform: "scale(1.02) translateZ(0)",
      opacity: 0,
    },
  }));
  const [stylesWrapper, startStylesWrapper] = useSpring(() => ({
    from: {
      opacity: 1,
      zIndex: 100,
    },
  }));
  // マウスイベントリスナ
  const mouseMoveListener = (event: any) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  // スクロール
  const scrollmRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 一番下まで移動
    scrollmRef?.current?.scrollIntoView();
    // ラッパーを消す(初回以外はかならず)
    startStylesWrapper.start({
      from: {
        opacity: 1,
        zIndex: 100,
      },
      to: {
        opacity: 0,
        zIndex: -100,
      },
    });
    // スクロール
    animateScroll.scrollToTop({
      duration: 3000,
      delay: 0,
      smooth: "easeInOutQuint",
    });
    Events.scrollEvent.register("end", () => {
      const duration = 1000;
      animateScroll.scrollMore(80, {
        duration: duration,
        smooth: true,
        ignoreCancelEvents: false,
      });
      // 1回でおしまい
      setTimeout(() => {
        Events.scrollEvent.remove("end");
        startStylesBlur.start({
          from: {
            filter: "blur(10px)",
            transform: "scale(1.02) translateZ(0)",
            opacity: 0,
          },
          to: {
            filter: "blur(0)",
            transform: "scale(1) translateZ(0)",
            opacity: 1,
          },
          config: { friction: 50 },
        });
        if (!isMobile) {
          window.addEventListener("mousemove", mouseMoveListener);
        }
      }, duration);
    });
    // アンマウント
    return () => {
      Events.scrollEvent.remove("end");
      if (!isMobile) {
        window.removeEventListener("mousemove", mouseMoveListener);
      }
    };
  }, []);

  return (
    <>
      <animated.div style={stylesWrapper} className={styles.loadingWrapper}>
        <LoadingTop />
      </animated.div>
      <main className={styles.main}>
        <animated.h1 style={stylesBlur}>眠星観測所へようこそ</animated.h1>
        <div className={styles.topImage}>
          <div
            className={styles.momoka}
            style={{
              transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            }}
          >
            <Image
              className={styles.momokaImg}
              src="/img/momoka.webp"
              alt="百花"
              fill
              sizes="1320px"
              priority
            />
          </div>
          <div
            className={styles.futaba}
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            }}
          >
            <Image
              className={styles.futabaImg}
              src="/img/futaba.webp"
              alt="百花"
              fill
              sizes="1320px"
              priority
            />
          </div>
          <div className={styles.bottomElement} ref={scrollmRef}></div>
        </div>
      </main>
    </>
  );
};
