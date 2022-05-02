import './table.css'
import Thead from '../Thead'
import P_TBody from './P_TBody'
import Table from 'react-bootstrap/Table'
import DB_table from '../DB_table';
import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import { MDBCol } from "mdbreact";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../App.css';
var Ts = ['treatment_ID','treatment_type','patient_ID','medication','symptoms','tooth','patient_condition']

var Ts1 = ['appointment_ID','patient_ID','fee_charge_ID','medication','symptoms','tooth','patient_condition']
var Ts2 = ["Appointment_ID","Patient_ID","Fee_charge_ID" , "Procedure_code", "Procedure_type", "Procedure_description",
  "Tooth","Amount_of_procedures", "Total_charge", "Appointment_date"]


var server = 'http://localhost:5001'


var myData =[]
function P_table(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false);
      
    }
    const  handleShow = (key)=>{
      setShow(true);
      
    }

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => {
      setShow1(false);
      
    }
    const  handleShow1 = (key)=>{
      setShow1(true);
    }
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => {
      setShow2(false);
      
    }
    const  handleShow2 = (key)=>{
      setShow2(true);
    }
    const [items, setItems] = useState([]);
   
    const executeSearch = (word) => {
        
        if (word === "") {
            fetch(server+"/all_Patient", { method: "GET" })
                .then(res => res.json())
                .then(
                    (result) => {
                    
                    setItems(result);
                    
        }
      )
        }
        if (word === undefined || word === null) {
            console.log("Variable is either null or undefined");
            return false
        }
        console.log(word)

        
        fetch(server+`/search/patient/${word}`, {  method: "GET"})
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            setItems(result);
            
          }
        )
       
       
    }

    const getData = () => {
        var newValue = {}
        var elem = document.querySelector('#addForm')
        var count = 0;
        Ts.map((key) => {
          newValue[key] = elem[count++].value
      })
      fetch(server+"/TreatmentADD", { 
        method: "POST" ,
        headers: {
              "Content-Type": "application/json",
              "x-access-token": "token-value",
            },
            body: JSON.stringify(newValue)
      }).then(setShow(false))
      .then( window.location.reload(false))
    }

      const getData2 = () => {
        var newValue = {}
        var elem = document.querySelector('#addForm2')
        var count = 0;
        Ts2.map((key) => {
          newValue[key] = elem[count++].value
      })
      fetch(server+"/RDVAdd", { 
        method: "POST" ,
        headers: {
              "Content-Type": "application/json",
              "x-access-token": "token-value",
            },
            body: JSON.stringify(newValue)
      }).then(setShow2(false))
      .then( window.location.reload(false))
      
        
       
        
           
      }

      const getData1 = () => {
        var newValue = {}
        var elem = document.querySelector('#addForm1')
        var count = 0;
        Ts1.map((key) => {
          newValue[key] = elem[count++].value
      })
      console.log(newValue);
      fetch(server+"/procedureADD", { 
        method: "POST" ,
        headers: {
              "Content-Type": "application/json",
              "x-access-token": "token-value",
            },
            body: JSON.stringify(newValue)
      }).then(setShow(false))
      .then( window.location.reload(false))
      
        
       
        
           
      }
    const addContent = Ts.map((value) => <FormGroupEmpty Key = {value} />)
    const addContent1 = Ts1.map((value) => <FormGroupEmpty Key = {value} />)
    const addContent2 = Ts2.map((value) => <FormGroupEmpty Key = {value} />)

    return (
        <div>
            
            <section id="table" class="fwh-slide1" variant="dark">
            
        <div class="row">
            <div class="col-lg-11 mx-auto" >
                <div class="card border-0 shadow">
                    <div class="card-body p-5">
                    <h1> Search for patient:</h1>
                    <MDBCol md="6">
                            <input className="form-control" autocomplete="off" type="text" id="search" placeholder="Search" aria-label="Search" onChange={(e) => { executeSearch(e.target.value)}}/>
                            </MDBCol>
                        <div class="table-responsive">
                        
                            <table class="table m-0">
                              
                                
                                <Thead titles= {Ts}/>
                                <P_TBody data={
                                  items
                                    
                                    }/>
                               
                            </table>
                            <br></br>
                        <Button variant="outline-primary"  onClick={handleShow}>
                           Add Treatment
                        </Button>

                        <Button variant="outline-primary"  onClick={handleShow1}>
                           Add Procedure
                        </Button>

                        <Button variant="outline-primary"  onClick={handleShow2}>
                           Add Appointment
                        </Button>
                        </div>
                    </div>
                    <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Treatment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="addForm"> 
          {addContent}
            
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={getData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


      
      <Modal show={show1} size="lg" onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Add Procedure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="addForm1"> 
          {addContent1}
            
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant=" secondary" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="primary" onClick={getData1}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} size="lg" onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Add Procedure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="addForm2"> 
          {addContent2}
            
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Cancel
          </Button>
          <Button variant="primary" onClick={getData2}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}

function FormGroupEmpty({Key,value}){
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

export default P_table;