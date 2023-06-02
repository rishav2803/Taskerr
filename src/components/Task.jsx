import styles from "./Task.module.css"
import Todo from "./Todo";

export default function Task({hamburger,onHamburger}){

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
