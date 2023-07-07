/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import Quotes from './Quotes';

export default function Input() {
  const [showQuote, setShowQuote] = useState(false);
  const [quote, setQuote] = useState('');

  const handleClick = () => {
    let inputQuote = document.getElementById('input-quote').value.toLowerCase().trim();
    inputQuote = inputQuote.replace(' ', '%20');
    setQuote(inputQuote);
    setShowQuote(true);
  };

  return (
    <div id="input-container">
      <h1>Enter the anime!</h1>
      <span id="span-container">
        <input id="input-quote" type="text" required />
        <i className="fa-solid fa-right-to-bracket" onClick={handleClick} />
      </span>
      {showQuote && <Quotes anime={quote} />}
    </div>
  );
}
