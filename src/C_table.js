import logo from './logo.svg';
import Table from 'react-bootstrap/Table'
import Thead from './Thead.js'
import Cbody from './Cbody.js'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from 'react';
import './App.css';
var Ts = []
var server = 'http://localhost:5001'

function C_table(props) {
    
    const doThis = () => {
        {props.titles.map(
            (json,val) => {
                Ts = Object.keys(json)
            }
        )}
    }

    
    doThis()
    console.log(Ts);
    return (
        <div>
            
            <section id="table" class="fwh-slide1">
              
        <div class="row">
            <div class="col-lg-11 mx-auto" >
                <div class="card border-0 shadow">
                    <div class="card-body p-5">

                        
                        <div class="table-responsive">
                        <h1> {props.name}</h1>
                            <table class="table m-0">
                              
                                
                                <Thead titles= {Ts}/>
                                <Cbody data={props.data}/>
                               
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

export default C_table;