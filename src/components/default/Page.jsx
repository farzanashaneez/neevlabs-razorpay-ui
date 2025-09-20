import React from 'react';

const Page = ({ title }) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
          <p className="text-gray-500 mt-1">This section of the dashboard is currently under maintenance.</p>
        </div>

        {/* Content Placeholder */}
        <div className="flex items-center justify-center h-64 bg-gray-50 border border-dashed border-gray-300 rounded-md">
          <span className="text-gray-400 text-lg">Content will appear here</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
