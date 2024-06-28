import styles from "./FeatureCards.module.css";

export default function FeatureCard({title,description,icon}){
  return(
    <div className={styles.card}>
      <div className={styles.card_icon}>
        <i className={icon}></i>
      </div>
      <div className={styles.card_content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.divider}></div>
        <p className={styles.description}>{description}</p>
        {/* <button className={styles.button}>Learn More</button> */}
      </div>
    </div>
  );
}
