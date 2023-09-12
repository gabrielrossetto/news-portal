import axios from 'axios';

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const MEANINGCLOUD_API_KEY = process.env.REACT_APP_MEANINGCLOUD_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

const fetchTopHeadlines = async (country = 'us') => {
  const response = await axios.get(`${BASE_URL}/top-headlines?country=${country}&apiKey=${NEWS_API_KEY}`);
  return response.data.articles;
};

const fetchNewsDetails = async (title) => {
  const simplifiedTitle = title.split(' ').slice(0, 4).join(' ');
  const endpoint = `https://newsapi.org/v2/everything?q=${encodeURIComponent(simplifiedTitle)}&apiKey=${NEWS_API_KEY}`;

  const response = await axios.get(endpoint);

  if (response.status !== 200) {
    throw new Error(`Failed to fetch news details: ${response.statusText}`);
  }

  const data = response.data;
  return data.articles[0];
};

const analyzeSentiment = async (text) => {
  const url = `https://api.meaningcloud.com/sentiment-2.1`;
  const response = await axios.post(url, `key=${MEANINGCLOUD_API_KEY}&lang=en&txt=${encodeURIComponent(text)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `key=${MEANINGCLOUD_API_KEY}&lang=en&txt=${encodeURIComponent(text)}`
  });

  if (response.status !== 200) {
    throw new Error(`Failed to fetch sentiment analysis: ${response.statusText}`);
  }

  const data = response.data;
  return data;
};

export { fetchTopHeadlines, fetchNewsDetails, analyzeSentiment };