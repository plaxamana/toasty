import React, { useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toasts, setToasts] = useState([]);
  const [toastCount, setToastCount] = useState(0);
  const [message, setMessage] = useState('');
  const [toastType, setToastType] = useState('notice');
  const [showToast, setShowToast] = useState(false);

  const dismissToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  const addToast = (type, message) => {
    const currentToastCount = toastCount;
    const newToast = {
      id: currentToastCount,
      variant: type,
      message,
    };
    setToasts([...toasts, newToast]);
    setToastCount(toastCount + 1);
    setMessage('');
    setToastType('notice');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} dismissToast={dismissToast} />

      <form onSubmit={(event) => {
          event.preventDefault();
          addToast(toastType, message)
        }} 
        className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((type) => (
              <label key={`variant-${type}`} htmlFor={`variant-${type}`}>
                <input
                  id={`variant-${type}`}
                  type="radio"
                  name="variant"
                  value={type}
                  checked={type === toastType}
                  onChange={(e) => setToastType(e.target.value)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => setShowToast(!showToast)}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
