import React from 'react';
import './styles/index.css';
import './App.css';
import Card from './Components/Card.jsx';

function App() {
  return (
    <div className="App flex flex-col items-center justify-center h-screen">
      <div className="w-2/5">
        <h1 className="text-white text-left text-4xl">COUNTRY QUIZ</h1>
        <Card />
      </div>
    </div>
  );
}

export default App;
