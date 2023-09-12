import React, { useState, useEffect } from 'react';
import { fetchTopHeadlines } from '../api';
import NewsList from '../components/NewsList';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const fetchedArticles = await fetchTopHeadlines();
      setArticles(fetchedArticles);
    }

    fetchNews();
  }, []);

  return <NewsList articles={articles} />;
};

export default Home;
