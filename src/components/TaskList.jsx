import styles from "./TaskList.module.css";

 export default function TaskList(){
   const list=["MajorProject","Internship","Dsa"];
   return(
     <ul className={styles.list_container}>
       {list.map((task) => {
         return (
           <li className={styles.list_items}>
             <i className="fa fa-tasks" style={{marginInline:"1rem"}}></i>
             {task}
           </li>
         );
       })}
     </ul>
   );
}
