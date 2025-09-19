import React, { useState } from 'react';
import { Menu, ChevronDown } from '../components/ui/Icons';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import DefaultPage from '../components/DefaultPage';

const Dashboard = ({page,description}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

 
  return (
    <div className="dashboard flex flex-col">
    <Header />
    
    <div className="flex flex-1">
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />
      <div className='flex-1 p-10 pt-5 bg-red-400'>
        <div className='flex flex-1 bg-amber-600 items-center justify-center'>
         <DefaultPage title={page} description={description}/>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Dashboard;