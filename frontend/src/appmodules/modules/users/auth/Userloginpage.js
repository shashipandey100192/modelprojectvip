import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import axios from 'axios';

function Userloginpage() {
    const mynav = useNavigate();

    const [login, updatelogin]=useState({
        email:"",
        pass:""
    });


 const updatefield = (e)=>{
        const {name,value} = e.target;
        updatelogin((a)=>{
          return{
            ...a,
            [name]:value
          }
        })
      }





const loginpage = async (req,res)=>{
        axios.post('https://modelprojectvip.onrender.com/userlogin',login).then((d)=>{
            console.log(d);
            if(d.data.status===420)
            {
                alert(d.data.msg);
            }

            if(d.data.status===440)
            {
                alert(d.data.msg);
            }

            if(d.data.status===270)
            {
                alert(d.data.msg);
                mynav('/dashboard');

            }
        })
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
                                    <input type="email" class="form-control" value={login.email} name='email' onInput={updatefield}/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label"><TbLockPassword/>Password</label>
                                    <input type="password" class="form-control" value={login.pass} name='pass' onInput={updatefield}/>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div class="mb-3">
                                   <button type='button' className='btn btn-success' onClick={loginpage}>Login</button>
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