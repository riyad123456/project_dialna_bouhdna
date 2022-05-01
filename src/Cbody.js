import React from 'react';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


var server = 'http://localhost:5001'



function Cbody({data}) {
  const [items, setItems] = useState();
  var selectedRow = [];
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({})
  const handleClose = () => {
    setShow(false);
    
  }
  const  handleShow = (key)=>{
    setShow(true);
    
  }
  const list = data.map(
    (json,val) => {
      let li = [];
        Object.keys(json).map((key,value) => {
            li = [...li,json[key]]
        }
          
        )
       
       return <Tr  index = {val}  values= {li}/>
    }
)

  
     



  return(
    <>
    <tbody>
      
      {list}
        
    </tbody>
   
    
    </>
);
  } 


function Td({val}) {
  return (
      <td >{val}</td>
  );
}
function FormGroup({Key,value}){
  return (
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label >{Key}</Form.Label>
            <Form.Control class = {Key}
            defaultValue={value}
              autoFocus
            />
          </Form.Group>
          );
}
function Tr({values}){
 
  return (
  <tr>
                  
                  {values.map(
                      (value) => (<Td val= {value}/>))
                      }
                  
              </tr>
  );
}

export default Cbody;