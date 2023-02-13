import React,{useEffect} from 'react'

import { loginRequired } from '../util/LoginRequired'
import { currentUser } from '../util/currentUser'
import "./Profile.css"
import Navbar from '../../component/Navbar/Navbar'
import user from '../../images/user.png'
function Profile() {
    useEffect(() => {
        loginRequired()
    }, [])

    return (
        <div>
            <div>
             <Navbar user={currentUser?.name} />
             </div>
            <div className='row'>
                <div className='col-md-6 main-container'>
                  <div className='profile-container'>
                    <div className='profile-img-conatiner'>
                        <img src={user} className='user-img' />
                        
                    </div>
                    <hr />
                    <span className='user-info size'>Welcome  {currentUser?.name} </span>
                    <br/>
                    <span className='user-info'>Email : {currentUser?.email} </span>
                     <br/>
                    <span className='user-info'>Phone No : {currentUser?.phone}</span> <br />
                    <span className='user-info'>Role : {currentUser?.role}</span>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Profile
