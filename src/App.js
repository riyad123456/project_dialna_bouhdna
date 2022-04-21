import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DB_table from './DB_table.js'
import React, { useEffect, useState } from 'react';




var server = 'http://localhost:5001'
var matrix = []
var titles = []

function App() {
  console.warn = () => {};
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(server+"/all_Patient", { method: "GET" })
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          
        }
      )
  }, [])
    
  return (
    
    <div>
    <header>
        <div class="navbar">
            <div class="logo">
                <h4>YourDentist</h4>
            </div>
            </div>
            
            
    </header>
    
    <br></br>
    
    <DB_table titles= {items} data = {items}/>
   
    <section id="about-sec" class="fwh-slide">
        <p class="about-title">About Project</p>
        <p class="about-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </section>
    </div>
  );
}

export default App;
