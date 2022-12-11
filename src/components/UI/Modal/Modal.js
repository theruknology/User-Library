import React from "react";
import styles from "./Modal.module.css";

export default function Modal(props) {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onClose}></div>
      <div className={styles.modal}>
        <p>Please Enter Valid Input</p>
        <button onClick={props.onClose}>Ok</button>
      </div>
    </>
  );
}
