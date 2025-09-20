import React from "react";
import { Menu } from "../../components/ui/Icons";
import logo from "../../assets/razorpay.png";
import HeaderActions from "../header/HeaderActions";

const HeaderDefault = ({ title, onMobileMenuToggle }) => {
  return (
    <header className="header-style  border-b border-gray-200 shadow-sm pb-0">
      <div className="flex items-center justify-between px-4 lg:px-8 h-11">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Razorpay" className="h-12 w-auto object-contain" />
        </div>

       

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <HeaderActions />
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={onMobileMenuToggle}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default HeaderDefault;
