import React, { useEffect } from 'react'

import { loginRequired } from '../util/LoginRequired'
import { currentUser } from '../util/currentUser'
import "./Profile.css"
import Navbar from '../../component/Navbar/Navbar'
import user from '../../images/user.png'
import CreateTable from '../CreateTable/CreateTable'
import { cheackAdmin } from '../../util/cheackAdmin'
import axios from 'axios'
import swal from 'sweetalert'




function Profile() {
    useEffect(() => {
        loginRequired()
    }, [])

  async function unBook()
  {
    let num = prompt("Enter Table number")
    const response = await axios.post('/unbookTable',{
        tableNumber : num
    })

    
    const result = response.data.success;
    console.log(result)
    if(result == true)
    {
        await swal({
            title: "Sucess",
            text: "Table unbook",
            icon: "success",
        })
    }
    else{
        await swal({
            title: "Error",
            text: "Table Number required",
            icon: "error",
        })
    }
    console.log(num)
  }
    function adminView()
    {
        if(currentUser?.role == "admin")
        {
         return(
            <div className='admin-view-conatiner profile-container'>
                <h3 className='admin-view'>
                    Admin Services
                </h3>
                <hr />
                <div class="d-grid gap-2 logout-btn">
                <button className='btn btn-primary'>Create Table</button>
                <button className='btn btn-primary'>Add FoodItem</button>
                <button className='btn btn-primary' onClick={unBook} >Unbook Table</button>
                
                </div>
               
                 
            </div>
           
         )  
        }
    }
  
    return (
        <div>
            <div>
                <Navbar user={currentUser?.name} />
            </div>
            <div className='row'>
                <div className='col-md-6 main-container'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
