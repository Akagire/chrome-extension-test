import React from 'react';
import { createRoot } from 'react-dom/client';

const Options = () => {
  return (
    <>
      <h1>Options</h1>
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Options />);
