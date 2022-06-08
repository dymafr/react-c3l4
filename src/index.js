import React from 'react';
import { createRoot } from 'react-dom/client';
import { Hello, Greeting } from './Hello';

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <Hello name="Jean" age={12} />
    <Hello name="Julie" age={32} />
    <Greeting />
  </>
);
