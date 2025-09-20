
// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Header from '../components/header/Header';
// import DefaultPage from '../components/DefaultPage';
// // import Sidebar from '../components/sidebarcomponents/Sidebar';
// import HeaderDefault from '../components/default/HeaderDefault';
// import Page from '../components/default/Page';
// import Sidebar from '../components/sidebar/Sidebar';
// import PaymentsDashboard from '../components/dashboard/PaymentsDashboard';

// const Dashboard = ({ page, description, isHome = false, title }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleNavigation = (path, label) => {
//     navigate(path);
//   };

//   return (
//     <div className="dashboard flex flex-col">
//       {isHome && <Header />}
//       {!isHome && <HeaderDefault title={title} />}
//       <div className="flex flex-1">
//         <Sidebar
//           isOpen={sidebarOpen}
//           onToggle={() => setSidebarOpen(!sidebarOpen)}
//           currentPath={location.pathname}
//           onNavigate={handleNavigation}
//         />
//         <div className='flex-1 p-10 pt-5 dashboard'>
//           <div className='flex flex-1 bg-white items-center justify-center'>
//             {page==='payments' && <PaymentsDashboard/>}
//             {page!=='payments' && (isHome ? (
//               <DefaultPage title={page} description={description} />
//             ) : (
//               <Page title={title} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Header from '../components/header/Header';
// import DefaultPage from '../components/DefaultPage';
// import HeaderDefault from '../components/default/HeaderDefault';
// import Page from '../components/default/Page';
// import Sidebar from '../components/sidebar/Sidebar';
// import PaymentsDashboard from '../components/dashboard/PaymentsDashboard';

// const Dashboard = ({ page, description, isHome = false, title }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Check screen size and update mobile state
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768); // md breakpoint
//       // Close sidebar on mobile when screen resizes to desktop
//       if (window.innerWidth >= 768) {
//         setSidebarOpen(false);
//       }
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
    
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   // Close sidebar when clicking outside on mobile
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMobile && sidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.sidebar-toggle')) {
//         setSidebarOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMobile, sidebarOpen]);

//   const handleNavigation = (path, label) => {
//     navigate(path);
//     // Close sidebar after navigation on mobile
//     if (isMobile) {
//       setSidebarOpen(false);
//     }
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="dashboard flex flex-col min-h-screen max-w-full overflow-x-hidden">
//       {/* Header */}
//       {isHome && <Header />}
//       {!isHome && (
//         <HeaderDefault 
//           title={title} 
//           onMenuClick={toggleSidebar}
//           showMenuButton={isMobile}
//         />
//       )}
      
//       {/* Mobile overlay */}
//       {isMobile && sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div className="flex flex-1 relative overflow-hidden">
//         {/* Sidebar */}
//         <div className={`
//           sidebar
//           ${isMobile ? 'fixed top-0 left-0 h-full' : 'relative'}
//           ${isMobile && sidebarOpen ? 'translate-x-0' : ''}
//           ${isMobile && !sidebarOpen ? '-translate-x-full' : ''}
//           ${!isMobile ? (sidebarOpen ? 'w-64' : 'w-16') : 'w-64'}
//           transition-transform duration-300 ease-in-out
//           z-50
//           flex-shrink-0
//         `}>
//           <Sidebar
//             isOpen={sidebarOpen}
//             onToggle={toggleSidebar}
//             currentPath={location.pathname}
//             onNavigate={handleNavigation}
//             isMobile={isMobile}
//           />
//         </div>

//         {/* Main content */}
//         <div className="flex-1 min-w-0 overflow-x-hidden">
//           <div className="p-4 sm:p-6 lg:p-10 pt-3 sm:pt-4 lg:pt-5 w-full max-w-full">
//             {/* Mobile menu button - show only if not in HeaderDefault */}
//             {isMobile && isHome && (
//               <button
//                 onClick={toggleSidebar}
//                 className="sidebar-toggle mb-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors md:hidden"
//                 aria-label="Toggle sidebar"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               </button>
//             )}

//             <div className="w-full max-w-full">
//               {page === 'payments' && <PaymentsDashboard />}
//               {page !== 'payments' && (isHome ? (
//                 <DefaultPage title={page} description={description} />
//               ) : (
//                 <Page title={title} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Header from '../components/header/Header';
// import DefaultPage from '../components/DefaultPage';
// import HeaderDefault from '../components/default/HeaderDefault';
// import Page from '../components/default/Page';
// import Sidebar from '../components/sidebar/Sidebar';
// import PaymentsDashboard from '../components/dashboard/PaymentsDashboard';

