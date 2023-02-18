import React, { useState } from 'react'

import "./OrderView.css"
import { loginRequired } from '../util/LoginRequired'
import Footer from '../../component/Footer/Footer'
import Navbar from './../../component/Navbar/Navbar'
import { currentUser } from '../util/currentUser'
function OrderView() {

  const orderItems = JSON.parse(localStorage.getItem('orderTable')) || []

  //const orderItemsCount = orderItems.length ;

  function refresh()
  {
    window.location.reload();
  }
  return (
    <div className=''>
          <Navbar user={currentUser?.name} />
      <div className='row'>
        <div className='col-md-12 refresh-btn-container'>
        <span className='refresh-btn' onClick={refresh}><i class="fa-solid fa-arrows-rotate"></i></span>
        </div>
        </div>
      <div className=''>
        {
          orderItems.map((item, index) => {
            loginRequired()
            return (
              <div className='row'>
                <div className='col-md-12 '>
                  <div className='ordercontainer'>
                    <span className='order-title'>Order Id :{item.orderId}</span> 
                    <span className='order-table-title'>Table Number :{item.tableNumber}</span>
                    <span className='order-table-title'>UserID : {item.userId}</span>
                    <hr />
                    <div className='row'>
                    <div className=''>
                      <h6>Items :</h6>
                    {item.items.map((item, index) => {
                      return (
                        <div className='order-item-container'>
                          <span className='order-content'>Item Name : {item.name}</span>
                          <span className='order-content'>Payble Amount : {item.paybleamount} </span>
                          <span className='order-content'>Price Per Item : {item.price}</span>
                          <span className='order-content'>Quantity : {item.quantity}</span>
                                                   
                        </div>

                      )
                      
                    })}
                    <hr />
              
                      </div>
                      </div>

                   
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
     <Footer />
    </div>
  )
 
  
}

export default OrderView
