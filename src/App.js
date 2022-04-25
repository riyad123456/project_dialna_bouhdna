import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom' ; 

import Patient from './Patient';
import Receptionist from './Receptionist';
import Dentist from './Dentist';
import Navbar from './Navbar';


function App() {    
  return (
    
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/patient' element = {<Patient />}>
        </Route>

        <Route path='/' element = {<Receptionist /> }>
        </Route>

        <Route path='/dentist' element={<Dentist /> }>
        </Route>

    </Routes>
    </div>
  );
}

export default App;
