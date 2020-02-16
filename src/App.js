import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data'



function App() {
  const [quote, setQuote] = useState(data.get())
  return (
    <div className="App">
      <main>
        <p>{`"${quote.quoteText}"`}</p>
        {quote.quoteAuthor !== "" && <p>{`--${quote.quoteAuthor}`}</p>}
        <button onClick={() => setQuote(data.get())}>Random quote</button>
      </main>
    </div>
  );
}

export default App;
