import React, { useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import { useToasts } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { addToast } = useToasts();
  const [message, setMessage] = useState('');
  const [toastType, setToastType] = useState('notice');

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={(event) => {
          event.preventDefault();
          addToast(toastType, message)
          setMessage('');
          setToastType('notice');
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
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
