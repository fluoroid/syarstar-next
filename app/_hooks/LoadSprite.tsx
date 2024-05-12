/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

"use client";
import { Assets, AssetsManifest } from "pixi.js";

// Manifest
const LOADINGLIST: AssetsManifest = {
  bundles: [
    {
      name: "momoka",
      assets: [
        {
          alias: "momokaData",
          src: "./sprite/momoka/momoka.skel",
        },
        {
          alias: "momokaAtlas",
          src: "./sprite/momoka/momoka.atlas",
        },
      ],
    },
  ],
};

// ロード
export const LoadSprite = async (): Promise<void> => {
  await Assets.init({ manifest: LOADINGLIST });
};
