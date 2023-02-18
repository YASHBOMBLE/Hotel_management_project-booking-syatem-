import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./views/Login/Login"
import Signup from "./views/Signup/Signup"
import Home from './views/Home/Home'
import BookTable from './views/BookTable/BookTable'
import MyOrders from './views/MyOrders/MyOrders'
import Profile from './views/Profile/Profile'
import MyList from './views/MyList/MyList'
import OrderView from './views/OrderView/OrderView'
import AdminSignup from './views/AdiminSignup/AdminSignup'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/booktable' element={<BookTable/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/myList' element={<MyList />} />
          <Route path='/myOrders' element={<MyOrders />} />
          <Route path='/viewOrders' element={<OrderView />} />
          <Route path='/signupAdmin' element={<AdminSignup />} />

     
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App