// const Dashboard = ({ page, description, isHome = false, title }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Check screen size and update mobile state
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768); // md breakpoint
//       // Close sidebar on mobile when screen resizes to desktop
//       if (window.innerWidth >= 768) {
//         setSidebarOpen(false);
//       }
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
    
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   // Close sidebar when clicking outside on mobile
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMobile && sidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.sidebar-toggle')) {
//         setSidebarOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMobile, sidebarOpen]);

//   const handleNavigation = (path, label) => {
//     navigate(path);
//     // Close sidebar after navigation on mobile
//     if (isMobile) {
//       setSidebarOpen(false);
//     }
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="dashboard flex flex-col min-h-screen max-w-full overflow-x-hidden">
//       {/* Header */}
//       {isHome && <Header />}
//       {!isHome && (
//         <HeaderDefault 
//           title={title} 
//           onMobileMenuToggle={toggleSidebar}
//         />
//       )}
      
//       {/* Mobile overlay */}
//       {isMobile && sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-transparent bg-opacity-50 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div className="flex flex-1 relative overflow-hidden">
//         {/* Sidebar - Always render but conditionally position */}
//         <div className={`
//           sidebar
//           ${isMobile ? 'fixed top-0 left-0 h-full z-50' : 'relative flex-shrink-0'}
//           ${isMobile && sidebarOpen ? 'translate-x-0' : ''}
//           ${isMobile && !sidebarOpen ? '-translate-x-full' : ''}
//           ${!isMobile && sidebarOpen ? 'w-64' : !isMobile ? 'w-16' : 'w-64'}
//           transition-transform duration-300 ease-in-out
//           bg-white border-r border-gray-200
//         `}>
//           <Sidebar
//             isOpen={sidebarOpen}
//             onToggle={toggleSidebar}
//             currentPath={location.pathname}
//             onNavigate={handleNavigation}
//             isMobile={isMobile}
//           />
//         </div>

//         {/* Main content */}
//         <div className="flex-1 min-w-0 overflow-x-hidden">
//           <div className="p-4 sm:p-6 lg:p-10 pt-3 sm:pt-4 lg:pt-5 w-full max-w-full">
//             {/* Mobile menu button - show only if isHome and mobile and no header menu */}
//             {isMobile && isHome && (
//               <div className="lg:hidden mb-4 flex items-center justify-between">
//                 <button
//                   onClick={toggleSidebar}
//                   className="sidebar-toggle p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
//                   aria-label="Toggle sidebar"
//                 >
//                   <svg
//                     className="w-6 h-6 text-gray-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 </button>
//                 {/* Page title on mobile for home pages */}
//                 <h1 className="text-lg font-semibold text-gray-900 capitalize">
//                   {page}
//                 </h1>
//                 <div></div> {/* Spacer for centering */}
//               </div>
//             )}

//             <div className="w-full max-w-full">
//               {page === 'payments' && <PaymentsDashboard />}
//               {page !== 'payments' && (isHome ? (
//                 <DefaultPage title={page} description={description} />
//               ) : (
//                 <Page title={title} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Header from '../components/header/Header';
// import DefaultPage from '../components/DefaultPage';
// import HeaderDefault from '../components/default/HeaderDefault';
// import Page from '../components/default/Page';
// import Sidebar from '../components/sidebar/Sidebar';
// import PaymentsDashboard from '../components/dashboard/PaymentsDashboard';

// const Dashboard = ({ page, description, isHome = false, title }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Check screen size and update mobile state
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768); // md breakpoint
//       // Close sidebar on mobile when screen resizes to desktop
//       if (window.innerWidth >= 768) {
//         setSidebarOpen(false);
//       }
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
    
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   // Close sidebar when clicking outside on mobile
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMobile && sidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.sidebar-toggle')) {
//         setSidebarOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMobile, sidebarOpen]);

//   const handleNavigation = (path, label) => {
//     navigate(path);
//     // Close sidebar after navigation on mobile
//     if (isMobile) {
//       setSidebarOpen(false);
//     }
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="dashboard flex flex-col min-h-screen max-w-full overflow-x-hidden">
//       {/* Header */}
//       {isHome && <Header />}
//       {!isHome && (
//         <HeaderDefault 
//           title={title} 
//           onMobileMenuToggle={toggleSidebar}
//         />
//       )}
      
