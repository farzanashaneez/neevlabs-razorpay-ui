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
import SidebarSection from './SidebarSection';

const Sidebar = ({ isOpen, onToggle }) => {
  const sidebarItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: CreditCard, label: 'Transactions' },
    { icon: FileText, label: 'Settlements' },
    { icon: FileText, label: 'Reports' },
    { icon: Shield, label: 'Risk and Fraud' }
  ];

  const paymentProducts = [
    { icon: Link2, label: 'Payment Links' },
    { icon: Link2, label: 'Payment Links' },
    { icon: FileText, label: 'Payment Pages' },
    { icon: Link2, label: 'Razorpay.me Link' }
  ];

  const customerProducts = [
    { icon: Users, label: 'Customers' },
    { icon: Building, label: 'Offers' },
    { icon: Users, label: 'Developers' },
    { icon: Building, label: 'Apps & Deals' }
  ];

  const handleItemClick = (item) => {
    console.log('Clicked:', item.label);
    // Add navigation logic here
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
          <SidebarSection 
            items={sidebarItems} 
            showTitle={false}
            onItemClick={handleItemClick}
          />
          
          <SidebarSection 
            title="Recommended for you" 
            items={[{ icon: Link2, label: 'Payment Links' }]}
            onItemClick={handleItemClick}
          />
          
          <SidebarSection 
            title="Payment Products" 
            items={paymentProducts}
            showMore={2}
            onItemClick={handleItemClick}
          />
          
          <div className="mt-6">
            <Card className="bg-gray-50 p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">X Payroll</span>
                <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </Card>
          </div>
          
          <SidebarSection 
            title="Customer Products" 
            items={customerProducts}
            onItemClick={handleItemClick}
          />
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <SidebarSection 
              items={[
                { icon: Settings, label: 'Test Mode' },
                { icon: Settings, label: 'Account & Settings' }
              ]}
              showTitle={false}
              onItemClick={handleItemClick}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;