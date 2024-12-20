import React from 'react';

import Toast from '../Toast';
import { useToasts } from '../ToastProvider/ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const {toasts, dismissToast} = useToasts();

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite">
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast dismissToast={dismissToast} {...toast} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
