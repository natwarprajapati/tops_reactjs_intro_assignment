import React from 'react';
import List from './renderlist/List';

const App = () => {
  const items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
  ];

  return (
    <div>
      <h1 style={{color:"blue"}}>List View Example </h1>
      <List items={items} />
    </div>
  );
};

export default App;
