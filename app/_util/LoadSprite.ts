/* 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

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
    {
      name: "futaba",
      assets: [
        {
          alias: "futabaData",
          src: "./sprite/futaba/futaba.skel",
        },
        {
          alias: "futabaAtlas",
          src: "./sprite/futaba/futaba.atlas",
        },
      ],
    },
    {
      name: "aitsu-1",
      assets: [
        {
          alias: "aitsu-1Data",
          src: "./sprite/aitsu-1/aitsu-1.skel",
        },
        {
          alias: "aitsu-1Atlas",
          src: "./sprite/aitsu-1/aitsu-1.atlas",
        },
      ],
    },
    {
      name: "aitsu-2",
      assets: [
        {
          alias: "aitsu-2Data",
          src: "./sprite/aitsu-2/aitsu-2.skel",
        },
        {
          alias: "aitsu-2Atlas",
          src: "./sprite/aitsu-2/aitsu-2.atlas",
        },
      ],
    },
    {
      name: "aitsu-3",
      assets: [
        {
          alias: "aitsu-3Data",
          src: "./sprite/aitsu-3/aitsu-3.skel",
        },
        {
          alias: "aitsu-3Atlas",
          src: "./sprite/aitsu-3/aitsu-3.atlas",
        },
      ],
    },
  ],
};

// ロード
export const LoadSprite = async (): Promise<void> => {
  await Assets.init({ manifest: LOADINGLIST });
};
