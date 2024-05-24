import React, { useState, useEffect } from 'react';

const UpdateTitleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h2>Update Document Title</h2>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>You've clicked {count} times</p>
    </div>
  );
};

export default UpdateTitleComponent;
