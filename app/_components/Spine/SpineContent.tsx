/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

"use client";
import { useState, useEffect, useCallback } from "react";
import { SpineMix, SpineSprite } from "@/_components/Spine/SpineSprite";
import { twoDimension } from "@/_d/twoDimension";
import { AnimationState, Spine } from "@esotericsoftware/spine-pixi";
import * as PIXI from "pixi.js";
import { DrawX, DrawY, DrawScale } from "@/_hooks/Draw";

// アニメーションのMixプロパティ
const mixes: SpineMix[] = [
  {
    from: "run",
    to: "jump",
    duration: 0.2,
  },
  {
    from: "jump",
    to: "run",
    duration: 0.4,
  },
  {
    from: "walk",
    to: "walk",
    duration: 0.4,
  },
];

// サンプルプログラム
export const SpineSmaple = (props: {
  windowSize: twoDimension;
}): JSX.Element => {
  // Spineのデータ
  const [spineData, setSpineData] = useState<Spine | undefined>(undefined);
  // アニメーションの状態
  const [animationState, setAnimationState] = useState<
    AnimationState | undefined
  >(undefined);

  // スプライト読み込み
  useEffect(() => {
    PIXI.Assets.add({
      alias: "spineboyData",
      src: "./sprite/spineboy/spineboy-pro.skel",
    });
    PIXI.Assets.add({
      alias: "spineboyAtlas",
      src: "./sprite/spineboy/spineboy-pma.atlas",
    });
    PIXI.Assets.load(["spineboyData", "spineboyAtlas"]).then(() => {
      setSpineData(Spine.from("spineboyData", "spineboyAtlas"));
    });
  }, []);

  // 最初のアニメーションの設定
  const initAnime = useCallback((state: AnimationState) => {
    if (state) {
      state.setAnimation(0, "run", true);
    }
    setAnimationState(state);
  }, []);

  // ジャンプ(動作検証用)
  const jump = useCallback(() => {
    if (animationState) {
      animationState.setAnimation(0, "jump", false);
      animationState.addAnimation(0, "run", true, 0);
    }
  }, [animationState]);

  // 描画
  if (spineData) {
    return (
      <SpineSprite
        spineData={spineData.state.data.skeletonData}
        x={DrawX(50, props.windowSize)}
        y={DrawY(100, props.windowSize)}
        scale={DrawScale(0.5, props.windowSize)}
        eventMode="static"
        cursor="pointer"
        pointerdown={jump}
        mixes={mixes}
        initialAnimation={initAnime}
      />
    );
  }
  return <></>;
};
