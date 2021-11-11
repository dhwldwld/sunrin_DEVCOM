import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// Screens
import HomeScreen from './screens/HomeScreen'
import QuestionScreen from './screens/QuestionScreen'
import DevLogScreen from './screens/DevLogScreen'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'

// Components
import Navbar from './components/Navbar'
import SideDrawer from './components/SideDrawer'
import Backdrop from './components/Backdrop'


function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <SideDrawer show={sideToggle} click={()=> setSideToggle(false)} />
      {/* Backdrop */}
      <Backdrop show={sideToggle} click={()=> setSideToggle(false)} />
      <Navbar click={() => setSideToggle(true)} />
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route path='/question' element={<QuestionScreen />} />
          <Route path='/devlog' element={<DevLogScreen />} />
          <Route path='/signin' element={<SigninScreen />} />
          <Route path='/signup' element={<SignupScreen />} />
        </Routes>
      {/* /:id */}
      {/* /settings/profile */}
      {/* <Route path='settings'><Route path='profile'/><Route path='security'/></Route> */}
      {/* /settings/security */}

    </Router>
  );
}

export default App;
