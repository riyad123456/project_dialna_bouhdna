import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'; 
import { useState, useEffect } from 'react';

var server = 'http://localhost:5001'

const Searchbar = ({placeholder  }) => {
  
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(server+"/all_Patient", { method: "GET" })
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          
        }
      )
  }, [])
  
  const handleFilter = (event) => {
    const searchWord = event.target.value ; 
    const newFilter = data.filter((value) => {
      return value.title.includes(searchWord) ;  
    }) ; 
    setFilteredData(newFilter) ;
  }

  return (
    <div className='search'>
        <div className='searchInput'> 
            <input type="text" placeholder={placeholder} onChange={handleFilter} />
            <div className='Search Icon'>
                <AiOutlineSearch /> 
            </div>
            <div className='SearchIcon '></div>
        </div>
        {filteredData.length!=0 && (

        <div className='dataResult'> 
          {filteredData.map((value,key) => {
            return <div>
              <p> {value.first_name} </p>
            </div>
          })}
        </div>
        )}
    </div>
  )
}

export default Searchbar