import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Quotes({ anime }) {
  const [quoteData, setQuote] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newQuote, setNewQuote] = useState(false);

  const anotherQuote = () => {
    setNewQuote((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://animechan.xyz/api/random/anime?title=${anime}`, {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        const json = await response.json();
        setQuote(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [anime, newQuote]);

  if (hasError) {
    return <div>Something went wrong!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="Quote-container">
      <h2>{quoteData.quote}</h2>
      <p>{quoteData.character}</p>
      <button type="button" onClick={anotherQuote}>Another One!</button>
    </div>
  );
}

Quotes.propTypes = {
  anime: PropTypes.string.isRequired,
};
