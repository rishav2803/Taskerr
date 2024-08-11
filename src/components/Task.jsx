import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Doing from "./Doing";
import Done from "./Done";
import styles from "./Task.module.css"
import Todo from "./Todo";
import Welcome from "./UI/Welcome";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskForm from "./Form";
import Chatbox from "./ChatBox";
import { updateSubTaskStatus } from "../service/TaskService";
import { useDebounce } from "../hooks/useDebounce"
import Notification from "./UI/Notification";


export default function Task({ hamburger, onHamburger }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { tasks, selectedTask, setTasks } = useContext(TaskContext);
  const task = tasks.filter(t => t.id === selectedTask);
  const debouncedTasks = useDebounce(tasks, 1000);


  useEffect(() => {
    if (debouncedTasks) {
      console.log("hello debounced here")
    }
  }, [debouncedTasks])


  function modalCloseHandler(val) {
    setIsDialogOpen(val);
  }

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Check if the task was dropped outside a droppable area
    if (!destination) {
      return;
    }

    // Check if the task was dropped in a different position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Clone the current subtasks array
    const updatedSubtasks = Array.from(task[0].subtasks);
    // Get the task that was dragged
    const [movedTask] = updatedSubtasks.splice(source.index, 1);
    movedTask.status = destination.droppableId;
    updatedSubtasks.splice(destination.index, 0, movedTask);

    // Update the tasks state
    const updatedTasks = tasks.map(t =>
      t.id === selectedTask ? { ...t, subtasks: updatedSubtasks } : t
    );
    setTasks(updatedTasks);
    updateSubTaskStatus(selectedTask, updatedSubtasks)
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          className={styles.hamburger}
          onClick={() => {
            onHamburger(!hamburger);
          }}
        >
          <i className={`fa fa-bars ${hamburger === false ? "" : styles.hid} `}></i>
          <i className={`fa fa-times ${hamburger === true ? styles.z : styles.hid}`}></i>
        </div>
        <button className={styles.btn} onClick={() => setIsDialogOpen(true)}>
          <i className="fa fa-plus" style={{ fontSize: ".7rem;", marginRight: ".4rem" }}></i>
          Add New Task
        </button>

        <Notification />
        {/* <div className={styles.notification_container}> */}
        {/*   <i className="fa fa-bell"></i> */}
        {/**/}
        {/* </div> */}
        {isDialogOpen && <TaskForm onClose={modalCloseHandler} />}
        {isChatOpen && <Chatbox onChat={setIsChatOpen} />}
      </div>
      {task.length === 0 ? <Welcome /> :
        <DragDropContext onDragEnd={onDragEnd}>
          <div className={styles.grid_container}>
            <Droppable droppableId="todo">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Todo subtasks={task[0].subtasks} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="doing">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Doing subtasks={task[0].subtasks} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="done">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Done subtasks={task[0].subtasks} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      }
    </div>
  );
}
