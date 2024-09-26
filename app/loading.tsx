/* 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import Image from "next/image";
import styles from "@/loading.module.scss";

const LoadingTop = (): JSX.Element => {
  return (
    <div className={styles.loadingTop}>
      <div className={styles.starImg}>
        <Image src="/img/star.webp" alt="星" fill sizes="128px" priority />
      </div>
      <span>Syarstar...</span>
      <ul>
        <li>L</li>
        <li>o</li>
        <li>a</li>
        <li>d</li>
        <li>i</li>
        <li>n</li>
        <li>g</li>
      </ul>
    </div>
  );
};

export default LoadingTop;
