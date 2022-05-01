import React from 'react';
import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import C_table from './C_table.js';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
var server = 'http://localhost:5001'

const Patient = () => {
  var selectedRow = [];
  const  id  = useParams().id;
  const [items, setItems] = useState({});
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({})

  const handleClose = () => {
    setShow(false);
    
  }
  const  handleShow = (key)=>{
    setShow(true);
    edit(items);
    
  }

  const getData = () => {
    var elem = document.querySelector('#editForm')
    var count = 0;
    Object.keys(currentItem).map((key,value) => {
      currentItem[key] = elem[count++].value
  })
    
    fetch(server+`/pUpdate/${id}`, { 
      method: "PUT" ,
      headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
          },
          body: JSON.stringify(currentItem)
    }).then(setShow(false))
    
       
  }
  const editContent = Object.keys(currentItem).map((key,value) => {
    selectedRow.push(<FormGroup Key = {key} value={currentItem[key]}/>)
  })
const edit = (dt) => {
    setCurrentItem(dt)
  }

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
  
  return (
    <div>
    <div>Bonjour  {items.first_name} {items.last_name} <Button variant="outline-warning" onClick= {() => handleShow(true)}>Edit</Button> </div>
    <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit instance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="editForm"> 
          {(editContent)}
            {selectedRow}
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={getData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
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



