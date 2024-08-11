import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { TaskContext } from '../contexts/TaskContext';
import { updateSubTask } from '../service/TaskService';
import styles from "./Form.module.css";
import Modal from "./UI/Modal"

function UpdateForm({ onClose, taskStatus }) {
  const [subtasks, setSubtasks] = useState([""]);
  const { currentUser } = useContext(AuthContext);
  const { updateTask, selectedTask } = useContext(TaskContext);

  //handle the text inside each subtask input
  const handleSubtaskChange = (index, e) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = e.target.value;
    setSubtasks(updatedSubtasks);
  };

  //Delete the currently added subtask
  const handleDeleteSubtask = (index) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks.splice(index, 1);
    setSubtasks(updatedSubtasks);
  };

  //handle the addition of new input textbox
  const handleAddSubtask = () => {
    if (subtasks.length < 6) {
      setSubtasks([...subtasks, '']);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const subtask = subtasks.map((name) => {
      return (
        {
          description: name,
          status: taskStatus
        }
      );
    });

    try {
      const res = await updateSubTask(subtask, currentUser.uid, selectedTask);
      console.log(res);
      if (updateTask(res)) {
        onClose(false);
      }
    } catch (error) {
      console.log("Error while updating the subtask", error);
    }
  };

  return (
    <Modal onDialogClose={onClose}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_input}>
          <label>Subtasks:</label>
          {subtasks.map((subtask, index) => (
            <div key={index} className={styles.subtask}>
              <input
                type="text"
                value={subtask}
                required
                onChange={(e) => handleSubtaskChange(index, e)}
              />
              <i className="fa fa-times" onClick={() => handleDeleteSubtask(index)}></i>
            </div>
          ))}
          {/* if subtask is greater than 6 then the add button will disappear  */}
          {subtasks.length < 6 && (
            <button type="button" onClick={handleAddSubtask} className={`${styles.btn} ${styles.light}`}>
              Add Subtask
            </button>
          )}

        </div>
        <button type="submit" className={`${styles.btn} ${styles.dark}`}>Submit</button>
      </form>
    </Modal>
  );
}

export default UpdateForm;
