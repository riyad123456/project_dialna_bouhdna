import React from 'react'
import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react';

var server = 'http://localhost:5001'

const Patient = () => {
  const  id  = useParams().id;
  const [items, setItems] = useState({});

  useEffect(() => {
     fetch(server+`/Patient/${id}`, { method: "GET" })
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          
          
        }
      )
  }, [])
  
  
  return (
    <div>Patient {items.first_name} {items.last_name} </div>
  )
}

export default Patient