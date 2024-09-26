/* 
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
import { DrawX, DrawY, DrawScale } from "@/_util/Draw";
import { useTick } from "@pixi/react";

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

// 百花
export const Momoka = (props: { windowSize: Vec2 }): JSX.Element => {
  // Spineのデータ
  const [spineData, setSpineData] = useState<Spine | undefined>(undefined);
  // アニメーションの状態
  const [animationState, setAnimationState] = useState<
    AnimationState | undefined
  >(undefined);
  // カウント
  const [count, setCount] = useState<number>(0);
  // 瞬き
  const [winkTime, setWinkTime] = useState<number>(Math.random() * 6 + 3);
  // 独自アニメーション
  const [customPlaying, setCustomPlaying] = useState<boolean>(false);
  const [customTime, setCustomTime] = useState<number>(Math.random() * 10 + 15);

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
      // リスナー
      state.addListener({
        complete: (entry) => {
          if (entry.animation?.name === "kubi-kashige") {
            state.addEmptyAnimation(2);
            setCustomPlaying(false);
          }
        },
      });
    }
    setAnimationState(state);
  }, []);

  // アニメーション
  useTick((delta: number) => {
    setCount((count) => count + delta / 60);
    if (animationState) {
      if (count >= customTime) {
        setCustomPlaying(true);
        animationState.addAnimation(2, "kubi-kashige", false);
        setCustomTime((customTime) => customTime + Math.random() * 10 + 20);
      }
      if (!customPlaying && count >= winkTime) {
        animationState.addAnimation(1, "wink", false);
        setWinkTime((winkTime) => winkTime + Math.random() * 6 + 3);
      }
    }
  });

  // にこにこ
  const smile = useCallback(() => {
    if (animationState) {
      animationState.setAnimation(1, "smile", false);
      setWinkTime((winkTime) => winkTime + Math.random() * 6 + 3);
    }
  }, [animationState]);

  // 描画
  if (spineData) {
    return (
      <SpineSprite
        spineData={spineData.state.data.skeletonData}
        x={DrawX(70, props.windowSize)}
        y={DrawY(57.5, props.windowSize)}
        scale={DrawScale(0.6, props.windowSize)}
        eventMode="static"
        cursor="pointer"
        pointerdown={smile}
        mixes={mixes}
        initialAnimation={initAnime}
      />
    );
  }
  return <></>;
};

// 二葉
export const Futaba = (props: { windowSize: Vec2 }): JSX.Element => {
  // Spineのデータ
  const [spineData, setSpineData] = useState<Spine | undefined>(undefined);
  // アニメーションの状態
  const [animationState, setAnimationState] = useState<
    AnimationState | undefined
  >(undefined);
  // カウント
  const [count, setCount] = useState<number>(0);
  // 瞬き
  const [winkTime, setWinkTime] = useState<number>(Math.random() * 6 + 3);
  // 独自アニメーション
  const [customPlaying, setCustomPlaying] = useState<boolean>(false);
  const [customTime, setCustomTime] = useState<number>(Math.random() * 10 + 15);

  // スプライト読み込み
  useEffect(() => {
    PIXI.Assets.loadBundle("futaba").then(() => {
      setSpineData(Spine.from("futabaData", "futabaAtlas"));
    });
  }, []);

  // 最初のアニメーションの設定
  const initAnime = useCallback((state: AnimationState) => {
    if (state) {
      state.setAnimation(0, "idle", true);
      // リスナー
      state.addListener({
        complete: (entry) => {
          if (entry.animation?.name === "pet") {
            state.addEmptyAnimation(2);
            setCustomPlaying(false);
          }
        },
      });
    }
    setAnimationState(state);
  }, []);

  // アニメーション
  useTick((delta: number) => {
    setCount((count) => count + delta / 60);
    if (animationState) {
      if (count >= customTime) {
        setCustomPlaying(true);
        animationState.addAnimation(2, "pet", false);
        setCustomTime((customTime) => customTime + Math.random() * 10 + 20);
      }
      if (!customPlaying && count >= winkTime) {
        animationState.addAnimation(1, "wink", false);
        setWinkTime((winkTime) => winkTime + Math.random() * 6 + 3);
      }
    }
  });

  // にこにこ
  const smile = useCallback(() => {
    if (animationState) {
      animationState.setAnimation(1, "smile", false);
      setWinkTime((winkTime) => winkTime + Math.random() * 6 + 3);
    }
  }, [animationState]);

  // 描画
  if (spineData) {
    return (
      <SpineSprite
        spineData={spineData.state.data.skeletonData}
        x={DrawX(30, props.windowSize)}
        y={DrawY(57.5, props.windowSize)}
        scale={DrawScale(0.6, props.windowSize)}
        eventMode="static"
        cursor="pointer"
        pointerdown={smile}
        mixes={mixes}
        initialAnimation={initAnime}
      />
    );
  }
  return <></>;
};

// あいつ1
export const Aitsu1 = (props: { windowSize: Vec2 }): JSX.Element => {
  // Spineのデータ
  const [spineData, setSpineData] = useState<Spine | undefined>(undefined);
  // アニメーションの状態
  const [animationState, setAnimationState] = useState<
    AnimationState | undefined
  >(undefined);

  // スプライト読み込み
  useEffect(() => {
    PIXI.Assets.loadBundle("aitsu-1").then(() => {
      setSpineData(Spine.from("aitsu-1Data", "aitsu-1Atlas"));
    });
  }, []);

  // 最初のアニメーションの設定
  const initAnime = useCallback((state: AnimationState) => {
    if (state) {
      state.setAnimation(0, "animation", true);
    }
    setAnimationState(state);
  }, []);

  // 描画
  if (spineData) {
    return (
      <SpineSprite
        spineData={spineData.state.data.skeletonData}
        x={DrawX(14.5, props.windowSize)}
        y={DrawY(72, props.windowSize)}
        scale={DrawScale(0.6, props.windowSize)}
        initialAnimation={initAnime}
      />
    );
  }
  return <></>;
};

// あいつ2
export const Aitsu2 = (props: { windowSize: Vec2 }): JSX.Element => {
  // Spineのデータ
  const [spineData, setSpineData] = useState<Spine | undefined>(undefined);
  // アニメーションの状態
  const [animationState, setAnimationState] = useState<
    AnimationState | undefined
  >(undefined);

  // スプライト読み込み
  useEffect(() => {
    PIXI.Assets.loadBundle("aitsu-2").then(() => {
      setSpineData(Spine.from("aitsu-2Data", "aitsu-2Atlas"));
    });
  }, []);

  // 最初のアニメーションの設定
  const initAnime = useCallback((state: AnimationState) => {
    if (state) {
      state.setAnimation(0, "animation", true);
    }
    setAnimationState(state);
  }, []);

  // 描画
  if (spineData) {
    return (
      <SpineSprite
        spineData={spineData.state.data.skeletonData}
        x={DrawX(50, props.windowSize)}
        y={DrawY(85.5, props.windowSize)}
        scale={DrawScale(0.6, props.windowSize)}
        initialAnimation={initAnime}
      />
    );
  }
  return <></>;
};

// あいつ3
export const Aitsu3 = (props: { windowSize: Vec2 }): JSX.Element => {
  // Spineのデータ
  const [spineData, setSpineData] = useState<Spine | undefined>(undefined);
  // アニメーションの状態
  const [animationState, setAnimationState] = useState<
    AnimationState | undefined
  >(undefined);

  // スプライト読み込み
  useEffect(() => {
    PIXI.Assets.loadBundle("aitsu-3").then(() => {
      setSpineData(Spine.from("aitsu-3Data", "aitsu-3Atlas"));
    });
  }, []);

  // 最初のアニメーションの設定
  const initAnime = useCallback((state: AnimationState) => {
    if (state) {
      state.setAnimation(0, "animation", true);
    }
    setAnimationState(state);
  }, []);

  // 描画
  if (spineData) {
    return (
      <SpineSprite
        spineData={spineData.state.data.skeletonData}
        x={DrawX(92, props.windowSize)}
        y={DrawY(62.5, props.windowSize)}
        scale={DrawScale(0.6, props.windowSize)}
        initialAnimation={initAnime}
      />
    );
  }
  return <></>;
};
