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
      

    </div>
  )
}

export default Receptionist