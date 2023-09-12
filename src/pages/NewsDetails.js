import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNewsDetails, analyzeSentiment } from '../api';
import NewsDetailInfo from '../components/NewsDetailsInfo';
import NewsDetailsSentimentAnalysis from '../components/NewsDetailsSentimentAnalysis';

const NewsDetails = () => {
  const { newsUrl } = useParams();
  const [newsDetails, setNewsDetails] = useState(null);
  const [sentimentData, setSentimentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNewsDetails(newsUrl)
      .then(data => {
        setNewsDetails(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [newsUrl]);

  useEffect(() => {
    if (newsDetails && newsDetails.content) {
      analyzeSentiment(newsDetails.content)
        .then(sentiment => {
          setSentimentData(sentiment);
        })
        .catch(err => {
          console.error('Error analyzing sentiment:', err);
        });
    }
  }, [newsDetails]);

  if (loading) return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="p-5 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 text-center">
        <p>Loading...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="p-5 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-red-100 text-center">
        <h3 className="text-xl font-semibold mb-3 text-red-700">Error</h3>
        <p className="text-red-600">{error}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {newsDetails && (
        <div className="p-5 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 hover:bg-blue-100 active:bg-blue-200">
          <NewsDetailInfo newsDetails={newsDetails} />
        </div>
      )}
      {sentimentData && (
        <div className="p-5 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 hover:bg-blue-100 active:bg-blue-200">
          <NewsDetailsSentimentAnalysis sentimentData={sentimentData} />
        </div>
      )}
    </div>
  );
};

export default NewsDetails;
