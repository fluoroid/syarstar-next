/*!
https://qiita.com/kitao6/items/e66edc2704612098c129
*/

import { BreadcrumbList, WithContext } from "schema-dts";
import Script from "next/script";

// JSON-LDの作成
export type BreadcrumbItem = {
  pathname: string;
  title: string;
};

export const createBreadcrumbJsonLd = (
  items: BreadcrumbItem[]
): WithContext<BreadcrumbList> => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ pathname, title }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: title,
      item: pathname,
    })),
  };
};

// <script>の出力
interface Props {
  data: WithContext<BreadcrumbList>;
}
export const BreadCrumbMarkup = (Props: Props) => {
  return (
    <>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Props.data) }}
      />
    </>
  );
};
