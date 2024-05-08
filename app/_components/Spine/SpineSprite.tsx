/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import * as PIXI from "pixi.js";
import { PixiComponent, applyDefaultProps } from "@pixi/react";
import {
  AnimationState,
  SkeletonData,
  Spine,
} from "@esotericsoftware/spine-pixi";

export type SpineMix = {
  from: string;
  to: string;
  duration: number;
};

export type SpineSpriteProps = {
  x?: number;
  y?: number;
  spineData: SkeletonData;
  scale?: number;
  visible?: boolean;
  tint?: number;
  delayLimit?: number;
  mixes?: SpineMix[];
  eventMode?: PIXI.EventMode;
  cursor?: PIXI.Cursor | undefined;
  initialAnimation?: (ref: AnimationState) => void;
  pointerdown?: PIXI.FederatedEventHandler<PIXI.FederatedPointerEvent>;
};

// <SpineSprite />コンポーネント
export const SpineSprite = PixiComponent<SpineSpriteProps, Spine>(
  "SpineSprite",
  {
    // Spineデータを作成
    create: ({ spineData }) => {
      const spine = new Spine(spineData);
      return spine;
    },
    // Props
    applyProps: (instance, oldProps, newProps) => {
      // props初期値
      const {
        mixes = [],
        scale = 1,
        initialAnimation,
        eventMode = "none",
        cursor = "default",
        pointerdown,
        ...newP
      } = newProps;
      applyDefaultProps(instance, oldProps, newP);
      // スケール
      instance.skeleton.scaleX = scale;
      instance.skeleton.scaleY = scale;
      // Mix
      mixes.forEach((mix: SpineMix) =>
        instance.state.data.setMix(mix.from, mix.to, mix.duration)
      );
      // インタラクティブ
      instance.eventMode = eventMode;
      instance.cursor = cursor;
      if (pointerdown) {
        instance.on("pointerdown", (e) => {
          pointerdown(e);
        });
      }
      // animationStateのコールバック
      if (initialAnimation) {
        initialAnimation(instance.state);
      }
    },
  }
);
