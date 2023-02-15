import React from 'react'
import "./../FoodItemCard/FoodItemCard.css";
import "./TableCard.css"
import axios from 'axios';
import swal from 'sweetalert'
function TableCard({ tableNumber,userId}) {
 
 async function bookTable(){
    const response = await axios.post('/bookTable',{
      tableNumber:tableNumber,
      userId:userId
    })
    localStorage.setItem('tableNumber', JSON.stringify(tableNumber));
    const responseStatus=response.data.success;
    if(responseStatus==true)
    {
      await swal({
        title:"Success",
        icon:"success"
      })
      window.location.href="/myList";
    }
  }
  
  return (
    <div>
      <div className='col-md-3'>
        <div className='container-main'>
          <div className='food-item-card  size'>
         <span className='tableTitle'>Table Number : {tableNumber}</span> 
          <button onClick={bookTable} className='bookTableBtn'>Book Table</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TableCard
