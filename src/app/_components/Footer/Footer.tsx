/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import styles from "@/app/_components/Footer/Footer.module.scss";
import Image from "next/image";

// 現在の年を取得
const now = new Date();
const year = now.getFullYear();

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyRight}>&copy;{year} Syar Star Observatory</p>
      <p className={styles.legalInfo}>Legal</p>
    </footer>
  );
};
