import { useEffect, useState } from "react";
import "./App.css";
import { API_KEY } from "./ApiKey";
import axios from "axios";
import NewsList from "./components/NewsList";

const API_URL = `https://newsapi.org/v2/top-headlines`;
function App() {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    let pageNo = page + 1;
    setPage(pageNo);
    let response = await axios.get(API_URL, {
      params: { apiKey: API_KEY, country: "us", page: pageNo },
    });
    console.log(response.data, "->");
    let result = [...articles, ...response.data.articles];
    setArticles([...result]);
    setTotalResults(response.data.totalResults);
  };

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>News App</h1>
      <NewsList
        articles={articles}
        fetchArticles={fetchArticles}
        totalResults={totalResults}
      />
    </div>
  );
}

export default App;
