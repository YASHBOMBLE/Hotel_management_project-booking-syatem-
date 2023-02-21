import React, { useEffect, useState } from 'react'

import { loginRequired } from '../util/LoginRequired'
import "./MyOrders.css"
import axios from "axios"
import { currentUser } from '../util/currentUser'
import Navbar from '../../component/Navbar/Navbar'
import Footer from './../../component/Footer/Footer'
function MyOrders() {

  const [items, setItems] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    loginRequired()
  }, [])


  /*useEffect(() => {
    fetchOrder()
  }, [currentUser])

  async function fetchOrder() {
    const response = await axios.get(`/ordersByUserId?userId=${currentUser._id}`)

    setResult(response.data.data);
    result.map((item,index)=>{
        setOrder(item.items)       
    })  
  }
*/
const currentOrder = JSON.parse(localStorage.getItem('myOrder')) || []
  return (

    <div>
      <Navbar user={currentUser?.name} />
      <hr />
      <div className='container'>
        <div className='orderCard'>
          <span className='card-title'>--Order Details are-- </span>
          <hr />
         
      {
        
        currentOrder.map((item,index)=>{
          return(
            <div className='item-container'>
            <span className='item-data'>Name : {item.name}</span> <br />
            <span className='item-data'>Price : {item.price}</span> <br />
            <span className='item-data'>Quantity : {item.quantity}</span> <br />
            </div>
          )
        })
      }
     
      
      
     </div>
     
      </div>
      <hr />
     <Footer />
    </div>
  )
}

export default MyOrders ;
