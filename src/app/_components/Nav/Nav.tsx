/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import styles from "@/app/_components/Nav/Nav.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link href="./about">
          <li>
            <Image
              className={styles.navIcon}
              src="/img/star.png"
              alt="icon"
              width={32}
              height={32}
              priority
            />
            <span className={styles.navText}>About</span>
          </li>
        </Link>
        <Link href="">
          <li>
            <Image
              className={styles.navIcon}
              src="/img/star.png"
              alt="icon"
              width={32}
              height={32}
              priority
            />
            <span className={styles.navText}>Discover</span>
          </li>
        </Link>
        <Link href="./characters">
          <li>
            <Image
              className={styles.navIcon}
              src="/img/star.png"
              alt="icon"
              width={32}
              height={32}
              priority
            />
            <span className={styles.navText}>うちの子</span>
          </li>
        </Link>
        <Link href="./works">
          <li>
            <Image
              className={styles.navIcon}
              src="/img/star.png"
              alt="icon"
              width={32}
              height={32}
              priority
            />
            <span className={styles.navText}>作品</span>
          </li>
        </Link>
        <Link href="./link">
          <li>
            <Image
              className={styles.navIcon}
              src="/img/star.png"
              alt="icon"
              width={32}
              height={32}
              priority
            />
            <span className={styles.navText}>リンク</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
