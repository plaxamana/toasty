import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import styles from './Toast.module.css';;

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const getIcon = ({ variant }) => ICONS_BY_VARIANT[variant]

function Toast({ message, variant, dismissToast, id }) {
  const CustomIcon = getIcon({variant});

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <CustomIcon size={24} />
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button 
        className={styles.closeButton} 
        onClick={() => dismissToast(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
