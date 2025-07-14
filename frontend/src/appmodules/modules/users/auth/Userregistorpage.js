import React from 'react'
import { Link } from 'react-router-dom'

function Userregistorpage() {
  return (
    <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8 bg-light shadow p-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p className='h4'>User Registor page</p>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Gender</label>
                                   <select className='form-select'>
                                    <option hidden>select gender</option>
                                    <option>male</option>
                                    <option>female</option>
                                   </select>
                                </div>
                            </div>
                             <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Username</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div class="mb-3">
                                   <button type='button' className='btn btn-success'>Registor Now</button>
                                   <Link to="/userportal" className='ms-5'>Login</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Userregistorpage