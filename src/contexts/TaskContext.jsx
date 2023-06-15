import React, { useState, useEffect, useContext } from "react";
import { firestore } from "../firebase";

export const TaskContext = React.createContext();

export function TaskProvider({ children }) {
  const [tasks,setTasks] = useState([]);
  const [selectedTask,setSelectedTask]=useState("");

  function storeTask(task){
    setTasks(task);
  }

  function updateTask(task) {
    const updatedTask=[...tasks];
    updatedTask[tasks.length]=task
    setTasks(updatedTask);
    return true;
  }

  function selectTask(taskId){
    setSelectedTask(taskId);
  }


  const value = {
    tasks,
    storeTask,
    updateTask,
    selectTask,
    selectedTask,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}
