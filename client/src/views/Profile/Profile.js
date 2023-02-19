import React, { useEffect } from 'react'

import { loginRequired } from '../util/LoginRequired'
import { currentUser } from '../util/currentUser'
import "./Profile.css"
import Navbar from '../../component/Navbar/Navbar'
import user from '../../images/user.png'
import { cheackAdmin } from '../../util/cheackAdmin'
import axios from 'axios'
import swal from 'sweetalert'
import Footer from '../../component/Footer/Footer'
import { Link } from 'react-router-dom'




function Profile() {
    useEffect(() => {
        loginRequired()
    }, [])

    async function unBook() {
        let num = prompt("Enter Table number")
        const response = await axios.post('/unbookTable', {
            tableNumber: num
        })


        const result = response.data.success;
        console.log(result)
        if (result == true) {
            await swal({
                title: "Sucess",
                text: "Table unbook",
                icon: "success",
            })
        }
        else {
            await swal({
                title: "Error",
                text: "Table Number required",
                icon: "error",
            })
        }
        console.log(num)
    }
  
    async function fetchOrders(){
        const response = await axios.get('/allOrders')
        localStorage.setItem('orderTable', JSON.stringify(response.data.data));
        if(response.data.success == true)
        {
            await swal({
                title: "Success",
                text: "Data fetch Successfully",
                icon: "success",
            })
            window.location.href="/viewOrders";
            
        }
        else{
            await swal({
                title: "Error",
                text: "Data Fetch Error",
                icon: "error",
            })
        }
    }

    function logOut() {
        localStorage.removeItem('currentUser');
        window.location.href = '/login'
    }

   async function createTable(){
    let tableNumber = prompt("Enter Table Number :")
    const response = await axios.post('/createTable',{
        tableNumber:tableNumber
      })
      const result=response.data.success;
      
      if(result == true)
      {
        await swal({
            title: "Sucess",
            text: "Table Created Successfully",
            icon: "success",
        })

      }
      else
      {
        await swal({
            title: "Error",
            text: "Table Already Exist",
            icon: "warning",
        })
      }
   }

   async function addFoodItem(){
    const title = prompt("Item Title :")
    const description = prompt("Item Description :")
    const imgUrl = prompt("Item Image Url :")
    const price = prompt("price")
    const category = prompt("Item category")

   


    const response = await axios.post('/createFoodItem',{
        title: title,
        description: description,
        imgUrl: imgUrl,
        price: price,
        category: category
    })

    console.log(response.data)
    if(response.data.success == true)
    {
        await swal({
            title:"Item Added Successfully ",
            icon: "success",
        })
       
    }
    if(response.data.success == false)
    {
        await swal({
            title:"All fields are required ",
            icon: "warning",
        })
    }
    
    /*  await swal({
        title:"Feature Comming Soon ",
        text:"We Working On These Feature, Kindly Keep Cheaking ",
        icon: "warning",
    })
    */
    }
   
  
    async function createAdmin(){
        await swal({
            title:"Success ",
            icon: "success"
        })

        window.location.href = "/signupAdmin"
    }
   
    function adminView() {
       
        if (currentUser?.role == "admin") {
            return (
                <div className='admin-view-conatiner profile-container'>
                    <h3 className='admin-view'>
                        Admin Services
                    </h3>
                    <hr />
                    <div class="d-grid gap-2 logout-btn">
                        <button className='btn btn-primary' onClick={createTable}>Create Table</button>
                         <button className='btn btn-primary' onClick={addFoodItem} >Add FoodItem</button>
                         <button className='btn btn-primary' onClick={fetchOrders} >View Orders</button>
                         <button className='btn btn-primary' onClick={createAdmin} >Create Admin </button>
                        <button className='btn btn-primary' onClick={unBook} >Unbook Table</button>
                       

                    </div>


                </div>

            )
        }
    }

    async function updateProfile(){
        await swal({
            title:"Feature Comming Soon ",
            text:"We Working On These Feature, Kindly Keep Cheaking ",
            icon: "warning",
        })
        window.location.reload();
    }

    return (
        <div>
            <div>
                <Navbar user={currentUser?.name} />
            </div>
            <div className='row'>
                <div className='col-md-12 main-container'>
                    <div className='sub-container'>
                        <div className='profile-container'>
                            <div className='profile-img-conatiner'>
                                <img src={user} className='user-img' />

                            </div>
                            <hr />
                            <span className='user-info size'>Welcome  {currentUser?.name} </span>
                            <br />
                            <span className='user-info'>Email : {currentUser?.email} </span>
                            <br />
                            <span className='user-info'>Phone No : {currentUser?.phone}</span> <br />
                            <span className='user-info'>Role : {currentUser?.role}</span>
                            <hr />

                            <span>
                                {
                                    adminView()
                                }

                            </span>
                            <div class="d-grid gap-2 logout-btn mt-3">
                                <button type="button" className='btn btn-primary' onClick={logOut}><p className='logOut-text'>Logout</p><i class="fa-solid fa-right-from-bracket"></i></button>
                                <button type="button" className='btn btn-primary' onClick={updateProfile}><p className='logOut-text'>Update Profile</p><i class="fa-regular fa-pen-to-square"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <Footer />
        </div>
    )
}

export default Profile
