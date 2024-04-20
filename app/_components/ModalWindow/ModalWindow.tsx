/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

"use client";
import { useState, useEffect } from "react";
import styles from "@/_components/ModalWindow/ModalWindow.module.scss";
import { CloseIcon } from "@/_components/FontAwesome/FontAwesome";

type ModalWindowProps = {
  content: JSX.Element;
  storage: string;
};

export const InitialModalWindow = (props: ModalWindowProps) => {
  const [show, setShow] = useState(false);

  // 表示するかどうかを判定
  useEffect(() => {
    if (sessionStorage.getItem(props.storage) === "true") {
      return;
    }
    setShow(true);
    sessionStorage.setItem(props.storage, "true");
  }, [props.storage]);

  // 閉じる
  const closeModal = () => {
    setShow(false);
  };

  if (show) {
    return (
      <div className={styles.overlay}>
        <div className={styles.modalBody}>
          <div className={styles.content}>{props.content}</div>
          <button onClick={closeModal} className={styles.buttonOK}>
            <CloseIcon />
          </button>
        </div>
      </div>
    );
  }
  return null;
};
