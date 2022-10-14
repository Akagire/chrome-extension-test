import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const Popup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    chrome.storage.sync.get(null, (options) => {
      if (options.currentCount !== undefined) {
        setCount(options.currentCount);
      }
    });
  }, []);

  const countUp = async () => {
    const newCOunt = count + 1;
    setCount(newCOunt);
    await chrome.storage.sync.set({
      currentCount: newCOunt,
    });
  };

  const countDown = async () => {
    const newCOunt = count - 1;
    setCount(newCOunt);
    await chrome.storage.sync.set({
      currentCount: newCOunt,
    });
  };

  return (
    <>
      <h1>Counter</h1>
      <div>
        <p>{count}</p>
        <button
          onClick={() => countUp()}
        >+</button>
        <button
          onClick={() => countDown()}
        >-</button>
      </div>
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Popup />);
