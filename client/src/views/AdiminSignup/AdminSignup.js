import React, { useState, useEffect } from 'react'
import { currentUser } from '../util/currentUser'
import axios from 'axios'
import swal from 'sweetalert';
import './AdiminSignup.css';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import { loginRequired } from '../util/LoginRequired';

function AdminSignup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('admin')

    useEffect(()=>{
        loginRequired()
    },[])
    useEffect(() => {
        if (currentUser) {
            window.location.href = "/"
        }
    }, [])
    async function signupUser() {
        const response = await axios.post('/signup', {
            name: name,
            email: email,
            phone: phone,
            password: password,
            role: role
        })
        console.log(response.data)
        if (response.data.success) {
            await swal({
                title: "Success",
                text: response.data.message,
                icon: "success",
                button: "Aww yiss!",
            });
            window.location.href = '/login'
        }
        else {
            swal({
                title: "Error",
                text: response.data.message,
                icon: "error",
                button: "Try Again!",
            });
            setName('')
            setEmail('')
            setPhone('')
            setPassword('')
        }
    }

    return (
        <div>
            <Navbar user={currentUser?.name} />
            <div className='row'>
                <div className='col-md-12'>
                    <div className='form-title'>
                        Signup
                    </div>
                    <hr />
                    <form className='form-container'>
                        <div>
                            <label htmlFor='name'>Full Name: </label>
                            <input type='text' id='name' placeholder='Enter Name' className='user-input'
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor='email'>Email: </label>
                            <input type='email' id='email' placeholder='Enter Email' className='user-input'
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor='phone'>Phone: </label>
                            <input type='text' id='phone' placeholder='Enter Phone' className='user-input'
                                value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor='password'>Password: </label>
                            <input type='password' id='password' placeholder='Enter Password' className='user-input'
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <button type='button' className='signup-button' onClick={signupUser}>Signup</button>
                        </div>
                    </form>
                </div>
            </div>
            <br />
            <Footer />
        </div>



    )
}

export default AdminSignup
