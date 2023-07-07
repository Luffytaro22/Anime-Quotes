import { useState, useEffect } from 'react';

export default function Quotes() {
  const [quoteData, setQuote] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://animechan.xyz/api/random/anime?title=naruto');
        const json = await response.json();
        setQuote(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  });

  if (hasError) {
    return <div>Something went wrong!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="Quote-container">
      <h2>{quoteData[0].quote}</h2>
      <p>{quoteData[0].character}</p>
    </div>
  );
}
