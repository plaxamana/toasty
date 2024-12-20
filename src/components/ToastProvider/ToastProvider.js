import React, { createContext, useState, useContext } from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

const ToastContext = createContext(null);

export const useToasts = () => useContext(ToastContext);

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  useEscapeKey(() => {
    setToasts([]);
  })

  const dismissToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  const addToast = (type, message) => {
    setToasts(prevToasts => [...prevToasts,{
      id: crypto.randomUUID(),
      variant: type,
      message,
    }]);
  }

  const toastValue = { toasts, setToasts, dismissToast, addToast };

  return <ToastContext.Provider value={toastValue}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
