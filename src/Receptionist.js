import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DB_table from './DB_table.js';
import React, { useEffect, useState } from 'react';
import Rec_appt_table from './rec_appt_table' ;


var server = 'http://localhost:5001'
var matrix = []
var titles = []

const Receptionist = () => {
  
    
    const [items, setItems] = useState([]);
    const [appts, setAppts] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(server+"/all_Patient", { method: "GET" })
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
            
          }
        ).then(
        fetch(server+"/all_RDV", { method: "GET" })
        .then(res => res.json())
        .then(
          (result) => {
            setAppts(result);
            
          }
        )
        )
    }, [])
    console.log(items) ; 
  return (
    <div>

      <br></br> 

      <DB_table titles= {items} data = {items}/>
      <br></br> 
    <Rec_appt_table titles= {appts} data = {appts}/>
    <br></br> 
      <section id="about-sec" class="fwh-slide">
          <p class="about-title">About Project</p>
          <p class="about-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </section>

    </div>
  )
}

export default Receptionist