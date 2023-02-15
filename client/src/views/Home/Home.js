import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FoodItemCard from '../../component/FoodItemCard/FoodItemCard'
import Navbar from '../../component/Navbar/Navbar'
import { currentUser } from './../util/currentUser'
import Footer from "./../../component/Footer/Footer"


import "./Home.css";
function Home() {

  const [searchText, setSearchText] = useState('')
  const [currentFoodItems, setAllFoodItems] = useState([])


  async function fetchAllItems() {
    const response = await axios.get('/allFoodItems')
    setAllFoodItems(response.data.data)
  }

  async function fetchSpecificItems() {
    const response = await axios.get(`/foodItems?title=${searchText}`)
    setAllFoodItems(response.data.data)
  }

  useEffect(() => {
    if (searchText.length > 0) {
      fetchSpecificItems()
    }
    else {
      fetchAllItems()
    }
  }, [searchText])


  async function logOut() {
    const response = await axios.post('/unbookTable', {
      tableNumber: localStorage.getItem('tableNumber')
    })
    console.log(response.data.data);
    localStorage.removeItem('tableNumber');
    localStorage.removeItem('currentUser');
    window.location.href = '/login'
  }

  if (!currentUser) {
    window.location.href = '/login'
  }

  return (
    <div>
      <Navbar user={currentUser?.name} />
      <div>
      </div>
      <div className='row' >
        <div className='col-md-3' ></div>
        <div className='col-md-3' ></div>
        <div className='col-md-3' ></div>

        <div className='col-md-3'>
          <div className='search-container'>
            <input type="text" placeholder='Search Food Item Here..' className='input-search'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)} />
          </div>
        </div>
      </div>
      <hr />
      <div className='food-items-result'>
        <div class="row ">
          {
            currentFoodItems?.map((foodItem, index) => {
              return (<FoodItemCard description={foodItem.description} category={foodItem.category} title={foodItem.title} price={foodItem.price} imgUrl={foodItem.imgUrl} key={index} />)
            })
          }
        </div>
      </div>
      <div class="d-grid gap-2 logout-btn">
        <button type="button" className='btn btn-primary' onClick={logOut}><p className='logOut-text'>Logout</p><i class="fa-solid fa-right-from-bracket"></i></button>

      </div>

      <Footer />
    </div>
  )
}

export default Home