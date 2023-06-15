import { useContext, useState } from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {TaskContext} from '../contexts/TaskContext';
import {insertTask} from '../service/TaskService';
import styles from "./Form.module.css";

function TaskForm({onClose}) {
  const [taskName, setTaskName] = useState('');
  const [status, setStatus] = useState('todo');
  const [date,setDate]=useState("");
  const [subtasks, setSubtasks] = useState([]);
  const{currentUser}=useContext(AuthContext);
  const{updateTask}=useContext(TaskContext);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

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
    if (subtasks.length < 4) {
      setSubtasks([...subtasks, '']);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const tasks = {
      deadline: date,
      subtasks: subtasks.map((subtask) => {
        return {
          description: subtask,
          status: status
        };
      }),
      task_name: taskName,
      user_id: currentUser.uid
    };
    console.log(tasks);
    try {
      const insertedTasks = await insertTask(tasks);
      if (updateTask(insertedTasks)) {
        onClose(false);
      }
    } catch (error) {
      console.log("Error inserting tasks:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.form_input}>
        <label>Task Name:</label>
        <input type="text" required value={taskName} onChange={handleTaskNameChange} />
      </div>
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
            <i className="fa fa-times"  onClick={() => handleDeleteSubtask(index)}></i>
          </div>
        ))}

        {/* if subtask is greater than 4 then the add button will disappear  */}
        {subtasks.length < 4 && (
          <button type="button" onClick={handleAddSubtask} className={`${styles.btn} ${styles.light}`}>
            Add Subtask
          </button>
        )}
      </div>
      <div className={styles.form_input}>
        <div>
          <label>Status:</label>
          <select  required value={status} onChange={handleStatusChange}>
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            required
            onChange={(e) => setDate(e.currentTarget.value)}
          />
        </div>
      </div>
      <button type="submit" className={`${styles.btn} ${styles.dark}`}>Submit</button>
    </form>
  );
}

export default TaskForm;
