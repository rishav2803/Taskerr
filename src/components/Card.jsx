import { useState } from "react"
import styles from "./Card.module.css"
import Chatbox from "./ChatBox"


export default function Card({ desc }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <p className={styles.c}>{desc}</p>
        {/* <div className={styles.replies_container}> */}
        {/*   <div className={styles.replies_curve}></div> */}
        {/*   <div className={styles.replies_box} onClick={() => { setOpen(true) }}>4 replies</div> */}
        {/* </div> */}
      </div>

      {/* {open && <Chatbox />} */}
    </>
  )
}
