import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
import './App.css';

function App(props) {
  const [quote, setQuote] = useState({"text": "Loading", "author": ""})
  const [isSending, setIsSending] = useState(false)
  const sendRequest = useCallback(async () => {
    if (isSending) return
    setIsSending(true)
    let res = {"data": {"text": "Sorry there was an error", "author": ""}}
    try {
      res = await axios.get('https://crude-quote-api.herokuapp.com/')
    } catch (e) {
      console.log(e.message)
    } finally {
      setIsSending(false)
      setQuote(res.data)
    }
  }, [isSending])
  React.useEffect(() => {sendRequest()}, [])

  return (
    <div className="App">
      <main>
        <p>{`"${quote.text}"`}</p>
        {quote.author !== "" && <p>{`--${quote.author}`}</p>}
        <input type="button" disabled={isSending} onClick={sendRequest} value="random quote"/>
      </main>
    </div>
  );
}

export default App;
