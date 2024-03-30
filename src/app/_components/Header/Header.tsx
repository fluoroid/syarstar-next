/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import styles from "@/app/_components/Header/Header.module.scss";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <Image
        className={styles.logo}
        src="/img/logo.png"
        alt="トップ"
        width={195}
        height={78}
        priority
      />
    </header>
  );
};
