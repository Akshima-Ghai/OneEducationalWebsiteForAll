import {useState } from "react"

/**
 * 
 * @param {string} key localStorage key
 * @param {any} initialValue initialValue for ley
 * @returns {Array<string,Function} setter and getter
 */
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    // Allow value to be a function so we have same API as useState
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    // Save state
    setStoredValue(valueToStore);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(valueToStore));

  };

  return [storedValue, setValue];
}

export default useLocalStorage

