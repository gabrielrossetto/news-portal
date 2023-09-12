import React from 'react';
import PropTypes from 'prop-types';

const NewsDetailInfo = ({ newsDetails }) => (
  <div>
    <h3 className="text-2xl font-semibold mb-3 hover:text-blue-500 transition-colors duration-200">
      {newsDetails.title}
    </h3>
    <img src={newsDetails.urlToImage} alt={newsDetails.title} className="w-full rounded-lg mb-5 shadow-sm" />
    <p className="text-gray-600 mb-5">{newsDetails.description}</p>
    <a href={newsDetails.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      Read more
    </a>
  </div>
);

export default NewsDetailInfo;

NewsDetailInfo.propTypes = {
  newsDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};
