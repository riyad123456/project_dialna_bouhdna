
import Thead from '../Thead'
import Tbody from '../Tbody'
import Table from 'react-bootstrap/Table'
import DB_table from '../DB_table';
import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import '../App.css';
var Ts = []
function P_table(props) {
    
    const [items, setItems] = useState([]);
    const doThis = () => {
        {props.titles.map(
            (json,val) => {
                Ts = Object.keys(json)
                console.log(json);
            }
            )}
    }
    
    doThis();
    
    return (
        <div>
            
            <section id="table" class="fwh-slide1">
            
        <div class="row">
            <div class="col-lg-7 mx-auto" >
                <div class="card border-0 shadow">
                    <div class="card-body p-5">

                        
                        <div class="table-responsive">
                        <div className='SearchBar'>
                            <Searchbar placeholder= 'Search for Patient..' />
                        </div>
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

export default P_table;