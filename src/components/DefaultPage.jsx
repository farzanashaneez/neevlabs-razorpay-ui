import React from 'react';

const DefaultPage = ({ title, description }) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-xl w-full bg-white shadow-md rounded-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default DefaultPage;
