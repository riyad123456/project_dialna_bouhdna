import './table.css'
import Thead from '../Thead'
import P_TBody from './P_TBody'
import Table from 'react-bootstrap/Table'
import DB_table from '../DB_table';
import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import { MDBCol } from "mdbreact";
import '../App.css';
var Ts = []

var server = 'http://localhost:5001'


var myData =[]
function P_table(props) {
    
    const [items, setItems] = useState([]);
    const doThis = () => {
        {props.titles.map(
            (json,val) => {
                Ts = Object.keys(json)
            }
            )}
           
    }
    
    doThis();
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

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}

export default P_table;