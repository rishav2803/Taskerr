import React from 'react';
import styles from './NotificationsContainer.module.css';

const NotificationContainer = ({ onClose }) => {
  const notifications = [
    "You have invitation",
    "You have new message"
  ];
  return (
    <div className={styles.sidebar}>
      <button className={styles.closeButton} onClick={onClose}>×</button>
      <h2 className={styles.title}>Notifications</h2>
      <ul className={styles.notificationList}>
        {notifications.map((notification, index) => (
          <li key={index} className={styles.notificationItem}>
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationContainer;
