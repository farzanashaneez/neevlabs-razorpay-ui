
import React from 'react';
import {
  Home,
  CreditCard,
  FileText,
  Shield,
  Link2,
  Users,
  Building,
  Settings,
  X
} from '../../components/ui/Icons';
import Card from '../ui/Card';
import { sidebarItems, paymentProducts, customerProducts, accountSettings, BankingProducts } from '../../data/sidebarData';
import SidebarSection from './SidebarSection';



const Sidebar = ({ isOpen, onToggle, currentPath = '/', onNavigate }) => {
  const handleItemClick = (path, label) => {
    if (onNavigate) {
      onNavigate(path, label);
    }
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      onToggle();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onToggle}
        />
      )}
      
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-4">
          {/* Main Navigation */}
          <SidebarSection
            items={sidebarItems}
            showTitle={false}
            currentPath={currentPath}
            onItemClick={handleItemClick}
          />

          {/* Recommended Section */}
          <SidebarSection
            title="Recommended for you"
            items={[{ icon: Link2, label: 'Payment Links', path: '/payment-links' }]}
            currentPath={currentPath}
            onItemClick={handleItemClick}
          />

          {/* Payment Products */}
          <SidebarSection
            title="Payment Products"
            items={paymentProducts}
            currentPath={currentPath}
            showMore={3}
            onItemClick={handleItemClick}
          />
           <SidebarSection
            title="Banking Products"
            items={BankingProducts}
            currentPath={currentPath}
            onItemClick={handleItemClick}
          />


          {/* Customer Products */}
          <SidebarSection
            title="Customer Products"
            items={customerProducts}
            currentPath={currentPath}
            onItemClick={handleItemClick}
          />

          {/* Bottom Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <SidebarSection
              items={accountSettings}
              showTitle={false}
              currentPath={currentPath}
              onItemClick={handleItemClick}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;