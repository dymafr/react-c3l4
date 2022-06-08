import React from 'react';

export function Hello({ children }) {
  return (
    <>
      <h1>Hello world !</h1>
      {children}
    </>
  );
}

export function Greeting() {
  return <h2>Greetings</h2>;
}
