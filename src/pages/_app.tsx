/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import "@/styles/globals.scss";
import type { AppProps } from "next/app";

const App =({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} {...pageInfo}/>;
}

export default App;