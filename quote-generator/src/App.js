import { useState } from "react";
import "./App.css";
import axios from "axios";
const apiUrl = "https://api.adviceslip.com/advice";

function App() {
  const [advice, setAdvice] = useState(
    "Please click button to see your advice !!"
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleQuoteGenerate = async () => {
    setIsLoading(true);
    const response = await axios.get(apiUrl);
    setAdvice(response.data.slip.advice);
    setIsLoading(false);
    // console.log(response.data);
  };

  return (
    <div className="App">
      <h1> Quote Generator </h1>
      <section className="quote-container">
        {isLoading ? (
          <p className="quote">...</p>
        ) : (
          <blockquote className="quote">{advice}</blockquote>
        )}
      </section>
      <button className="default-btn" onClick={handleQuoteGenerate}>
        Give Me Advice
      </button>
    </div>
  );
}

export default App;
