import React from 'react';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


var server = 'http://localhost:5001'
var Ts = ["Appointment_ID","Patient_ID","Fee_charge_ID" , "Procedure_code", "Procedure_type", "Procedure_description",
  "Tooth","Amount_of_procedures", "Total_charge", "Appointment_date"]


function Tbody({data}) {
  const [items, setItems] = useState();
  var selectedRow = [];
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [currentItem, setCurrentItem] = useState({})
  const handleClose = () => {
    setShow(false);
    
  }
  const  handleShow = (key)=>{
    setShow(true);
    
  }
  const handleClose1 = () => {
    setShow1(false);
    
  }
  const  handleShow1 = ()=>{
    setShow1(true);
    
  }
  const list = data.map(
    (json,val) => {
      let li = [];
        Object.keys(json).map((key,value) => {
            li = [...li,json[key]]
        }
          
        )
       
       return <Tr  index = {val} editClick={() => {handleShow(val);edit(data[val])}} delClick={() => deleteItem(data[val])}  addapptClick = {() => {handleShow1();addAppt(data[val])}} values= {li}/>
    }
)
const getData = () => {
  var elem = document.querySelector('#editForm')
  var count = 0;
  Object.keys(currentItem).map((key,value) => {
    currentItem[key] = elem[count++].value
})
  
  fetch(server+`/pUpdate/${currentItem["patient_id"]}`, { 
    method: "PUT" ,
    headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(currentItem)
  }).then(setShow(false))
  
     
}
const getData1 = () => {
  var elem = document.querySelector('#editForm1')
  var count = 0;
  var newAppt = {}
  Object.keys(currentItem).map((key,value) => {
    newAppt[key] = elem[count++].value
})
fetch(server+"/RDVAdd", { 
  method: "POST" ,
  headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(newAppt)
}).then(setShow1(false))
.then( window.location.reload(false))
  
  
     
}
const editContent = Object.keys(currentItem).map((key,value) => {
  selectedRow.push(<FormGroup Key = {key} value={currentItem[key]}/>)
})
const addapptContent = Ts.map((key,value) => {
  
  if (key === "Patient_ID"){
    return <><FormGroup  Key = {key} disabled = {true} value={currentItem["patient_id"]}/><br></br></>
  }
  else {
  return <><FormGroup Key = {key} value={""}/><br></br></>
  }
})

  const deleteItem  = (dt) => {
   
    
    fetch(server+`/patient/${dt["patient_id"]}`, { 
      method: "DELETE" ,
      headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
          },
          params: dt["patient_id"]
    }).then(window.location.reload(false))
    
  }
  const edit = (dt) => {
    setCurrentItem(dt)
  }
  const addAppt = (dt) => {
    setCurrentItem(dt)
  }
  const collectData = () => {

  }
  return(
    <>
    <tbody>
      
      {list}
        
    </tbody>
   
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
      <Modal show={show1} size="lg" onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Add appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="editForm1"> 
          {(addapptContent)}
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary"  onClick={getData1}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
);
  
}

function Td({val}) {
  return (
      <td >{val}</td>
  );
}
function FormGroup({Key,value,disabled}){
  return (
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label >{Key}</Form.Label>
            <Form.Control class = {Key}
            defaultValue={value}
              autoFocus
              disabled = {disabled}
            />
          </Form.Group>
          );
}
function Tr({values,delClick, editClick, addapptClick}){
 
  return (
  <tr>
                  
                  {values.map(
                      (value) => (<Td val= {value}/>))
                      }
                  <td>
                      
                      <ul class="list-inline m-0">
                          
                          <li class="list-inline-item">
                          <Button variant="outline-warning" onClick= {editClick}>Edit</Button>
                          </li>
                          <li class="list-inline-item">
                          <Button variant="outline-danger" onClick = {delClick}>Delete</Button>
                          </li>
                          <li class="list-inline-item">
                          <Button variant="outline-primary" onClick = {addapptClick}>Add appointment</Button>
                          </li>
                      </ul>
                  </td>
              </tr>
  );
}

export default Tbody;