import React, { useState } from "react";
import logo from '../images/dpcs_logo.png'
import { NavLink } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from 'axios'
import env from '../env'
import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'


const TroubleLogin = () => {
    let [formData, setFormData] = useState({
        username: "",
        lang: "",
        password: "",
        device_token: "",
        register_id: "",
        device_type: ""
    })

    const whileFillUpForm = (e) => {
        const name = e.target.name;
        setFormData({ ...formData, [name]: e.target.value })

    }
    const loggingIn = async (e) => {


    }

    let navigate = useNavigate()
    const responseFacebook = () => {

    }
    return (
        <div className='container-fluid user_container'>
            <div className="card m-auto " style={{ height: "38rem", padding: "1rem" }}>
                <img src={logo}
                    className='login_card_img' id='profile_img'
                    style={{ width: "6rem", height: '4rem', margin: 'auto' }}
                    alt="" />
                <h4 className='m-auto login-title' style={{ color: 'black' }}>Trouble Logging in?</h4><br />
                <h4 className='m-auto login-title'>Enter your email,phone or username and we'll send you a link to get back into your account</h4>

                <div className="card-body p-2">

                    <form onSubmit={loggingIn}>
                        <div className='row'>
                            <div className='row'>

                            </div>
                            <div className='col-md-12'>

                                <div className="mb-2">
                                    <select name="language" id="" className="form-control" onChange={whileFillUpForm}>
                                        <option value='' selected disabled>Select Language</option>
                                        <option value='0'>English</option>
                                        <option value='1'>Arabic</option>
                                    </select>
                                </div>

                                <div className="mb-2">
                                    <input type="text" className="form-control"
                                        id="" name='username' placeholder='Mobile Number or email'
                                        onChange={whileFillUpForm} />
                                </div>
                            </div>


                        </div>

                        <button type="submit" className="btn btn-danger login_btn">Send Login Link</button>
                        <span className='row mt-3' style={{ lineHeight: '0.1rem' }}><hr className='col-lg-5' /><span className='col-lg-2' >OR</span><hr className='col-lg-5' /></span>
                        <h4 className='m-auto login-title' style={{ color: 'black' }}>Create New Account</h4><br />
                    </form>

                </div>
            </div>
            <div className='card m-auto'>
                <div className='m-auto p-3'>

                    <span className='policy_paragraph'><b><NavLink to='/login' className='links' id=''>Back To Login</NavLink></b></span><br />

                </div>
            </div>


        </div>
    )
}
export default TroubleLogin