//       {/* Mobile overlay */}
//       {isMobile && sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div className="flex flex-1 relative overflow-hidden">
//         {/* Sidebar - Always render but conditionally position */}
//         <div className={`
//           sidebar
//           ${isMobile ? 'fixed top-0 left-0 h-full z-50' : 'relative flex-shrink-0'}
//           ${isMobile && sidebarOpen ? 'translate-x-0' : ''}
//           ${isMobile && !sidebarOpen ? '-translate-x-full' : ''}
//           ${!isMobile ? (sidebarOpen ? 'w-64' : 'w-16') : 'w-64'}
//           transition-all duration-300 ease-in-out
//           bg-white border-r border-gray-200
//         `}>
//           <Sidebar
//             isOpen={sidebarOpen}
//             onToggle={toggleSidebar}
//             currentPath={location.pathname}
//             onNavigate={handleNavigation}
//             isMobile={isMobile}
//           />
//         </div>

//         {/* Main content - Explicitly calculate width based on sidebar state */}
//         <div className={`
//           ${isMobile ? 'w-full' : sidebarOpen ? 'w-[calc(100%-16rem)]' : 'w-[calc(100%-4rem)]'}
//           min-w-0 overflow-x-hidden
//           transition-all duration-300 ease-in-out
//         `}>
//           <div className="h-full w-full">
//             <div className="p-4 sm:p-6 lg:p-10 pt-3 sm:pt-4 lg:pt-5 w-full">
//               {/* Mobile menu button - show only if isHome and mobile and no header menu */}
//               {isMobile && isHome && (
//                 <div className="lg:hidden mb-4 flex items-center justify-between">
//                   <button
//                     onClick={toggleSidebar}
//                     className="sidebar-toggle p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
//                     aria-label="Toggle sidebar"
//                   >
//                     <svg
//                       className="w-6 h-6 text-gray-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M4 6h16M4 12h16M4 18h16"
//                       />
//                     </svg>
//                   </button>
//                   {/* Page title on mobile for home pages */}
//                   <h1 className="text-lg font-semibold text-gray-900 capitalize">
//                     {page}
//                   </h1>
//                   <div></div> {/* Spacer for centering */}
//                 </div>
//               )}

//               {/* Page Content */}
//               <div className="w-full">
//                 {page === 'payments' && <PaymentsDashboard />}
//                 {page !== 'payments' && (isHome ? (
//                   <DefaultPage title={page} description={description} />
//                 ) : (
//                   <Page title={title} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import DefaultPage from '../components/DefaultPage';
import HeaderDefault from '../components/default/HeaderDefault';
import Page from '../components/default/Page';
import Sidebar from '../components/sidebar/Sidebar';
import PaymentsDashboard from '../components/dashboard/PaymentsDashboard';

const Dashboard = ({ page, description, isHome = false, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check screen size and update mobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
      // Close sidebar on mobile when screen resizes to desktop
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && sidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.sidebar-toggle')) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, sidebarOpen]);

  const handleNavigation = (path, label) => {
    navigate(path);
    console.log("before",sidebarOpen,isMobile)
    // Close sidebar after navigation on mobile
    if (isMobile) {
      setSidebarOpen(false);
    }
    console.log("after",sidebarOpen,isMobile)

  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard flex flex-col min-h-screen max-w-full overflow-x-hidden">
      {/* Header */}
      {isHome && <Header />}
      {!isHome && (
        <HeaderDefault 
          title={title} 
          onMobileMenuToggle={toggleSidebar}
        />
      )}
      
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-transparent bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1">
        {/* Sidebar - Simple positioning like your original */}
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={toggleSidebar}
          currentPath={location.pathname}
          onNavigate={handleNavigation}
          isMobile={isMobile}
        />
        
        {/* Main content - Simple flex-1 like your original */}
        <div className='flex-1 p-4 sm:p-6 lg:p-10 pt-3 sm:pt-4 lg:pt-5'>
          {/* Mobile menu button - show only if isHome and mobile */}
          {isMobile && isHome && (
            <div className="lg:hidden mb-4 flex items-center justify-between">
              <button
                onClick={toggleSidebar}
                className="sidebar-toggle p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Toggle sidebar"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              {/* Page title on mobile for home pages */}
              <h1 className="text-lg font-semibold text-gray-900 capitalize">
                {page}
              </h1>
              <div></div> {/* Spacer for centering */}
            </div>
          )}

          <div className='flex flex-1 bg-white items-center justify-center'>
            {page === 'payments' && <PaymentsDashboard/>}
            {page !== 'payments' && (isHome ? (
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