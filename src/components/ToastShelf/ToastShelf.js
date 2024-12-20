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
        <Toast key={toast.id} dismissToast={dismissToast} {...toast} />
      ))}
    </ol>
  );
}

export default ToastShelf;
