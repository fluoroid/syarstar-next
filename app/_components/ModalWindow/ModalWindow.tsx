/* 
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
import { useSpring, animated } from "@react-spring/web";

export const ModalWindow = (props: {
  content: JSX.Element;
  show: boolean;
  firstShow: boolean;
  setShow: Dispatch<SetStateAction<any>>;
  storage?: string;
}): JSX.Element => {
  const [show, setShow] = useState(false);

  // ポップアップのアニメーション
  const stylesPopup = useSpring({ opacity: show ? 1 : 0, delay: 50 });

  useEffect(() => {
    setShow(props.show);
    // 最初に表示するかどうか
    if (
      props.firstShow &&
      props.show === false &&
      props.storage !== undefined
    ) {
      if (localStorage.getItem(props.storage) !== "true") {
        props.setShow(true);
        setShow(true);
        localStorage.setItem(props.storage, "true");
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
        <animated.div style={stylesPopup} className={styles.modalBody}>
          <div className={styles.content}>{props.content}</div>
          <button onClick={closeModal} className={styles.buttonOK}>
            <CloseIcon />
          </button>
        </animated.div>
      </div>
    );
  }
  return <></>;
};
