/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import { NextPage } from "next";
import {
  BreadCrumbMarkup,
  createBreadcrumbJsonLd,
} from "@/_components/BreadCrumbMarkup/BreadCrumbMarkup";
import { TopPage } from "@/_components/TopPage/TopPage";

// JSON-LD data
const jsonLd = createBreadcrumbJsonLd([
  {
    pathname: "https://syarstar.net",
    title: "トップ",
  },
]);

const Home: NextPage = () => {
  return (
    <>
      <TopPage />
      <BreadCrumbMarkup data={jsonLd} />
    </>
  );
};

export default Home;
