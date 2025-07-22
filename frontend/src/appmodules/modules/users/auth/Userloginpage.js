import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

function Userloginpage() {

    const [login, updatelogin]=useState({
        email:"pp",
        pass:"11"
    });

const updatefiled = (e)=>{
    console.log(e.target.value);
    const {name,value} = e.target;
    console.log(name);
        
            
        
}




    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 bg-light shadow p-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p className='h4'>User Login page</p>
                            </div>
                            <div className='col-12 mt-3'>
                                <div class="mb-3">
                                    <label class="form-label"><MdOutlineMail/> Email address</label>
                                    <input type="email" class="form-control" value={login.email} name='email' onInput={updatefiled}/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label"><TbLockPassword/>Password</label>
                                    <input type="password" class="form-control" value={login.pass} name='pass' onInput={updatefiled}/>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div class="mb-3">
                                   <button type='button' className='btn btn-success'>Login</button>
                                   <Link to="/registor" className='ms-5'>User Registor</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userloginpage