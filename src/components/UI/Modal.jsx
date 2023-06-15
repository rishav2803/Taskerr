import TaskForm from "../Form";
import styles from "./Modal.module.css";

export default function Modal({onDialogClose}){
  return(
      <div className={styles.dialog_overlay}>
        <div className={styles.dialog_box}>
          <i className="fa fa-times" onClick={() => onDialogClose(false)}></i>
          <TaskForm onClose={onDialogClose}/>
        </div>
      </div>
  );

}
