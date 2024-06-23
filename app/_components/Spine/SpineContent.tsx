/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

"use client";
import { useState, useEffect, useCallback } from "react";
import { SpineMix, SpineSprite } from "@/_components/Spine/SpineSprite";
import { Vec2 } from "@/_d/Vec2";
import { AnimationState, Spine } from "@esotericsoftware/spine-pixi";
import * as PIXI from "pixi.js";
import { DrawX, DrawY, DrawScale } from "@/_hooks/Draw";

// アニメーションのMixプロパティ
const mixes: SpineMix[] = [
  {
    from: "idle",
    to: "wink",
    duration: 0.1,
  },
  {
    from: "wink",
    to: "idle",
    duration: 0.1,
  },
];

// サンプルプログラム
export const SpineSmaple = (props: { windowSize: Vec2 }): JSX.Element => {
  // Spineのデータ
  const [spineData, setSpineData] = useState<Spine | undefined>(undefined);
  // アニメーションの状態
  const [animationState, setAnimationState] = useState<
    AnimationState | undefined
  >(undefined);

  // スプライト読み込み
  useEffect(() => {
    PIXI.Assets.loadBundle("momoka").then(() => {
      setSpineData(Spine.from("momokaData", "momokaAtlas"));
    });
  }, []);

  // 最初のアニメーションの設定
  const initAnime = useCallback((state: AnimationState) => {
    if (state) {
      state.setAnimation(0, "idle", true);
    }
    setAnimationState(state);
  }, []);

  // 瞬き(動作検証用)
  const wink = useCallback(() => {
    if (animationState) {
      animationState.setAnimation(1, "wink", false);
    }
  }, [animationState]);

  // 描画
  if (spineData) {
    return (
      <SpineSprite
        spineData={spineData.state.data.skeletonData}
        x={DrawX(50, props.windowSize)}
        y={DrawY(87, props.windowSize)}
        scale={DrawScale(0.33, props.windowSize)}
        eventMode="static"
        cursor="pointer"
        pointerdown={wink}
        mixes={mixes}
        initialAnimation={initAnime}
      />
    );
  }
  return <></>;
};
