import TaskForm from "../Form";
import UpdateForm from "../UpdateForm";
import styles from "./Modal.module.css";

export default function Modal({onDialogClose,taskStatus}){
  console.log(taskStatus);
  return(
      <div className={styles.dialog_overlay}>
        <div className={styles.dialog_box}>
          <i className="fa fa-times" onClick={() => onDialogClose(false)}></i>
          {taskStatus==="" && <TaskForm onClose={onDialogClose}/>}
          {taskStatus!=="" && <UpdateForm taskStatus={taskStatus} onClose={onDialogClose}/>}
        </div>
      </div>
  );

}
