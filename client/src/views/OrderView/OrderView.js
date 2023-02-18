import React from 'react'

import "./OrderView.css"
import { loginRequired } from '../util/LoginRequired'


function OrderView() {
  const orderItems = JSON.parse(localStorage.getItem('orderTable')) || []

  //const orderItemsCount = orderItems.length ;

  return (
    <div>
      <div>
        {
          orderItems.map((item, index) => {
            loginRequired()
            return (
              <div className='row'>
                <div className='col-md-12 '>
                  <div className='ordercontainer'>
                    <h3>Order Id :{item.orderId}</h3>
                    <h3>Table Number :{item.tableNumber}</h3>
                    <h3>UserID : {item.userId}</h3>
                    <hr />
                    {item.items.map((item, index) => {
                      return (
                        <div>
                          <h4>Item Name : {item.name}</h4>
                          <h4>Payble Amount : {item.paybleamount}</h4>
                          <h4>Price Per Item : {item.price}</h4>
                          <h4>Quantity : {item.quantity}</h4>

                        </div>

                      )
                    })}
                    <hr />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
     
    </div>
  )
 
  
}

export default OrderView
