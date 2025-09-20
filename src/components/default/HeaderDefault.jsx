import React from "react";
import { Menu } from "../../components/ui/Icons";
import logo from "../../assets/razorpay.png";
import HeaderActions from "../header/HeaderActions";

const HeaderDefault = ({ title, onMobileMenuToggle }) => {
  return (
    <header className="header-style border-b border-gray-200 shadow-sm pb-0 bg-white">
      <div className="flex items-center justify-between px-4 lg:px-8 py-2">
        {/* Left: Mobile menu + Logo + Title */}
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors flex-shrink-0"
            onClick={onMobileMenuToggle}
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          
          {/* Logo */}
          <img 
            src={logo} 
            alt="Razorpay" 
            className="h-8 sm:h-10 lg:h-12 w-auto object-contain flex-shrink-0" 
          />
          
          {/* Title - only show on larger screens to save space */}
          {title && (
            <h1 className="hidden sm:block text-lg lg:text-xl font-semibold text-gray-900 truncate">
              {title}
            </h1>
          )}
        </div>

        {/* Right: Header Actions - Always visible but responsive */}
        <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4 flex-shrink-0">
          <HeaderActions />
        </div>
      </div>
      
      {/* Mobile title - show below header on small screens */}
      {title && (
        <div className="sm:hidden px-4 pb-2 border-b border-gray-100">
          <h1 className="text-base font-semibold text-gray-900 truncate">
            {title}
          </h1>
        </div>
      )}
    </header>
  );
};

export default HeaderDefault;