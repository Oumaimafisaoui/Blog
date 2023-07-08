"use client"

import { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    document.title = `Count: ${count}`;

    // This cleanup function runs before the effect runs again or when the component unmounts
    return () => {
      document.title = 'React App'; // Reset the document title
    };
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default ExampleComponent;