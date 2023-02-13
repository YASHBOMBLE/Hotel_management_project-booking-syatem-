import React, {useState} from 'react'
import "./Navbar.css"

import { myFoodListCount } from '../../util/myList'
import { Link } from 'react-router-dom'

function Navbar({ user}) {
const [foodItemCount , setFoodItemCount] = useState(myFoodListCount)
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"> 🍔</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
                 <li class="nav-item">
                <Link to="/myList" className='nav-link' >My List</Link>
              </li>
              <li class="nav-item">
                <Link to="/bookTable" className='nav-link' >Book Table</Link>
              </li>
            </ul>
            <form class="d-flex align-items-center">
              <h4 className='me-2 text-light'>Hello {user}</h4>
              <Link to="/bookTable" className='text-decoration-none'>
                <h4 className='me-2 my-list'>🍽️ {foodItemCount}</h4>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar