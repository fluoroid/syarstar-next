/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import Image from "next/image";
import styles from "@/app/page.module.scss";
import {
  BreadCrumbMarkup,
  createBreadcrumbJsonLd,
} from "@/app/_components/BreadCrumbMarkup/BreadCrumbMarkup";

// JSON-LD data
const jsonLd = createBreadcrumbJsonLd([
  {
    pathname: "https://syarstar.net/",
    title: "トップ",
  },
]);

const Home = () => {
  return (
    <main className={styles.main}>
      <BreadCrumbMarkup data={jsonLd} />
      mainです
    </main>
  );
};

export default Home;
