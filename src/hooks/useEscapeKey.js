import { useEffect } from 'react';

export default function useEscapeKey(callback) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        callback(event);
      }
    }
    window.addEventListener('keydown', onKeyDown);
  
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    }
  }, [callback])
}