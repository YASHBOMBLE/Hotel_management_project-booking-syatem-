import React, {useState} from 'react'
import swal from 'sweetalert';

import "./FoodItemCard.css";
function FoodItemCard({ category, description, imgUrl, price, title }) {

  const [quantity, setQuantity] = useState(1)

  
  async function addToList(){
   const listObject = {
     name: title,
     price: price,
     quantity: quantity,
     paybleamount : price * quantity
   }

   const existingList = JSON.parse(localStorage.getItem('list')) || []

   existingList.push(listObject)

   localStorage.setItem('list', JSON.stringify(existingList))
   await swal({
    title: "Added to the list",
    icon:"success",
   })
   window.location.reload()
  }

  return (
    <div className='col-md-3'>
          <div className='food-Item-container'>
      <div className="food-item-card">
    
        <div>
          <img src={imgUrl} class="food-item-card-header-img" />
        </div>
        <span className='bold-text text-size'>Item: {title}</span>
        <p className='bold-text' >Discription : {description || title}</p>
        <p className='bold-text' >Price : {price}/- Only</p>
        <span className='bold-text' >Category : {category}</span>

        <div className='quantity-btn-container'>
          <button className='qnt-btn' onClick={(e)=>{setQuantity(quantity-1)}}>-</button>
          <span className='qnt-text'>{quantity}</span>
          <button className='qnt-btn' onClick={(e)=>{setQuantity(quantity+1)}}>+</button>
        </div>
        <div>
          <button type="button" className='btn-add-to-list' onClick={addToList}>Add To List</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default FoodItemCard