import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert';

import { currentUser } from './../../util/currentUser'
import "./Login.css"
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer/Footer';
import user_img from "./../../images/user_img.svg";
import Navbar from "./../../component/Navbar/Navbar"


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (currentUser) {
      window.location.href = "/"
    }
  }, [])


  async function loginUser() {
    const response = await axios.post('/login', {
      email: email,
      password: password,
    })
    console.log(response.data)
    if (response.data.success) {
      await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "Aww yiss!",
      });
      localStorage.setItem('currentUser', JSON.stringify(response.data.data));
      window.location.href = "/"
    }
    else {
      await swal({
        title: "Error",
        text: response.data.message,
        icon: "error",
        button: "Try Again!",
      });
      setEmail("")
      setPassword("")
      localStorage.removeItem('currentUser');
    }
  }

  return (
    <div>
      <Navbar />
      <div className='row m-1 size-form-container'>
        <div className='col-md-6'>
          <div class="container">
            <span className='text'>Login Here To continue</span>
            <img src={user_img} className="user-login-img img-fluid" />
          </div>

        </div>

        <div className='col-md-6'>
          <div className='login-form-container'>
            <div className='form-container main-form-container mt-3 '>
              <form>
                <div className='form-title' >
                  Login
                  <hr />
                </div>
                <div>
                  <label htmlFor='email'>Email: </label>
                  <input type='email' id='email' placeholder='Enter Email' className='user-input'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                  <label htmlFor='password'>Password: </label>
                  <input type='password' id='password' placeholder='Enter Password' className='user-input'
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                  <hr />
                  <button type='button' className='login-button' onClick={loginUser}>Login</button>
                  <hr />
                  <span className='signup-form-link'>
                    <Link to='/signUp' className='link-signup' >Don't have account signup</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Login
