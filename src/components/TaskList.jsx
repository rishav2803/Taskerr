import {useContext, useEffect, useState} from "react";
import {TaskContext} from "../contexts/TaskContext";
import styles from "./TaskList.module.css";

 export default function TaskList(){
   // const[loading,setLoading]=useState(false);
   const {tasks,selectTask}=useContext(TaskContext);
   const [selected,setSelected]=useState("")

   // useEffect(() => {
   //   if (tasks.length === 0) {
   //     setLoading(true);
   //   } else {
   //     setLoading(false);
   //   }
   // }, [tasks]);

   function selectHandler(id){
     selectTask(id);
     setSelected(id);
   }

   return(
     <ul className={styles.list_container}>
       {tasks.map((task) => {
         return (
           <li key={task.id} onClick={()=>{selectHandler(task.id)}} className={`${styles.list_items} ${selected === task.id ? styles.selected : ""}`}>
             <i className="fa fa-tasks" style={{marginInline:"1rem"}}></i>
             {task.task_name}
           </li>
         );
       })}
     </ul>
   );
}
