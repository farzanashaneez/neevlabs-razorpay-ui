import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import pageInfo from './data/pageInfo'
import { useState } from 'react';
import { sidebarItems, paymentProducts, customerProducts, accountSettings, BankingProducts } from "./data/sidebarData";
import Page from './components/default/Page';



function App() {
  const [pageTitle, setPageTitle] = useState("Razorpay Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarClick = (title) => setPageTitle(title);

  const allItems = [...sidebarItems, ...paymentProducts, ...customerProducts, ...accountSettings,...BankingProducts];

  return (
    <>
    <Router>
    <Routes>
            {Object.keys(pageInfo).map((key) => (
              <Route
                key={key}
                path={`/home/${key}`}
                element={<Dashboard isHome={true} page={pageInfo[key].title} description={pageInfo[key].description}/>}
              />
            ))}

            {/* Subcategory routes */}
            {Object.keys(pageInfo).map((key) =>
              pageInfo[key].subcategories
                ? Object.keys(pageInfo[key].subcategories).map((subKey) => (
                    <Route
                      key={`${key}-${subKey}`}
                      path={`/home/${key}/${subKey}`}
                      element={<Dashboard isHome={true} page={pageInfo[key].subcategories[subKey].title} description={pageInfo[key].subcategories[subKey].description}/>}
                    />
                  ))
                : null
            )}

        <Route path='/' element={<Dashboard page='Home' description={pageInfo['dashboard'].description} />}/>
        {allItems.map(item => (
                <Route key={item.path} path={item.path} element={<Dashboard title={item.label}  isHome={item.path==='/home'?true:false}/>} />
              ))}

      </Routes>
    </Router>
    </>
  )
}

export default App
