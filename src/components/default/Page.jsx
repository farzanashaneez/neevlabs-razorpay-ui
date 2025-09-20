import React from 'react';

const Page = ({ title }) => {
  return (
    <div className="w-full max-w-full min-h-[calc(100vh-8rem)] bg-gray-100 p-4 sm:p-6 overflow-x-hidden">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 w-full">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 break-words">{title}</h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">This section of the dashboard is currently under maintenance.</p>
        </div>
        
        {/* Content Placeholder */}
        <div className="flex items-center justify-center h-48 sm:h-64 bg-gray-50 border border-dashed border-gray-300 rounded-md">
          <span className="text-gray-400 text-base sm:text-lg text-center px-4">Content will appear here</span>
        </div>
      </div>
    </div>
  );
};

export default Page;