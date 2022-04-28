import Thead from './Thead.js'
import Tbody from './Tbody.js'
import React, { useEffect, useState } from 'react';
import './App.css';
import Rec_appt_tbody from './Rec_appt_tbody';


var Ts = []
function Rec_appt_table(props) {
    const doThis = () => {
        {props.titles.map(
            (json,val) => {
                Ts = Object.keys(json)
            }
        )}
    }
    doThis()
    return (
        <div>
            
            <section id="table" class="fwh-slide1">
        <div class="row">
            <div class="col-lg-11 mx-auto" >
                <div class="card border-0 shadow">
                    <div class="card-body p-5">

                        
                        <div class="table-responsive">
                        <h1> Appointments</h1>
                            <table class="table m-0">
                              
                                
                                <Thead titles= {Ts}/>
                                <Rec_appt_tbody data={props.data}/>
                               
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

export default Rec_appt_table;