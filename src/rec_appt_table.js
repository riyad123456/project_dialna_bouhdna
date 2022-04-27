import Thead from './Thead.js'
import Tbody from './Tbody.js'
import React, { useEffect, useState } from 'react';
import './App.css';
var Ts = []
function rec_appt_table(props) {
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
                            <table class="table m-0">
                              
                                
                                <Thead titles= {Ts}/>
                                <Tbody data={props.data}/>
                               
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

export default rec_appt_table;