import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchKanyeQuote = async () => {
      try {
        const response = await fetch('https://api.kanye.rest/');
        const data = await response.json();
        setQuote(data.quote);
      } catch (error) {
        console.error('Error fetching Kanye quote:', error);
      }
    };

    fetchKanyeQuote();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontFamily: 'Arial, sans-serif' }}>Kanye West Quote Generator</h1>
      <p style={{ fontStyle: 'italic', fontSize: '18px' }}>{quote}</p>
    </div>
  );
}

export default App;
