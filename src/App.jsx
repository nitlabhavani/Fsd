import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserRegistrationPage from './pages/UserRegistrationPage'


const App = () => {
  return (
    <div>
      <>
      <UserRegistrationPage/>
      </>
      <Router>
        <Routes>
          <Route path='/register' element={<UserRegistrationPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App