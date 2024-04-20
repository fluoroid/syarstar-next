/*! 
Copyright (c) 2024 Fluoroid (Syar Star Observatory)
This software is released under the MIT License, see LICENSE.
This website contents (docs, images...) are released under the CC BY-NC-ND 4.0 License, see LICENSE.
*/

"use client";
import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import styles from "@/_components/ModalWindow/ModalWindow.module.scss";
import { CloseIcon } from "@/_components/FontAwesome/FontAwesome";

type ModalWindowProps = {
  content: JSX.Element;
  show: boolean;
  firstShow: boolean;
  setShow: Dispatch<SetStateAction<any>>;
  storage?: string;
};

export const ModalWindow = (props: ModalWindowProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.show);
    // 最初に表示するかどうか
    if (
      props.firstShow &&
      props.show === false &&
      props.storage !== undefined
    ) {
      if (sessionStorage.getItem(props.storage) !== "true") {
        props.setShow(true);
        setShow(true);
        sessionStorage.setItem(props.storage, "true");
      }
    }
  }, [props]);

  // 閉じる
  const closeModal = useCallback(() => {
    props.setShow(false);
  }, [props]);

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
