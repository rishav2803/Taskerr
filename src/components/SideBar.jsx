import {useContext, useState} from "react";
import {AuthContext} from "../contexts/AuthContext";
import styles from "./SideBar.module.css"
import TaskList from "./TaskList";
import DropDown from "./UI/DropDown";
import Logo from "./UI/Logo";

export default function SideBar({hamburger}){
  const [dropDown,setDropDown]=useState(false);

  const {currentUser}=useContext(AuthContext);
  return(
    <div className={`${styles.container} ${hamburger ? styles.show : ""}`}>
      <header className={styles.header}>
        <Logo/>
        <h1>Taskerr</h1>
      </header>
      <div className={styles.task_container}>
        <h4>All tasks (3)</h4>
        <TaskList/>
        {dropDown && <DropDown/>}
      </div>
      <footer className={styles.footer}>
        <div className={styles.profile}>
          <i className="fa fa-user"></i>
          <p>{currentUser.displayName}</p>
        </div>
        <i className="fa fa-ellipsis-h" onClick={()=>{setDropDown(!dropDown)}}></i>
      </footer>
    </div>
  );
}
