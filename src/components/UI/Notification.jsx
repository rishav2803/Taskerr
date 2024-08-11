import React from 'react';
import styles from './Notification.module.css';

const Notification = ({ count = 10 }) => {

  return (
    <div className={styles.notification_container}>
      <div className={styles.bell_icon}>
        <i className="fa fa-bell"></i>
        {count > 0 && <span className={styles.badge}>{count}</span>}
      </div>
    </div>
  );
};

export default Notification;
