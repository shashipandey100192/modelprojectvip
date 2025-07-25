import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";


import "./appmodules/css/global.css";
import Welcomepage from './appmodules/Welcomepage';
import Userloginpage from './appmodules/modules/users/auth/Userloginpage';
import Userregistorpage from './appmodules/modules/users/auth/Userregistorpage';
import Mainpage from './appmodules/modules/dashboard/Mainpage';
import Homepage from './appmodules/modules/dashboard/Homepage';
import Employeepage from './appmodules/modules/dashboard/Employeepage';
import Landingpage from './appmodules/modules/dashboard/Landingpage';
import Apperror from './appmodules/sharecomponents/Apperror';
import Userdetailspage from './appmodules/modules/dashboard/Userdetailspage';
import Employeeeditpage from './appmodules/modules/dashboard/Employeeeditpage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcomepage/>}></Route>
        <Route path='userportal' element={<Userloginpage/>}></Route>
        <Route path='registor' element={<Userregistorpage/>}></Route>
        <Route path='dashboard' element={<Mainpage/>}>
            <Route path='' element={<Employeepage/>}></Route>
            <Route path='employee' element={<Employeepage/>}></Route>
            <Route path='employee/userdetails/:id' element={<Userdetailspage/>}></Route>
            <Route path='employee/useredit/:id' element={<Employeeeditpage/>}></Route>
            <Route path='dashboard' element={<Landingpage/>}></Route>
            <Route path='*' element={<Apperror/>}></Route>
            
        </Route>
        <Route path='*' element={<Apperror/>}></Route>

      </Routes>

    </BrowserRouter>
    

  </React.StrictMode>
);
