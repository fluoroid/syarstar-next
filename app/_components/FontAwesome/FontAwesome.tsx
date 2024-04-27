/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const ExternalLinkIcon = (): JSX.Element => {
  return <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" />;
};

export const CloseIcon = (): JSX.Element => {
  return <FontAwesomeIcon icon={faXmark} size="1x" />;
};
