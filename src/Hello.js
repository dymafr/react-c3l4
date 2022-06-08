import React from 'react';

export function Hello({ name, age }) {
  return (
    <h2>
      Hello {name}! Tu as {age} ans
    </h2>
  );
}

export function Greeting() {
  return <h2>Greetings</h2>;
}
