import React,{useEffect,useState} from 'react'
import './MyList.css'
import Navbar from '../../component/Navbar/Navbar'
import axios from 'axios'
import { myFoodListItems } from '../../util/myList'
import { currentUser } from '../util/currentUser'
import swal from 'sweetalert'
import { loginRequired } from '../util/LoginRequired'

function MyList() {
    useEffect(() => {
        loginRequired()
      }, [])
      useEffect(()=>{
       ordervalidation();
      },[])
  

      
      async function ordervalidation(){
        if(myFoodListItems.length == 0)
        {
            await swal({
                title:"Select Food Item",
                icon:"error",
                icon: "warning",
                buttons:true
            })
            window.location.href="/";
        }
        
        
      }
    async function placeFoodOrder(){
        
        const response = await axios.post('/orderFoodItems',{
            userId: currentUser._id,
            tableNumber: localStorage.getItem("tableNumber"),
            items : myFoodListItems,
            
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
           <Navbar user={currentUser?.name} />
            <h1 className='text-center'>MyList</h1>
            <hr />
            <div>
                <div className='show-item-container'>
                <div>
                {
                myFoodListItems.map((item, index) => {
                   
                    return (
                        <div>
                            <h6>Name: {item.name}</h6>
                            <h6>Quantity: {item.quantity}</h6>
                            <h6>Price: {item.price}</h6>
                            <h6>Payable Amount : {item.quantity * item.price}</h6>
                            <hr />
                          
                            
                        </div>
                        
                        )
                })
            }
                </div>
                <div class="d-grid gap-2 logout-btn">
                    <button className='btn btn-primary' onClick={placeFoodOrder}>Confirm Order</button>
                   
                    </div>
                </div>
            </div>
           
            
        </div>
    )
}

export default MyList