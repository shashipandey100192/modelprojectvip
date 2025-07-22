import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Employeepage() {
const [user,updateuser]=useState([])

    const userlist = async ()=>{
        await axios.get('http://localhost:7200/allusers').then((d)=>{
            console.log(d.data.allusers);
            updateuser(d.data.allusers);
        });
    }

    useEffect(()=>{
        userlist();
    },[]);


    
const userdelete = async (id)=>{
    await axios.delete(`http://localhost:7200/deleteuser/${id}`).then((u)=>{
        console.log(u);
    });
     userlist();
}



    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <p className='h3 mt-3'>Employee List:-</p>
                    <table className="table mt-3 table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">Mongodb Id</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Actions</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {user.map((d)=>{
                            return(
                                <tr>
                                <th scope="row">{d._id}</th>
                                <td>{d.fullname}</td>
                                <td>{d.dob}</td>
                                <td>{d.email}</td>
                                <td>{d.gender}</td>
                                <td>{d.phone}</td>
                            <td>
                                <Link to={`userdetails/`+d._id} className='btn btn-info btn-sm ms-2'>view</Link>
                                <Link to="" className='btn btn-warning btn-sm ms-2'>Edit</Link>
                                <button className='btn btn-danger btn-sm ms-2' onClick={()=>userdelete(d._id)}>Del</button>
                            </td>
                            </tr>
                            )
                        })}

                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Employeepage