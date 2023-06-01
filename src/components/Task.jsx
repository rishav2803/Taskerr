import styles from "./Task.module.css"
import Todo from "./Todo";

export default function Task(){
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.btn}>
          <i className="fa fa-plus" style={{fontSize:".7rem;",marginRight:".4rem"}}></i>
          Add New Task
        </button>
      </div>
      <div className={styles.grid_container}>
        <Todo/>
        <Todo/>
        <Todo/>
      </div>
    </div>
  );
}
