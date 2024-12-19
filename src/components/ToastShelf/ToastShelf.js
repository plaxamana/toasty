import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, dismissToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, i) => (
        <Toast key={toast.id} dismissToast={dismissToast} {...toast} />
      ))}
    </ol>
  );
}

export default ToastShelf;
