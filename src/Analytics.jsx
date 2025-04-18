import React from 'react';

const Analytics = ({ results }) => {
  if (!results || Object.keys(results).length === 0) {
    return <p className="text-center text-gray-500 mt-4">No search data available.</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Search Queries</h2>
      <ul className="divide-y divide-gray-200">
        {Object.entries(results).map(([query, count], index) => (
          <li key={index} className="py-2 flex justify-between">
            <span className="text-gray-800">{query}</span>
            <span className="text-gray-500">× {count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Analytics;
