/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

"use client";
import { useEffect, useLayoutEffect, MouseEvent, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "@/_components/TopPage/TopPage.module.scss";
import LoadingTop from "@/loading";
import { Vec2 } from "@/_d/Vec2";
import * as PIXI from "pixi.js";
import { Stage, Container, Sprite, SimpleMesh, useTick } from "@pixi/react";
import { getWindowSize } from "@/_util/GetWindowSize";
import {
  Aitsu1,
  Aitsu2,
  Aitsu3,
  Futaba,
  Momoka,
} from "@/_components/Spine/SpineContent";
import { LoadSprite } from "@/_util/LoadSprite";
import { DrawScale, DrawX, DrawY } from "@/_util/Draw";

export const TopPage = (): JSX.Element => {
  // ウインドウサイズを取得
  const windowSize: Vec2 = getWindowSize();

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
      delay: 750,
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
              antialias: true,
            }}
          >
            <Container>
              <Sprite
                image="./img/top/bg.webp"
                scale={DrawScale(0.95, windowSize)}
                anchor={0.5}
                x={DrawX(50, windowSize)}
                y={DrawY(47.5, windowSize)}
              />
              <Aitsu1 windowSize={windowSize} />
              <Aitsu3 windowSize={windowSize} />
              <Momoka windowSize={windowSize} />
              <Futaba windowSize={windowSize} />
              <Aitsu2 windowSize={windowSize} />
              <Sprite
                image="./img/top/bg_f.webp"
                scale={DrawScale(0.95, windowSize)}
                anchor={0.5}
                x={DrawX(50, windowSize)}
                y={DrawY(47.5, windowSize)}
              />
              <MeshShadow windowSize={windowSize} />
              <Sprite
                image="./img/top/shadow.webp"
                scale={DrawScale(0.95, windowSize)}
                anchor={0.5}
                x={DrawX(50, windowSize)}
                y={DrawY(47.5, windowSize)}
                blendMode={PIXI.BLEND_MODES.MULTIPLY}
              />
              <Sprite
                image="./img/top/light.webp"
                scale={DrawScale(0.95, windowSize)}
                anchor={0.5}
                x={DrawX(50, windowSize)}
                y={DrawY(47.5, windowSize)}
                blendMode={PIXI.BLEND_MODES.ADD}
              />
              <Sprite
                image="./img/top/screen.webp"
                scale={DrawScale(0.95, windowSize)}
                anchor={0.5}
                x={DrawX(50, windowSize)}
                y={DrawY(47.5, windowSize)}
                blendMode={PIXI.BLEND_MODES.SCREEN}
              />
              <Sprite
                image="./img/top/light2.webp"
                scale={DrawScale(0.95, windowSize)}
                anchor={0.5}
                x={DrawX(50, windowSize)}
                y={DrawY(47.5, windowSize)}
                blendMode={PIXI.BLEND_MODES.ADD}
              />
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

/**
 * 木陰
 */
const MeshShadow = (props: { windowSize: Vec2 }): JSX.Element => {
  // 画像サイズ
  const w: number = 2000;
  const h: number = 2000;
  // カウント
  const [count, setCount] = useState<number>(0);
  // Tickの状態
  const [state, setState] = useState({
    indices: new Uint16Array([
      0, 3, 4, 0, 1, 4, 1, 2, 4, 2, 4, 5, 3, 4, 6, 4, 6, 7, 4, 7, 8, 4, 5, 8,
    ]),
    uvs: new Float32Array([
      0, 0, 0.5, 0, 1, 0, 0, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 0.5, 1, 1, 1,
    ]),
    vertices: new Float32Array([
      0,
      0,
      w / 2,
      0,
      w,
      0,
      0,
      h / 2,
      w / 2,
      h / 2,
      w,
      h / 2,
      0,
      h,
      w / 2,
      h,
      w,
      h,
    ]),
  });

  // 動き
  useTick((delta: number) => {
    setCount((count) => count + 0.005 * delta);
    const vertices = new Float32Array(state.vertices);
    vertices[8] = w / 2 + Math.sin(count) * 100;
    vertices[9] = h / 2 + Math.cos(count) * 50 + 50;
    setState((prev) => {
      const newState = { ...prev, vertices: vertices };
      return newState;
    });
  });

  // 描画
  return (
    <SimpleMesh
      image="./img/top/shadow2.webp"
      scale={DrawScale(0.95, props.windowSize)}
      x={DrawX(0, props.windowSize)}
      y={DrawY(-2.5, props.windowSize)}
      uvs={state.uvs}
      vertices={state.vertices}
      indices={state.indices}
      drawMode={PIXI.DRAW_MODES.TRIANGLES}
      blendMode={PIXI.BLEND_MODES.MULTIPLY}
    />
  );
};
