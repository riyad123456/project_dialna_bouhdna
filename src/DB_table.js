import logo from './logo.svg';
import Table from 'react-bootstrap/Table'
import Thead from './Thead.js'
import Tbody from './Tbody.js'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from 'react';
import './App.css';
var Ts = []
var server = 'http://localhost:5001'
function DB_table(props) {
    const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    
  }
  const  handleShow = (key)=>{
    setShow(true);
    
  }
    const doThis = () => {
        {props.titles.map(
            (json,val) => {
                Ts = Object.keys(json)
            }
        )}
    }
    const getData = () => {
        var newValue = {}
        var elem = document.querySelector('#addForm')
        var count = 0;
        Ts.map((key) => {
          newValue[key] = elem[count++].value
      })
      fetch(server+"/patient/pAdd", { 
        method: "POST" ,
        headers: {
              "Content-Type": "application/json",
              "x-access-token": "token-value",
            },
            body: JSON.stringify(newValue)
      }).then(setShow(false))
      
        
       
        
           
      }
    const addContent = Ts.map((value) => <FormGroupEmpty Key = {value} />)
    doThis()
    return (
        <div>
            
            <section id="table" class="fwh-slide1">
        <div class="row">
            <div class="col-lg-11 mx-auto" >
                <div class="card border-0 shadow">
                    <div class="card-body p-5">

                        
                        <div class="table-responsive">
                            <table class="table m-0">
                              
                                
                                <Thead titles= {Ts}/>
                                <Tbody data={props.data}/>
                               
                            </table>

                        </div>
                        <br></br>
                        <Button variant="outline-primary"  onClick={handleShow}>
                           Add patient
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit instance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="addForm"> 
          {addContent}
            
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={getData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
export default DB_table;