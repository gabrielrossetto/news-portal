import React from 'react';
import PropTypes from 'prop-types';

const NewsDetailsSentimentAnalysis = ({ sentimentData }) => {
  const getConfidenceClass = (confidence) => {
    if (confidence > 75) return "bg-green-500 text-white";
    if (confidence > 50) return "bg-green-300";
    return "bg-yellow-300";
  };

  const { agreement, confidence, irony } = sentimentData;
  const agreementClass = agreement === "AGREEMENT" ? "bg-green-300 text-black" : "bg-red-300 text-black";
  const confidenceClass = getConfidenceClass(confidence);
  const ironyClass = irony === "IRONIC" ? "bg-yellow-300 text-black" : "bg-blue-300 text-black";

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="p-5 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 hover:bg-blue-100 active:bg-blue-200">
        <h3 className="text-xl font-semibold mb-3 text-gray-700">Sentiment Analysis</h3>
        <div className={`p-2 rounded ${agreementClass} mb-2`}>
          Agreement: {agreement}
        </div>
        <div className={`p-2 rounded ${confidenceClass} mb-2`}>
          Confidence: {confidence}%
        </div>
        <div className={`p-2 rounded ${ironyClass}`}>
          Irony: {irony}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsSentimentAnalysis;

NewsDetailsSentimentAnalysis.propTypes = {
  sentimentData: PropTypes.shape({
    agreement: PropTypes.string.isRequired,
    confidence: PropTypes.number.isRequired,
    irony: PropTypes.string.isRequired
  }).isRequired
};
