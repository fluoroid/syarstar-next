/* 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import Image from "next/image";
import Link from "next/link";
import styles from "@/_components/Header/Header.module.scss";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link href="./">
        <div className={styles.logoWrapper}>
          <Image
            className={styles.logo}
            src="/img/logo.webp"
            alt="トップ"
            fill
            sizes="195px"
            priority
          />
        </div>
      </Link>
    </header>
  );
};
