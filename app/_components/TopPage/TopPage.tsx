/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

"use client";
import { useEffect, useLayoutEffect, MouseEvent } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "@/_components/TopPage/TopPage.module.scss";
import LoadingTop from "@/loading";
import { twoDimension } from "@/_d/twoDimension";
import { Stage, Container } from "@pixi/react";
import { getWindowSize } from "@/_hooks/GetWindowSize";
import { SpineSmaple } from "@/_components/Spine/SpineContent";
import { LoadSprite } from "@/_hooks/LoadSprite";

export const TopPage = (): JSX.Element => {
  // ウインドウサイズを取得
  const windowSize: twoDimension = getWindowSize();

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

  // canvasの右クリック無効
  const handleCanvasElement = (evt: MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
  };

  // スプライトのロード
  useLayoutEffect(() => {
    LoadSprite();
  }, []);

  // マウント時の処理
  useEffect(() => {
    // ラッパーを消す
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
    // ブラー
    setTimeout(() => {
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
    }, 1000);
  }, []);

  return (
    <>
      <main className={styles.main}>
        <animated.h1 style={stylesBlur}>眠星観測所へようこそ</animated.h1>
        <div className={styles.topCanvas} onContextMenu={handleCanvasElement}>
          {/* PixiApp */}
          <Stage
            width={windowSize.x}
            height={windowSize.y}
            options={{
              backgroundColor: { r: 0, g: 0, b: 0 },
              backgroundAlpha: 0,
            }}
          >
            <Container>
              <SpineSmaple windowSize={windowSize} />
            </Container>
          </Stage>
        </div>
      </main>
      <animated.div style={stylesWrapper} className={styles.loadingWrapper}>
        <LoadingTop />
      </animated.div>
    </>
  );
};
