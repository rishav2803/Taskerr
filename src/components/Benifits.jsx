import styles from "./Benifits.module.css";

const Benefits = () => {
  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.benefitsHeading}>Benefits</h2>
      <div className={styles.benefitsList}>
        <div className={styles.benefitItem}>
          <i className={`fas fa-check ${styles.benefitIcon}`}></i>
          <h3 className={styles.benefitTitle}>Increased Productivity</h3>
          <p className={styles.benefitDescription}>
            Stay organized and focused, accomplish more tasks in less time.
          </p>
        </div>
        <div className={styles.benefitItem}>
          <i className={`fas fa-check ${styles.benefitIcon}`}></i>
          <h3 className={styles.benefitTitle}>Efficient Task Management</h3>
          <p className={styles.benefitDescription}>
            Easily manage your tasks, set deadlines, and track progress.
          </p>
        </div>
        <div className={styles.benefitItem}>
          <i className={`fas fa-check ${styles.benefitIcon}`}></i>
          <h3 className={styles.benefitTitle}>Collaboration Made Easy</h3>
          <p className={styles.benefitDescription}>
            Collaborate with your team, assign tasks, and track team progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
