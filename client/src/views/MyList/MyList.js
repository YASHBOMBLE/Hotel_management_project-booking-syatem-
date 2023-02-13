import React from 'react'
import './MyList.css'
import Navbar from '../../component/Navbar/Navbar'
import axios from 'axios'
import { myFoodListItems } from '../../util/myList'
import { currentUser } from '../util/currentUser'
import swal from 'sweetalert'
function MyList() {
    async function placeFoodOrder(){
        const response = await axios.post('/orderFoodItems',{
            userId: currentUser._id,
            tableNumber: localStorage.getItem("tableNumber"),
            items : myFoodListItems
        })
        if(response.data.success)
        {
            await swal(
            {
                title:"Order Success",
                icon: "success"
            })
            localStorage.removeItem("list")
            window.location.href="/"
        }
    }
    return (
        <div>
            <Navbar />
            <h1 className='text-center'>MyList</h1>
            {
                myFoodListItems.map((item, index) => {
                    return (
                        <div>
                            <h6>Name: {item.name}</h6>
                            <h6>Quantity: {item.quantity}</h6>
                            <h6>Price: {item.price}</h6>
                            <hr />
                        </div>)
                })
            }
            <button className='btn btn-primary' onClick={placeFoodOrder}>Confirm Order</button>
        </div>
    )
}

export default MyList