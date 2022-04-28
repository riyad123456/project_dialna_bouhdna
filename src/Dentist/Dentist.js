import React from 'react'
import '../App.css';
import { useState , useEffect } from 'react';

import P_table from './P_table';
import Searchbar from './Searchbar';


var server = 'http://localhost:5001'
 
const Dentist = (props) => {

  console.warn = () => {};

  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(server+"/all_Patient", { method: "GET" })
      .then(res => res.json())
      .then(
        (result) => {
          
          setItems(result);
          
        }
      )
  }, []);
 
  
  return (
    <div>
       
      <br />
      
      <div className='findPatient'>
        <P_table titles= {items} data = {items}/>
      </div>
      <br></br>
      <br></br>
      <section id="about-sec" class="fwh-slide">
          <p class="about-title">About Project</p>
          <p class="about-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </section>
    </div>
  )
  
};

export default Dentist