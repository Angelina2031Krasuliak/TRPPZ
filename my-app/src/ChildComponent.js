import React, { useState } from 'react';

function ChildComponent({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>Дочірній компонент</h2>
      <p>Поточне значення: {count}</p>
      <button onClick={() => setCount(count + 1)}>Збільшити</button>
    </div>
  );
}

export default ChildComponent;
