import React from 'react';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


var server = 'http://localhost:5001'



function Rec_appt_tbody({data}) {
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
       
       return <Tr  index = {val} editClick={() => {handleShow(val);edit(data[val])}} delClick={() => deleteItem(data[val])} values= {li}/>
    }
)
const getData = () => {
  var elem = document.querySelector('#editForm')
  var count = 0;
  Object.keys(currentItem).map((key,value) => {
    currentItem[key] = elem[count++].value
})

  
  fetch(server+"/RDVUpdate", { 
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

  const deleteItem  = (dt) => {
   
    
    fetch(server+`/RDV/${dt["appointment_id"]}`, { 
      method: "DELETE" ,
      headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
          },
          params: dt["appointment_id"]
    }).then(window.location.reload(false))
    
    
  }
  const edit = (dt) => {
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
                          <Button variant="outline-warning" onClick= {editClick}>Edit</Button>
                          </li>
                          <li class="list-inline-item">
                          <Button variant="outline-danger" onClick = {delClick}>Delete</Button>
                          </li>
                      </ul>
                  </td>
              </tr>
  );
}

export default Rec_appt_tbody;