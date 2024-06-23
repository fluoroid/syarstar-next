/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

"use client";
import { useEffect, useState } from "react";
import { Vec2 } from "@/_d/Vec2";

// ヘッダーサイズ
const HEADER_HEIGHT: Readonly<number> = 78;
const FOOTER_HEIGHT: Readonly<number> = 60 + 32;

/**
 * ウインドウサイズを取得
 * @returns ウインドウサイズ
 */
export const getWindowSize = (): Vec2 => {
  // ウインドウサイズを格納する
  const [windowSize, setWindowSize] = useState({
    x: 0,
    y: 0,
  });

  // クライアントサイドのみ取得
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        let x: number = window.innerWidth;
        let y: number = window.innerHeight - 5;
        if (window.innerWidth > 2560) {
          x = 2560;
        }
        // アスペクト比を常に2:3に
        y = x * 1.5;
        setWindowSize({
          x: x,
          y: y,
        });
      };

      // ウインドウサイズの変更を取得
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return;
    }
  }, []);

  return windowSize;
};
