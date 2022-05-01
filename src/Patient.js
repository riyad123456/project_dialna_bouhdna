import React from 'react';
import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import C_table from './C_table.js';
var server = 'http://localhost:5001'

const Patient = () => {
  const  id  = useParams().id;
  const [items, setItems] = useState({});
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);


  useEffect(() => {

        console.log(server+`/Patient/${id}`);
         fetch(server+`/Patient/${id}`, { method: "GET" })
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
            
            
          }
        ).then(
          
                  fetch(server+`/treatment/${id}`, { method: "GET" })
              .then(res => res.json())
              .then(
                (result) => {
                  setItems1(result);
                  console.log(result);
                  console.log(items1) ; 
                  
                }
              )
        ).then(
          
          fetch(server+`/RDV_p/${id}`, { method: "GET" })
      .then(res => res.json())
      .then(
        (result) => {
          setItems2(result);
          console.log(result);
          console.log(items2) ; 
          
        }
      )
      ).then(
          
        fetch(server+`/procedure/${id}`, { method: "GET" })
    .then(res => res.json())
    .then(
      (result) => {
        setItems3(result);
        console.log(result);
        console.log(items2) ; 
        
      }
    )
    )
  
  }, [])
  
  
  return (
    <div>
    <div>Bonjour  {items.first_name} {items.last_name}  </div>
    <br></br> 

    <C_table titles= {items1} data = {items1} name="Treatment"/>
    <br></br> 
    <br></br> 

    <C_table titles= {items2} data = {items2} name="Appointment"/>
    <br></br> 
    <br></br> 

    <C_table titles= {items3} data = {items3} name="Procedure"/>
    <br></br>
    </div>
  )
}

export default Patient



