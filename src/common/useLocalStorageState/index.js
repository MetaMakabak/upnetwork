import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    
    try {
      const localData = localStorage.getItem(key);
      return localData ? JSON.parse(localData) : defaultValue;
    } catch (error) {
      console.error('Error reading localStorage key “' + key + '“:', error);
      return defaultValue;
    }
  });

  useEffect(() => {
    
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error('Error setting localStorage key “' + key + '“:', error);
    }
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;
