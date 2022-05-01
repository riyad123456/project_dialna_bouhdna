import React from 'react';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Default_Table from '../Default_Table';
import './table.css'


var server = 'http://localhost:5001'


var title = ""
function P_TBody({data}) {
  const [items, setItems] = useState();
  var selectedRow = [];
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({})
  const [patientcnt, setpatientcnt] = useState();
  const handleClose = () => {
    setShow(false);
    
  }
  const  handleShow = ()=>{
    setShow(true);
    
  }
  const list = data.map(
    (json,val) => {
      let li = [];
        Object.keys(json).map((key,value) => {
            li = [...li,json[key]]
        }
          
        )
       
       return <Tr  index = {val} editClick={() => {handleShow(); displayTreatments(data[val])}} delClick={() =>  displayAppointments(data[val])} values= {li}/>
    }
)



  const displayAppointments = (dt) => {
    title = 'Procedure'
    setCurrentItem(dt)
    
    setShow(true);
    
    fetch(server+`/procedure/${dt['patient_id']}`, { method: "GET" })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setpatientcnt(<Default_Table titles= {result} data = {result}/>)
          
        }
      )
    
  }
  const displayTreatments = (dt) => {
      title = 'Treatments'
    setCurrentItem(dt)
    
    setShow(true);
    fetch(server+`/treatment/${dt['patient_id']}`, { method: "GET" })
      .then(res => res.json())
      .then(
        (result) => {
          setpatientcnt(<Default_Table titles= {result} data = {result}/>)
          
        }
      )
}
  
  const collectData = () => {

  }
  return(
    <>
    <tbody>
      
      {list}
        
    </tbody>
   
    <Modal show={show} size="lg" dialogClassName="modal-width" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          {patientcnt}
         
          
        </Modal.Body>
        
      </Modal>
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
function Tr({values,delClick, editClick}){
 
  return (
  <tr>
                  
                  {values.map(
                      (value) => (<Td val= {value}/>))
                      }
                  <td>
                      
                      <ul class="list-inline m-0">
                          
                          <li class="list-inline-item">
                          <Button variant="outline-primary" onClick= {editClick}>Display Treatments</Button>
                          </li>
                          <li class="list-inline-item">
                          <Button variant="outline-primary" onClick = {delClick}>Display Procedure</Button>
                          </li>
                      </ul>
                  </td>
              </tr>
  );
}


export default P_TBody;