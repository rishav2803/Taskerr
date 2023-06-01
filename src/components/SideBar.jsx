import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";
import styles from "./SideBar.module.css"
import TaskList from "./TaskList";
import Logo from "./UI/Logo";

export default function SideBar(){
  const {currentUser}=useContext(AuthContext);

  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo/>
        <h1>Taskerr</h1>
      </header>
      <div className={styles.task_container}>
        <h4>All tasks (3)</h4>
        <TaskList/>
      </div>
      <footer className={styles.footer}>
        <div className={styles.profile}>
          <i className="fa fa-user"></i>
          <p>{currentUser.displayName}</p>
        </div>
        <i className="fa fa-ellipsis-h"></i>
      </footer>
    </div>
  );
}
