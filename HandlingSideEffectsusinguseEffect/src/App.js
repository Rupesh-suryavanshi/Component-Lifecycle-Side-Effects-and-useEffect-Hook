import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchDataComponent from './FetchDataComponent';
import MouseEventComponent from './MouseEventComponent';
import UpdateTitleComponent from './UpdateTitleComponent';

function App() {
  return (
    <div className="App">
      <main>
        <FetchDataComponent />
        <MouseEventComponent />
        <UpdateTitleComponent />
      </main>
    </div>
  );
}

export default App;
