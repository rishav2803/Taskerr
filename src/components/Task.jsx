import {useContext, useState} from "react";
import {TaskContext} from "../contexts/TaskContext";
import Doing from "./Doing";
import Done from "./Done";
import styles from "./Task.module.css"
import Todo from "./Todo";
import Modal from "./UI/Modal";
import Welcome from "./UI/Welcome";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Task({hamburger,onHamburger}){
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const{tasks,selectedTask}=useContext(TaskContext);
  const task=tasks.filter(t=>t.id===selectedTask);


  function modalCloseHandler(val){
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

    // Get the task that was dragged
   const res = task[0].subtasks[source.index];
   res.status=destination.droppableId;
  };

  return(
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
          <i className="fa fa-plus" style={{fontSize:".7rem;",marginRight:".4rem"}}></i>
          Add New Task
        </button>
        {isDialogOpen && <Modal onDialogClose={modalCloseHandler}/>}
      </div>
      { task.length===0 ?<Welcome/>:
        <DragDropContext onDragEnd={onDragEnd}>
          <div className={styles.grid_container}>
            <Droppable droppableId="todo">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Todo subtasks={task[0].subtasks}/>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="doing">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Doing subtasks={task[0].subtasks}/>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="done">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Done subtasks={task[0].subtasks}/>
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
