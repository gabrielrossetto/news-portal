import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NewsList = ({ articles }) => (
  <div className="max-w-4xl mx-auto p-6 space-y-6">
    {articles.map(article => (
      <div
        key={article.url}
        className="p-5 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 hover:bg-blue-100 active:bg-blue-200"
      >
        <h3 className="text-xl font-semibold mb-2 hover:text-blue-500 transition-colors duration-200">
          <Link to={`/news/${encodeURIComponent(article.title)}`}>
            {article.title}
          </Link>
        </h3>
        <p className="text-gray-600">{article.description}</p>
      </div>
    ))}
  </div>
);
export default NewsList;

NewsList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};
