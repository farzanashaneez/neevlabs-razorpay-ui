import React, { useState } from "react";
import { CreditCard, Home, Menu, Wallet } from "../../components/ui/Icons";
import HeaderActions from "./HeaderActions";
import { NavLink, NavDropdown, MobileNavLink, MobileSubLink } from "./Navigation";
import pageInfo from "../../data/pageInfo";
import logo from '../../assets/razorpay.png'; 


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState({});
  
  // Get current path to determine active link
  const currentPath = window.location.pathname;
  
  const toggleMobileSubmenu = (key) => {
    setExpandedMobileItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Helper function to check if a link is active
  const isActive = (path) => {
    if (path === '/dashboard' && (currentPath === '/' || currentPath === '/dashboard')) {
      return true;
    }
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  return (
    <header className="header-style pb-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 lg:space-x-8">
          <div className="flex items-center space-x-2 min-w-48 flex-shrink-0">
            <img
              src={logo}
              alt="Razorpay"
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2 items-center">
            <NavLink href="/dashboard" icon={Home} active={isActive('/dashboard')}>
              Razorpay Home
            </NavLink>
            <NavLink href="/payments" icon={CreditCard} active={isActive('/payments')}>
              Payments
            </NavLink>
            <NavDropdown label="Banking" pageKey="banking" active={isActive('/banking')} />
            <NavDropdown label="Payroll" icon={Wallet} pageKey="payroll" active={isActive('/payroll')} />
            <NavDropdown label="More" icon={CreditCard} pageKey="more" active={isActive('/more')} />
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
        
        {/* Right Side */}
        <div className="flex items-center h-full">
          <HeaderActions />
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-gray-200">
          <nav className="space-y-1">
            {/* Dashboard */}
            <MobileNavLink href="/dashboard" icon={Home} active={isActive('/dashboard')}>
              Razorpay Home
            </MobileNavLink>
            
            {/* Payments */}
            <MobileNavLink href="/payments" icon={CreditCard} active={isActive('/payments')}>
              Payments
            </MobileNavLink>
            
            {/* Banking with subcategories */}
            <div>
              <MobileNavLink
                hasSubcategories={true}
                onToggle={() => toggleMobileSubmenu('banking')}
                isExpanded={expandedMobileItems.banking}
                active={isActive('/banking')}
              >
                Banking
              </MobileNavLink>
              {expandedMobileItems.banking && pageInfo.banking.subcategories && (
                <div className="ml-4 mt-1 space-y-1">
                  {Object.entries(pageInfo.banking.subcategories).map(([subKey, subData]) => (
                    <MobileSubLink key={subKey} href={`/banking/${subKey}`} active={isActive(`/banking/${subKey}`)}>
                      {subData.title}
                    </MobileSubLink>
                  ))}
                </div>
              )}
            </div>
            
            {/* Payroll with subcategories */}
            <div>
              <MobileNavLink
                hasSubcategories={true}
                onToggle={() => toggleMobileSubmenu('payroll')}
                isExpanded={expandedMobileItems.payroll}
                active={isActive('/payroll')}
              >
                Payroll
              </MobileNavLink>
              {expandedMobileItems.payroll && pageInfo.payroll.subcategories && (
                <div className="ml-4 mt-1 space-y-1">
                  {Object.entries(pageInfo.payroll.subcategories).map(([subKey, subData]) => (
                    <MobileSubLink key={subKey} href={`/payroll/${subKey}`} active={isActive(`/payroll/${subKey}`)}>
                      {subData.title}
                    </MobileSubLink>
                  ))}
                </div>
              )}
            </div>
            
            {/* More with subcategories */}
            <div>
              <MobileNavLink
                hasSubcategories={true}
                onToggle={() => toggleMobileSubmenu('more')}
                isExpanded={expandedMobileItems.more}
                active={isActive('/more')}
              >
                More
              </MobileNavLink>
              {expandedMobileItems.more && pageInfo.more.subcategories && (
                <div className="ml-4 mt-1 space-y-1">
                  {Object.entries(pageInfo.more.subcategories).map(([subKey, subData]) => (
                    <MobileSubLink key={subKey} href={`/more/${subKey}`} active={isActive(`/more/${subKey}`)}>
                      {subData.title}
                    </MobileSubLink>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;