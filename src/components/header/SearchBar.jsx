import React, { useState } from 'react';
import { Search } from '../../components/ui/Icons';

const SearchBar = ({ placeholder = "Search transactions, customers..." }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="relative hidden md:block">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input 
        type="text" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="w-64 lg:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
    </div>
  );
};

export default SearchBar;