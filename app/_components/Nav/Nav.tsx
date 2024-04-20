/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import styles from "@/_components/Nav/Nav.module.scss";
import Image from "next/image";
import Link from "next/link";

// ナビゲーションデータ
type navItems = {
  id: number;
  href: string;
  src: string;
  text: string;
};
const NAVITEMS: navItems[] = [
  {
    id: 1,
    href: "./about",
    src: "/img/star.png",
    text: "About",
  },
  {
    id: 2,
    href: "",
    src: "/img/star.png",
    text: "Discover",
  },
  {
    id: 3,
    href: "./characters",
    src: "/img/star.png",
    text: "うちの子",
  },
  {
    id: 4,
    href: "./works",
    src: "/img/star.png",
    text: "作品",
  },
  {
    id: 5,
    href: "./link",
    src: "/img/star.png",
    text: "リンク",
  },
];

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {NAVITEMS.map((item) => {
          return (
            <Link key={item.id} href={item.href}>
              <li>
                <Image
                  className={styles.navIcon}
                  src={item.src}
                  alt="icon"
                  width={32}
                  height={32}
                  priority
                />
                <span className={styles.navText}>{item.text}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
