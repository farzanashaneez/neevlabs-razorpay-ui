import React, { useState } from 'react';
import { Search, TrendingUp, Megaphone } from 'lucide-react';

const HeaderActions = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:flex items-center bg-white rounded-lg h-full min-h-[48px] px-4 shadow-sm border border-gray-200">
        {/* Search Section */}
        <div className="flex items-center flex-1 min-w-0">
          <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search payment products, settings, and more"
            className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 text-sm"
          />
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-2 ml-4 border-l border-gray-200 pl-4">
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <TrendingUp className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <Megaphone className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
            NL
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex lg:hidden items-center space-x-2">
        {/* Search Button */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="p-2 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <Search className="w-5 h-5 text-gray-600" />
        </button>
        
        {/* Action Buttons */}
        <button className="p-2 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
          <TrendingUp className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
          <Megaphone className="w-5 h-5 text-gray-600" />
        </button>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm font-medium text-gray-700 shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
          NL
        </button>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-x-0 top-0 bg-white z-50 lg:hidden shadow-lg">
          <div className="p-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search payment products, settings, and more"
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-600 placeholder-gray-400"
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderActions;