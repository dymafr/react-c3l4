import React from 'react';
import { createRoot } from 'react-dom/client';
import { Hello, Greeting } from './Hello';

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <Hello>
      <button>Cliquez</button>
    </Hello>
    <Greeting />
  </>
);
