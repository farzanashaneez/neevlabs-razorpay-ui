// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Header from "../components/header/Header";
// import DefaultPage from "../components/DefaultPage";
// import HeaderDefault from "../components/default/HeaderDefault";
// import Page from "../components/default/Page";
// import Sidebar from "../components/sidebar/Sidebar";
// import PaymentsDashboard from "../components/dashboard/PaymentsDashboard";

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
//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   // Close sidebar when clicking outside on mobile
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isMobile &&
//         sidebarOpen &&
//         !event.target.closest(".sidebar") &&
//         !event.target.closest(".sidebar-toggle")
//       ) {
//         setSidebarOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isMobile, sidebarOpen]);

//   const handleNavigation = (path, label) => {
//     navigate(path);
//     console.log("before", sidebarOpen, isMobile);
//     // Close sidebar after navigation on mobile
//     if (isMobile) {
//       setSidebarOpen(false);
//     }
//     console.log("after", sidebarOpen, isMobile);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="dashboard flex flex-col min-h-screen max-w-full overflow-x-hidden">
//       {/* Header */}
//       {isHome && <Header />}
//       {!isHome && (
//         <HeaderDefault title={title} onMobileMenuToggle={toggleSidebar} />
//       )}

//       {/* Mobile overlay */}
//       {isMobile && sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-transparent bg-opacity-50 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar - Simple positioning like your original */}
//         <Sidebar
//           isOpen={sidebarOpen}
//           onToggle={toggleSidebar}
//           currentPath={location.pathname}
//           onNavigate={handleNavigation}
//           isMobile={isMobile}
//         />

//         {/* Main content - Simple flex-1 like your original */}
//         <div className="flex-1 p-4 sm:p-6 lg:p-10 pt-3 sm:pt-4 lg:pt-5">
//           {/* Mobile menu button - show only if isHome and mobile */}
//           {isMobile && isHome && (
//             <div className="lg:hidden mb-4 flex items-center justify-start">
//               <button
//                 onClick={toggleSidebar}
//                 className="sidebar-toggle p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
//                 aria-label="Toggle sidebar"
//               >
//                 <svg
//                   className="w-6 h-6 text-gray-600"
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
//               {/* Page title on mobile for home pages */}
//               <h1 className="text-lg font-semibold text-gray-900 capitalize">
//                 {page}
//               </h1>
//               <div></div> {/* Spacer for centering */}
//             </div>
//           )}

//           <div className="flex flex-1 bg-white  items-center justify-center ">
//             {page === "Payments" && <PaymentsDashboard />}
//             {page !== "Payments" &&
//               (isHome ? (
//                 <DefaultPage title={page} description={description} />
//               ) : (
//                 <Page title={title} />
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import DefaultPage from "../components/DefaultPage";
import HeaderDefault from "../components/default/HeaderDefault";
import Page from "../components/default/Page";
import Sidebar from "../components/sidebar/Sidebar";
import PaymentsDashboard from "../components/dashboard/PaymentsDashboard";

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
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile &&
        sidebarOpen &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".sidebar-toggle")
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, sidebarOpen]);

  const handleNavigation = (path, label) => {
    navigate(path);
    console.log("before", sidebarOpen, isMobile);
    // Close sidebar after navigation on mobile
    if (isMobile) {
      setSidebarOpen(false);
    }
    console.log("after", sidebarOpen, isMobile);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard min-h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-100 bg-white shadow-sm">
        {isHome && <Header />}
        {!isHome && (
          <HeaderDefault title={title} onMobileMenuToggle={toggleSidebar} />
        )}
      </div>

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent z-60 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex pt-16 h-screen">
        {/* Fixed Sidebar - Full height with scroll */}
        <div className={`
  ${isMobile 
    ? 'fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] transform transition-transform duration-300 ease-in-out ' + (sidebarOpen ? 'translate-x-0' : '-translate-x-full') 
    : 'relative h-full block z-50'}
  md:relative md:top-0 md:h-full md:transform-none md:translate-x-0
`}>
          <Sidebar
            isOpen={sidebarOpen}
            onToggle={toggleSidebar}
            currentPath={location.pathname}
            onNavigate={handleNavigation}
            isMobile={isMobile}
          />
        </div>

        {/* Main content area */}
        <div className={`
          flex-1 flex flex-col min-w-0 h-full
          ${!isMobile ? 'ml-0' : 'ml-0'}
        `}>
          {/* Mobile menu button - show only if isHome and mobile */}
          {isMobile && isHome && (
            <div className="lg:hidden p-4 pb-0 flex items-center justify-between bg-white border-b">
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
              <div className="w-10"></div> {/* Spacer for centering */}
            </div>
          )}

          {/* Scrollable content container - Only this section scrolls */}
          <div className="flex-1 overflow-y-auto bg-gray-50">
            <div className="p-4 sm:p-6 lg:p-10 pt-3 sm:pt-4 lg:pt-5 min-h-full">
              <div className="w-full max-w-full">
                {page === "Payments" && <PaymentsDashboard />}
                {page !== "Payments" &&
                  (isHome ? (
                    <DefaultPage title={page} description={description} />
                  ) : (
                    <Page title={title} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;