import React from 'react';

const SidebarItem = ({ icon: Icon, label, active = false, onClick }) => {
  return (
    <a
      href="#"
      onClick={onClick}
      className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
        active 
          ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 shadow-sm' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </a>
  );
};

export default SidebarItem;