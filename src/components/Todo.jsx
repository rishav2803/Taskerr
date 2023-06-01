import Card from "./Card";
import styles from "./Todo.module.css"

export default function Todo(){
  const arr=["Searcht for the design","Select a fronetend","Start the fronend project","Start builing the backend","Get all the paper required "]
  return(
    <div className={styles.container}>
      <h1 className={styles.header}>Todo (3)</h1>
      {arr.map(a=>{
        return(
          <Card desc={a}/>
        );
      })}
    </div>
  )
}
