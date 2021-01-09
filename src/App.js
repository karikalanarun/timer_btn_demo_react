import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function App() {
  let [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count + 1)
  }, 1000);
  return (
    <button onClick={() => setCount(0)}>Count {count}</button>
  );
}

export default App;
