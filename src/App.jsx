import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import pageInfo from './data/pageInfo'


function App() {

  return (
    <>
    <Router>
    <Routes>
            {Object.keys(pageInfo).map((key) => (
              <Route
                key={key}
                path={`/${key}`}
                element={<Dashboard page={key} description={pageInfo[key].description}/>}
              />
            ))}

            {/* Subcategory routes */}
            {Object.keys(pageInfo).map((key) =>
              pageInfo[key].subcategories
                ? Object.keys(pageInfo[key].subcategories).map((subKey) => (
                    <Route
                      key={`${key}-${subKey}`}
                      path={`/${key}/${subKey}`}
                      element={<Dashboard page={subKey} description={pageInfo[key].subcategories[subKey].description}/>}
                    />
                  ))
                : null
            )}

        {/* <Route path='/' element={<Dashboard page='dashboard'/>}/> */}

      </Routes>
    </Router>
    </>
  )
}

export default App
