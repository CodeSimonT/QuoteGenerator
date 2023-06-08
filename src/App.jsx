import { useState, useEffect } from "react";

const App = () => {
  const [quote, setQuote] = useState([]);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      setQuote(data);
      console.log(quote);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  if (!quote) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container">
      <div className="child">
        <h3>{quote.quote}</h3>
        <p>{quote.author}</p>
        <button className="buttons" onClick={fetchRandomQuote}>
          Generate
        </button>
      </div>
    </section>
  );
};

export default App;
