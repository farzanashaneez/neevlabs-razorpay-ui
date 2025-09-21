import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import pageInfo from "../../data/pageInfo";

const NavLink = ({ href, icon: Icon, children, active = false }) => (
  <a
    href={href}
    className={`flex items-center whitespace-nowrap text-[8px] sm:text-xs transition-colors hover:text-gray-900 px-2 py-2 leading-none ${
      active ? "nav-active" : "text-gray-600"
    }`}
  >
    {Icon && <Icon className="w-5 h-5 pr-1" />}
    {children}
  </a>
);

const DropdownMenu = ({ icon: Icon, label, pageKey, active = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const subcategories = pageInfo[pageKey]?.subcategories || {};

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center whitespace-nowrap text-[8px] sm:text-xs transition-colors hover:text-gray-900 px-2 py-3 leading-none ${
          active ? "nav-active" : "text-gray-600"
        }`}
      >
        {Icon && <Icon className="w-4 h-4 pr-1" />}
        {label}
        <ArrowUpRight className="w-4 h-4 ml-1" />
        <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && Object.keys(subcategories).length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-64 dropdown shadow-lg rounded-md z-50">
          <div className="py-2">
            {Object.entries(subcategories).map(([subKey, subData], index) => (
              <React.Fragment key={subKey}>
                <a
                  href={`/home/${pageKey}/${subKey}`}
                  className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="font-medium">{subData.title}</div>
                </a>
                {/* Separation line except for last item */}
                {index < Object.entries(subcategories).length - 1 && (
                  <div className="mx-2 my-1 border-t border-gray-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const NavDropdown = ({ icon: Icon, label, pageKey, active = false }) => {
  const subcategories = pageInfo[pageKey]?.subcategories || {};
  
  if (Object.keys(subcategories).length === 0) {
    // If no subcategories, render as regular link
    return (
      <a
        href={`/home/${pageKey}`}
        className={`flex items-center whitespace-nowrap text-[8px] sm:text-xs transition-colors hover:text-gray-900 px-2 py-3 leading-none ${
          active ? "nav-active" : "text-gray-600"
        }`}
      >
        {Icon && <Icon className="w-4 h-4 pr-1" />}
        {label}
        <ArrowUpRight className="w-4 h-4 ml-1" />
      </a>
    );
  }

  return <DropdownMenu icon={Icon} label={label} pageKey={pageKey} active={active} />;
};

const MobileNavLink = ({ href, icon: Icon, children, active = false, hasSubcategories = false, onToggle, isExpanded = false }) => {
  if (hasSubcategories) {
    return (
      <button
        onClick={onToggle}
        className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-md font-medium transition-colors ${
          active
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        }`}
      >
        <div className="flex items-center">
          {Icon && <Icon className="w-5 h-5 mr-2" />}
          <span>{children}</span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
    );
  }

  return (
    <a
      href={href}
      className={`flex items-center px-3 py-2 rounded-md font-medium transition-colors ${
        active
          ? "bg-blue-50 text-blue-600"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      <span>{children}</span>
    </a>
  );
};

const MobileSubLink = ({ href, children, active = false }) => (
  <a
    href={href}
    className={`block px-6 py-2 text-sm transition-colors ${
      active 
        ? "bg-blue-50 text-blue-600 font-medium" 
        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
    }`}
  >
    {children}
  </a>
);

export { NavLink, NavDropdown, MobileNavLink, MobileSubLink, DropdownMenu };