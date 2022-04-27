import Thead from './Thead.js'
import Default_TBody from './Default_TBody'
import React, { useEffect, useState } from 'react';
import './App.css';
var Ts = []
function Default_Table(props) {
   
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
           
                <div class="card border-0 shadow">
                    <div class="card-body p-5">

                        
                        <div class="table-responsive">
                            <table class="table m-0">
                              
                                
                                <Thead titles= {Ts}/>
                                <Default_TBody data={props.data}/>
                               
                            </table>

                       
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}

export default Default_Table;