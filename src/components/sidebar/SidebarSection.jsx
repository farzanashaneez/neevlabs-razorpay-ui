import React from 'react';
import SidebarItem from './SidebarItem';

const SidebarSection = ({ 
  title, 
  items, 
  showMore = 0, 
  showTitle = true,
  onItemClick 
}) => {
  return (
    <div className="mt-8 first:mt-0">
      {showTitle && title && (
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          {title}
        </h3>
      )}
      <nav className="space-y-2">
        {items.map((item, index) => (
          <SidebarItem 
            key={index} 
            {...item}
            onClick={() => onItemClick && onItemClick(item)}
          />
        ))}
        {showMore > 0 && (
          <div className="px-3 py-2">
            <span className="text-blue-600 text-sm cursor-pointer hover:text-blue-700 transition-colors">
              +{showMore} More
            </span>
          </div>
        )}
      </nav>
    </div>
  );
};

export default SidebarSection;