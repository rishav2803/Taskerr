import React from 'react';
import styles from './Chatbox.module.css';
import Modal from './UI/Modal';

const Chatbox = ({ onDialogClose }) => {
  return (
    <Modal onClose={onDialogClose}>
      <div className={styles.chatbox}>
        <div className={styles.chatboxHeader}>Notes</div>
        <div className={styles.chatboxBody}>
          <div className={styles.chatboxNote}>
            <div className={styles.userIcon}>U</div>
            <div className={styles.noteText}>This is a note from user U.</div>
          </div>
          <div className={styles.chatboxNote}>
            <div className={styles.userIcon}>A</div>
            <div className={styles.noteText}>Another note from user A.</div>
          </div>
        </div>
        <div className={styles.chatboxInput}>
          <textarea placeholder="Type a note..." />
          <button className={styles.forwardButton}>Send</button>
        </div>
      </div>
    </Modal>
  );
};

export default Chatbox;

