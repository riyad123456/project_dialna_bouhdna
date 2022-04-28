import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom' ; 

import Patient from './Patient';
import Receptionist from './Receptionist';
import Dentist from './Dentist/Dentist';
import Navbar from './Navbar';
import Login from './Login-Signup/Login';
import Signup from './Login-Signup/Signup';

function App() {    
  return (
    
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element = {<Login />}>

        </Route>
        <Route path='/Signup' element={<Signup />}>

        </Route>
        <Route path='/Patient/:id' element = {<Patient />}>
        </Route>

        <Route path='/Receptionist/:id' element = {<Receptionist /> }>
        </Route>

        <Route path='/Dentist/:id' element={<Dentist /> }>
        </Route>

    </Routes>
    </div>
  );
}

export default App;
