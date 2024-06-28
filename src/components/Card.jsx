import styles from "./Card.module.css"


export default function Card({desc}){
  return(
    <>
      <div>
        <p className={styles.c}>Learn about dp</p>
        <div className={styles.replies_container}>
          <div className={styles.replies_curve}></div>
          <div className={styles.replies_box}>4 replies</div>
        </div>

      </div>
    </>
  )
}
