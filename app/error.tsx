/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

"use client";
import type { NextPage } from "next";
import styles from "@/general.module.scss";

const InternalServerError: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1>500 Internal Server Error</h1>
      <p>指定されたページは不具合により表示できませんでした……</p>
    </main>
  );
};

export default InternalServerError;
