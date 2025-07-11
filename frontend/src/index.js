import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";


import "./appmodules/css/global.css";
import Welcomepage from './appmodules/Welcomepage';
import Userloginpage from './appmodules/modules/users/auth/Userloginpage';
import Userregistorpage from './appmodules/modules/users/auth/Userregistorpage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcomepage/>}></Route>
        <Route path='userportal' element={<Userloginpage/>}></Route>
        <Route path='registor' element={<Userregistorpage/>}></Route>
      </Routes>

    </BrowserRouter>
    

  </React.StrictMode>
);
