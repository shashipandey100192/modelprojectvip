import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { baseurl } from '../service/Myservicepage';

function Userdetailspage() {
        const {id} = useParams();

    const [user,updateuser]=useState({})
    
        const singleuserfunc = async ()=>{
            await axios.get(`${baseurl}/singleuser/${id}`).then((d)=>{
                console.log(d.data);
               updateuser(d.data.singleuser)
            });
        }
    
        useEffect(()=>{
            singleuserfunc();
        },[]);
    


  return (
    <div className='container-fluid mt-5 border'>
        <div className='row'>
            <div className='col-12 p-3'>
                <Link to="/dashboard/employee" className='btn btn-info float-end'>Back</Link>
                <h2>user Info</h2>
            </div>
            <div className='col-12'>
                    
                <div className='card p-3 bg-light shadow'>
                <h3>Name: {user.fullname}</h3>
                <h3>Email: {user.email}</h3>
                <h3>DOB: {user.dob}</h3>
                <h3>Gender: {user.gender}</h3>
                <h3>Phone No: {user.phone}</h3>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Userdetailspage