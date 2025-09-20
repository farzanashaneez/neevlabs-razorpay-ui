import React, { useState } from "react";
import SidebarItem from "./SidebarItem";

const SidebarSection = ({
  title,
  items,
  showMore = 5, // Number of items to show before "More"
  showTitle = true,
  currentPath,
  onItemClick
}) => {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded ? items : items.slice(0, showMore);

  const toggleExpanded = () => setExpanded(prev => !prev);

  return (
    <div className="mb-6 first:mb-4">
      {showTitle && title && (
        <h3 className="text-[8px] font-medium text-gray-400 uppercase tracking-wide mb-2 px-3">
          {title}
        </h3>
      )}

      <nav className="space-y-0.5">
        {visibleItems.map((item, index) => (
          <SidebarItem
            key={index}
            {...item}
            active={currentPath === item.path}
            onClick={onItemClick}
          />
        ))}

        {items.length > showMore && (
          <div className="px-3 py-1.5">
            <span
              className="text-gray-600 text-xs cursor-pointer hover:text-blue-700 transition-colors font-medium"
              onClick={toggleExpanded}
            >
              {expanded ? "Show Less" : `+${items.length - showMore} More`}
            </span>
          </div>
        )}
      </nav>
    </div>
  );
};

export default SidebarSection;
