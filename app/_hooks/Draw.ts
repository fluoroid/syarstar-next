/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import { Vec2 } from "@/_d/Vec2";

/**
 * x座標の位置を計算
 * @param x 左から何%か(0%～100%)
 * @param windowSize ウインドウサイズ
 * @returns 描画x座標
 */
export const DrawX = (x: number, windowSize: Vec2): number => {
  return (windowSize.x * x) / 100;
};

/**
 * y座標の位置を計算
 * @param y 上から何%か(0%～100%)
 * @param windowSize ウインドウサイズ
 * @returns 描画y座標
 */
export const DrawY = (y: number, windowSize: Vec2): number => {
  return (windowSize.y * y) / 100;
};

/**
 * 表示スケールを計算(仮想高さは1920px)
 * @param scale スケール(0～1)
 * @param windowSize ウインドウサイズ
 * @returns 実際のサイズ
 */
export const DrawScale = (scale: number, windowSize: Vec2): number => {
  if (windowSize.y < windowSize.x) {
    return (scale * windowSize.y) / 1080;
  } else {
    return (scale * windowSize.x) / 1920;
  }
};
