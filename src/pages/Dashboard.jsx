
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import DefaultPage from '../components/DefaultPage';
// import Sidebar from '../components/sidebarcomponents/Sidebar';
import HeaderDefault from '../components/default/HeaderDefault';
import Page from '../components/default/Page';
import Sidebar from '../components/sidebar/Sidebar';
import PaymentsDashboard from '../components/dashboard/PaymentsDashboard';

const Dashboard = ({ page, description, isHome = false, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path, label) => {
    navigate(path);
  };

  return (
    <div className="dashboard flex flex-col">
      {isHome && <Header />}
      {!isHome && <HeaderDefault title={title} />}
      <div className="flex flex-1">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          currentPath={location.pathname}
          onNavigate={handleNavigation}
        />
        <div className='flex-1 p-10 pt-5 dashboard'>
          <div className='flex flex-1 bg-white items-center justify-center'>
            {page==='payments' && <PaymentsDashboard/>}
            {page!=='payments' && (isHome ? (
              <DefaultPage title={page} description={description} />
            ) : (
              <Page title={title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;