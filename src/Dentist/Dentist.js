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
 
  console.log(items.last_name);
  return (
    <div>
       
      <br />
      
      <div className='findPatient'>
        <P_table titles= {items} data = {items}/>
      </div>
    </div>
  )
  
};

export default Dentist