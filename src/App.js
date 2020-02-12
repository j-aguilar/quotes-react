import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data'



function App() {
  let quote = data.get()
  return (
    <div className="App">
      <main>
        <p>{`"${quote.quoteText}"`}</p>
        <p>{`--${quote.quoteAuthor}`}</p>
      </main>
    </div>
  );
}

export default App;
