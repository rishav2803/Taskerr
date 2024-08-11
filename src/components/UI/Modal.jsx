import styles from "./Modal.module.css";

export default function Modal({ onDialogClose, children }) {
  return (
    <div className={styles.dialog_overlay}>
      <div className={styles.dialog_box}>
        <i className="fa fa-times" onClick={() => onDialogClose(false)}></i>
        {children}
      </div>
    </div>
  );

}
