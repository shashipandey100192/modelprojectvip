import React from 'react'
import { Link } from 'react-router-dom'

function Employeepage() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <p className='h3 mt-3'>Employee List:-</p>
                    <table className="table mt-3 table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Actions</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>kumar</td>
                                <td>jkumar@gmail.com</td>
                                <td>male</td>
                            <td>
                                <Link to="" className='btn btn-info btn-sm ms-2'>view</Link>
                                <Link to="" className='btn btn-warning btn-sm ms-2'>Edit</Link>
                                <Link to="" className='btn btn-danger btn-sm ms-2'>Del</Link>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Employeepage