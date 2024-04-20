/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import Link from "next/link";
import styles from "@/_components/Footer/Footer.module.scss";

// 現在の年を取得
const now = new Date();
const year = now.getFullYear();

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy;{year} Syar Star Observatory</p>
      <p>
        <Link href="/legal" className={styles.legalInfo}>
          Legal Info.
        </Link>
      </p>
    </footer>
  );
};
